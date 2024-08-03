import "./backgroundMusic.css";
import { useEffect, useState, useRef } from "react";

type BackgroundMusicProps = {
  view: string;
};

function BackgroundMusic(props: BackgroundMusicProps) {
  const { view } = props;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    if (view === "game") {
      audioElement.src = "/music/game-music.mp3";
    } else if (view === "menu") {
      audioElement.src = "/music/menu-music.mp3";
    } else if (view === "scores") {
      audioElement.src = "/music/scores-music.mp3";
    } else {
      audioElement.pause();
      audioElement.currentTime = 0;
      return;
    }

    audioElement.loop = true;
    audioElement.play();

    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, [view]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = volume;
    }
  }, [volume]);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="background-music">
      <audio ref={audioRef} />
      <div className="volume-control">
        <label htmlFor="volume-control">Volume: </label>
        <input
          id="volume-control"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default BackgroundMusic;
