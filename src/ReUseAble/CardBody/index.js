import "./index.css";
import { useNavigate } from "react-router-dom";

function CardBody(props) {
  const navigate = useNavigate();

  const { image, title, price, description, id } = props;

  return (
    <div className="card-container">
      <div className="card-contant">
        <div className="card-img">
          <img className="image" src={image} alt="" />
        </div>
        <div className="card-text">
          <h3> {title}</h3>
          <h4> Rs. {price}00</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            itaque .
          </p>
          <button onClick={() => navigate(`detail/${id}`)} className="moreBtn">
            More Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardBody;
