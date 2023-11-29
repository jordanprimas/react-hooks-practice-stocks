import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleBuyStockClick}) {
  const stocksList = stocks.map(stock => (
    <Stock key={stock.id} stock={stock} handleBuyStockClick={handleBuyStockClick} />
  ))
  return (
    <div>
      <h2>Stocks</h2>
      {stocksList}
    </div>
  );
}

export default StockContainer;
