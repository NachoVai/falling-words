import "./Button.css";

type ButtonProps = { name: string; onClick: () => void };

function Button(props: ButtonProps) {
  const { name, onClick } = props;

  return (
    <button
      type="button"
      className="btn btn-lg"
      onClick={onClick}
      aria-label={name}
    >
      {name}
    </button>
  );
}

export default Button;
