type CardBodyProps = { title?: string; description?: string };

function CardBody(props: CardBodyProps) {
  const { title, description } = props;

  return (
    <>
      <div className="card-body">
        <h1 className="card-title text-center">{title}</h1>
        <p className="card-text text-center">{description}</p>
      </div>
    </>
  );
}

export default CardBody;
