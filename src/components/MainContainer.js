import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myPortfolio, setMyPortfolio] = useState([])
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("Tech")
  console.log(filterBy)
  
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((res) => res.json())
    .then((data) => {
      setStocks(data)
    })
    }, [])

    function handleBuyStockClick(e) {
      const clickedStockId = e.target.id
      const filteredStock = stocks.filter(stock => stock.id === parseInt(clickedStockId))
      const newStocksArray = [...myPortfolio, ...filteredStock]
      setMyPortfolio(newStocksArray)
    }

    function handleSellStock(e) {
      const filteredStocks = myPortfolio.filter(stock => stock.id !== parseInt(e.target.id))
      setMyPortfolio(filteredStocks)
    }

    const sortedStocks = stocks.sort((a, b) => {
      if (sortBy === "Alphabetically") {
        if (a.ticker < b.ticker) {
          return -1;
        }
        if (a.ticker > b.ticker) {
         return 1;
       }
        return 0;
      } else {
        if (a.price > b.price) {
          return -1
        }
        if (a.price > b.price) {
          return 1
        }
        return 0
      }
    })

    const filteredStocks = sortedStocks.filter((stock) => stock.type === filterBy)
    console.log(filteredStocks)

    





  return (
    <div>
      <SearchBar setFilterBy={setFilterBy} sortBy={sortBy} setSortBy={setSortBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} handleBuyStockClick={handleBuyStockClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer myPortfolio={myPortfolio} handleSellStock={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
