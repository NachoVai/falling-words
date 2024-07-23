const words = [
  "sandia",
  "mora",
  "frutilla",
  "durazno",
  "manzana",
  "pera",
  "melon",
  "platano",
  "pepino",
  "naranja",
];

export const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
