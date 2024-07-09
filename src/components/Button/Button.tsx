import "./Button.css";

type ButtonProps = { name: string; onClick: () => void };

function Button(props: ButtonProps) {
  const { name, onClick } = props;

  return (
    <button type="button" className="btn btn-lg" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
