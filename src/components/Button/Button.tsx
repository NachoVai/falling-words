import "./Button.css";

type ButtonProps = { name: string };

function Button(props: ButtonProps) {
  const { name } = props;
  return (
    <button type="button" className="btn btn-lg">
      {name}
    </button>
  );
}

export default Button;
