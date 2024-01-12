import CardBody from "../CardBody";

import "./index.css";
import { useEffect, useState } from "react";
function Card() {
  const [products, setProducte] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducte(res.products);
      });
  };

  return (
    <>
      <h1 className="heading">More in Services</h1>
      <div className="card-div">
        {products.map((obj) => {
          return (
            <CardBody
              image={obj.thumbnail}
              title={obj.title}
              price={obj.price}
              description={obj.description}
              id={obj.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default Card;
