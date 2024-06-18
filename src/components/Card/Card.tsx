import { ReactNode } from "react";
import "./card.css";

type CardProps = {
  children?: ReactNode;
};

function Card(props: CardProps) {
  const { children } = props;

  return (
    <>
      <div className="container mt-5" id="menu">
        <div className="card">{children}</div>
      </div>
    </>
  );
}

export default Card;
