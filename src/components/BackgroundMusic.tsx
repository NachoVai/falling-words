import React, { useEffect, useRef } from "react";

type BackgroundMusicProps = {
  view: string;
};

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ view }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    const playMusic = () => {
      if (view === "game") {
        audioElement.src = "../music/game-music.mp3";
        audioElement.loop = true;
        audioElement.play();
      } else if (view === "menu") {
        audioElement.src = "../music/index-music.mp3";
        audioElement.loop = true;
        audioElement.play();
      } else if (view === "scores") {
        audioElement.src = "../music/scores-music.mp3";
        audioElement.loop = true;
        audioElement.play();
      } else {
        audioElement.play();
        audioElement.currentTime = 0;
      }
    };

    playMusic();

    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    };
  }, [view]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const audioElement = audioRef.current;
      if (!audioElement) return;

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

  return <audio ref={audioRef} preload="auto" />;
};

export default BackgroundMusic;
