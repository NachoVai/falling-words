import { useState } from "react";
import "../src/assets/styles/App.css";
import Menu from "./components/Menu/Menu";
import Scores from "./components/Scores/Scores";
import Game from "./components/Game/Game";
function App() {
  const [view, setView] = useState("menu");

  const handleButtonClick = (buttonName: string) => {
    if (buttonName === "Game") {
      console.log("Game button clicked");
      setView("game");
    } else if (buttonName === "Scores") {
      console.log("Scores button clicked");
      setView("scores");
    } else if (buttonName === "Menu") {
      console.log("Menu button clicked");
      setView("menu");
    } else if (buttonName === "Pause") {
      console.log("Pause Game button clicked");
    } else if (buttonName === "Play") {
      console.log("Play Game button clicked");
    }
  };

  return (
    <>
      {view === "menu" && <Menu onButtonClick={handleButtonClick} />}{" "}
      {view === "scores" && <Scores onButtonClick={handleButtonClick} />}{" "}
      {view === "game" && <Game onButtonClick={handleButtonClick} />}{" "}
    </>
  );
}

export default App;
