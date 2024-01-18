import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStock, onClickDelete}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
       portfolioStock.map((stock) => <Stock key={stock.id} onClickDelete={onClickDelete}  stock={stock} />)
      }
    </div>
  );
}

export default PortfolioContainer;
