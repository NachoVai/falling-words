type CardBodyProps = {
  title?: string;
  description?: string;
};

function CardBody(props: CardBodyProps) {
  const { title, description } = props;

  return (
    <div className="card-body">
      {title && <h1 className="card-title mb-3">{title}</h1>}
      {description && <p className="card-text text-center">{description}</p>}
    </div>
  );
}

export default CardBody;
