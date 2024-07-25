import { useState } from "react";

type ScoreData = {
  name: string;
  score: number;
};

const useSubmitScore = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const submitScore = async (scoreData: ScoreData) => {
    setLoading(true);
    setError(null);
    setResult(null);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("mode", "no-cors");

    const raw = JSON.stringify({
      score: scoreData,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    try {
      const response = await fetch(
        "http://localhost:3000/scores",
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const resultText = await response.text();
      setResult(resultText);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { submitScore, loading, error, result };
};

export default useSubmitScore;
