import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { useEffect } from "react";
import { useState } from "react"

function App() {
  const [stocks, setStocks] = useState([])
  const [portfolioStock, setPortfolioStock] = useState([])
  const [radio, setRadio] = useState("alphabetically")
  const [dropdown, setDropdown] = useState("")


  function handleBoughtStock(e) {
    const name = e.target.firstChild.textContent
    const stock = stocks.filter((stock) => stock.name === name)
    setPortfolioStock([...portfolioStock, stock[0]])
    }

  function handleDelete(e) {
    const name = e.target.textContent
    setPortfolioStock(portfolioStock.filter((item) => item.name !== name))
  }

  function handleDropDown(value) {
    setDropdown(value)
    console.log(value)

  }

  
  function handleRadio(value) {
    setRadio(value)
    console.log(radio)
}
  
    
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((response) => response.json())
    .then((json) => { 
      console.log(json)
      setStocks(json)
    })
  }, [])

  return (
    <div>
      <Header />
      <MainContainer handleDropDown={handleDropDown} dropdown={dropdown} radio={radio} handleRadio={handleRadio} onClickDelete={handleDelete} portfolioStock={portfolioStock} handleBoughtStock={handleBoughtStock} stocks={stocks}/>
    </div>
  );
}

export default App;
