import { useState } from "react";
import "../src/assets/styles/App.css";
import Menu from "./components/Menu/Menu";
import Scores from "./components/Scores/Scores";

function App() {
  const [view, setView] = useState("menu");

  const handleButtonClick = (buttonName: string) => {
    if (buttonName === "Game") {
      console.log("Start Game button clicked");
    } else if (buttonName === "Scores") {
      console.log("Scores button clicked");
      setView("scores");
    }
  };

  return (
    <>
      {view === "menu" && <Menu onButtonClick={handleButtonClick} />}{" "}
      {view === "scores" && <Scores />}
    </>
  );
}

export default App;
