import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleBoughtStock, radio, dropdown}) {

  const renderStock = () => {
    let stockToDisplay = stocks
     if (radio === "alphabetically") {
       stockToDisplay = stocks.sort((a, b) => a.name > b.name ? 1 : -1)
     } else if (radio === "price"){
       stockToDisplay = stocks.sort((a, b) => a.price - b.price)
      } 
      return stockToDisplay.map((stock) => { return <Stock key={stock.id} handleBoughtStock={handleBoughtStock} stock={stock}/>})
    }


    const filteredStock  = () => {
    let stockToDisplay = stocks.filter((stock) => stock.type === dropdown)
    return stockToDisplay.map((stock) => { return <Stock key={stock.id} handleBoughtStock={handleBoughtStock} stock={stock}/>})
    }

 return (
    <div>
      <h2>Stocks</h2>
     {dropdown !== "" ? filteredStock() : renderStock()}
    </div>
  );
}

export default StockContainer;
