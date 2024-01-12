import "./index.css";
import Card from "../../ReUseAble/Card";

// IMPORT IMAGES
import animal from "./images/animal.png";
import bikes from "./images/bikes.png";
import books from "./images/books.png";
import camera from "./images/camera.png";
import fashion from "./images/fashion.png";
import furniture from "./images/furniture.png";
import industrial from "./images/industrial.png";
import jobs from "./images/jobs.png";
import kids from "./images/kids.png";
import mobiles from "./images/mobiles.png";
import propertyForRent from "./images/propertyForRent.png";
import propertyForSale from "./images/propertyForSale.png";
import services from "./images/services.png";
import vehicles from "./images/vehicles.png";

function Dashbodr() {
  // ARRAY of OBJ

  const arrayOfObj = [
    {
      img: animal,
      dis: "Animles",
    },
    {
      img: bikes,
      dis: "Bikes",
    },
    {
      img: books,
      dis: "Books, Sports & Hobbies",
    },
    {
      img: camera,
      dis: "Electronics & Home Appliances",
    },
    {
      img: fashion,
      dis: "Fashion & Beauty",
    },
    {
      img: furniture,
      dis: "Furniture & Home Decor",
    },
    {
      img: industrial,
      dis: "Business, Industrial & Agriculture",
    },
    {
      img: jobs,
      dis: "Jobs",
    },
    {
      img: kids,
      dis: "Kids",
    },
    {
      img: mobiles,
      dis: "Mobiles",
    },
    {
      img: propertyForRent,
      dis: "Property For Rent",
    },
    {
      img: propertyForSale,
      dis: "Property For Sale",
    },
    {
      img: services,
      dis: "Services",
    },
    {
      img: vehicles,
      dis: "Vehicles",
    },
  ];

  return (
    <div className="main-container">
      <div className="contant">
        <h1 className="heading">All categories</h1>
        <div className="categoriesDiv">
          {arrayOfObj.map((obj, index) => {
            return (
              <span className="img-text">
                <img id={index + 1} src={obj.img} alt="" />
                <h4>{obj.dis}</h4>
              </span>
            );
          })}
        </div>
      </div>

      {/* CARDs */}
      <Card />
    </div>
  );
}

export default Dashbodr;
