import { FallingWord } from "../../../hooks/useFallingWords";

type FallingWordsProps = {
  fallingWords: FallingWord[];
  onAnimationEnd: (id: number) => void;
};

const FallingWords: React.FC<FallingWordsProps> = ({
  fallingWords,
  onAnimationEnd,
}) => {
  return (
    <>
      {fallingWords.map(
        ({ id, word, left, animationDuration, animationPlayState }) => (
          <div
            key={id}
            className="falling-word"
            style={{ left, animationDuration, animationPlayState }}
            onAnimationEnd={() => onAnimationEnd(id)}
          >
            {word}
          </div>
        )
      )}
    </>
  );
};

export default FallingWords;
