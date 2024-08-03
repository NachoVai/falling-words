import { useState } from "react";
import "../src/assets/styles/App.css";
import Menu from "./components/Menu/Menu";
import Scores from "./components/Scores/Scores";
import BackgroundMusic from "../src/components/BackgroundMusic/BackgroundMusic";
import GameBoard from "./components/Game/components/GameBoard";
import Footer from "./components/Footer/Footer";
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
    <>
      <main>
        <BackgroundMusic view={view} />
        {view === "menu" && <Menu onButtonClick={handleButtonClick} />}
        {view === "scores" && <Scores onButtonClick={handleButtonClick} />}
        {view === "game" && <GameBoard onButtonClick={handleButtonClick} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
