import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({handleDropDown, dropdown, stocks, radio, portfolioStock, handleBoughtStock, onClickDelete, handleRadio}) {
  return (
    <div>
      <SearchBar dropdown={dropdown} handleDropDown={handleDropDown} radio={radio} handleRadio={handleRadio}/>
        <div className="row">
        <div className="col-8">
          <StockContainer dropdown={dropdown} radio={radio} handleBoughtStock={handleBoughtStock} stocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer onClickDelete={onClickDelete} portfolioStock={portfolioStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
