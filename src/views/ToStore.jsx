import React from "react";
import "../toStore.css";

const ToStore = () => {
  return (
    <div className="storeContainer">
      <div className="text">
        <p>Neque porro quisquam</p>
        <p>est qui dolorem!</p>
      </div>

      <div className="storeWrap">
        <img src="/public/market.svg" alt="market" />
      </div>
    </div>
  );
};

export default ToStore;
