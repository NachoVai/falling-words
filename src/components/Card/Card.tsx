import "./card.css";

function Card() {
  return (
    <>
      <div className="container mt-5" id="menu">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-center">Falling Words</h1>
            <p className="card-text text-center">
              A typing game to improve your speed and accuracy.
            </p>
            <div className="d-flex flex-column align-items-center">
              <button type="button" className="btn btn-outline-success">
                Start Game
              </button>
              <button type="button" className="btn btn-outline-success">
                Scores
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
