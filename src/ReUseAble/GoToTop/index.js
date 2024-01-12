import React from "react";
import "./index.css";

import { FaArrowUp } from "react-icons/fa";

function GoToTop() {
  const gotToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="btnDiv">
      <button className="topBtn" onClick={gotToTop}>
        <FaArrowUp />
      </button>
    </div>
  );
}

export default GoToTop;
