import "./index.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Swal from "sweetalert2";

function Detail() {
  const { addId } = useParams();

  const [detail, setDetail] = useState([]);
  const [order, setOrder] = useState(0);

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = () => {
    fetch(`https://dummyjson.com/products/${addId}`)
      .then((res) => res.json())
      .then((res) => {
        setDetail(res);
      });
  };

  const addCart = () => {
    Swal.fire({
      title: "Thank You!",
      text: "Add to cart successfully!",
      icon: "success",
    });
    setOrder(order + 1);
    // alert("Successfully add to cart");
  };

  const cancelOrder = () => {
    if (order === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You have no order for cancel",
        showConfirmButton: false,
        timer: 1500,
      });
      // alert("order first");
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to cancel this order!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, cancel it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Canceled!",
            text: "Your order has been canceled.",
            icon: "success",
          });
          setOrder(order - 1);
        }
      });
    }
  };

  return (
    <div className="main-contant">
      <div className="image-contant">
        <img className="image" src={detail.thumbnail} alt="" />
      </div>
      <div className="text-contant">
        <h1 className="heading">Detail</h1>
        <div className="detailHeading">
          <h3>Title :</h3>
          <h2>{detail.title}</h2>
          <h3>Brand :</h3>
          <h2>{detail.brand}</h2>
          <h3>Price :</h3> <h2>Rs. {detail.price}00</h2>
          <h3>Discount :</h3> <h2>{detail.discountPercentage}%</h2>
          <h3>Category :</h3> <h2>{detail.category}</h2>
          <h3>Rating :</h3>
          <h2>
            {detail.rating}
            <img
              src="https://pngimg.com/d/star_PNG1592.png"
              alt=""
              width={20}
            />
          </h2>
          <div className="payMethod">
            <h4 className="method">
              <label htmlFor="">Payment Method</label>
            </h4>

            <div>
              <input type="radio" name="payment" id="delevry" />
              <label htmlFor="delevry">Cash on delevry</label>
            </div>
            <div>
              <input type="radio" name="payment" id="online" />
              <label htmlFor="online">Online Pay</label>
            </div>
          </div>
        </div>

        <div className="btnDiv">
          <button onClick={addCart} className="addBtn">
            Order now
          </button>
          <div className="orderList">
            <FaCartShopping />
            <h2>{order}</h2>
          </div>
          <button onClick={cancelOrder} className="addBtn">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
