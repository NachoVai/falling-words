import Card from "../Card/Card";
import CardBody from "../CardBody/CardBody";
import Button from "../Button/Button";
import "./menu.css";

type MenuProps = {
  onButtonClick: (buttonName: string) => void;
};

function Menu(props: MenuProps) {
  const { onButtonClick } = props;

  return (
    <>
      <section className="container mt-5" id="menu">
        <Card>
          <header>
            <CardBody
              title="Falling Words"
              description="A game to improve your tipying skills"
            />
          </header>
          <nav className="d-flex flex-column align-items-center">
            <Button name="Start Game" onClick={() => onButtonClick("Game")} />
            <Button name="Scores" onClick={() => onButtonClick("Scores")} />
          </nav>
        </Card>
      </section>
    </>
  );
}

export default Menu;
