import CardBody from "../CardBody/CardBody";
import "./card.css";

function Card() {
  return (
    <>
      <div className="container mt-5" id="menu">
        <div className="card">
          <CardBody
            title={"Falling Words"}
            description={"A typing game to improve your speed and accuracy."}
          />
        </div>
      </div>
    </>
  );
}

export default Card;
