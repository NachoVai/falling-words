// useGetRandomWord.ts
import { useState, useEffect } from "react";

const useGetRandomWord = () => {
  const [words, setWords] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch(
          `https://clientes.api.greenborn.com.ar/public-random-word?c=99`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error("Failed to fetch words:", error);
        setError("Failed to fetch words");
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  return { words, loading, error };
};

export default useGetRandomWord;
