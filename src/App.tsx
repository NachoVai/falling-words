import { useState } from "react";
import "../src/assets/styles/App.css";
import Menu from "./components/Menu/Menu";
import Scores from "./components/Scores/Scores";
import Game from "./components/Game/Game";
function App() {
  const [view, setView] = useState("menu");

  const handleButtonClick = (buttonName: string) => {
    if (buttonName === "Game") {
      setView("game");
    } else if (buttonName === "Scores") {
      setView("scores");
    } else if (buttonName === "Menu") {
      setView("menu");
    }
  };

  return (
    <main>
      {view === "menu" && <Menu onButtonClick={handleButtonClick} />}{" "}
      {view === "scores" && <Scores onButtonClick={handleButtonClick} />}{" "}
      {view === "game" && <Game onButtonClick={handleButtonClick} />}{" "}
      {/* <span>Nvai</span> */}
    </main>
  );
}

export default App;
