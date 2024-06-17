import Button from "../Button/Button";

type CardBodyProps = { title?: string; description?: string };

function CardBody(props: CardBodyProps) {
  const { title, description } = props;

  return (
    <>
      <div className="card-body">
        <h1 className="card-title text-center">{title}</h1>
        <p className="card-text text-center">{description}</p>
        <div className="d-flex flex-column align-items-center">
          <Button name={"Start Game"} />
          <Button name={"Scores"} />
        </div>
      </div>
    </>
  );
}

export default CardBody;
