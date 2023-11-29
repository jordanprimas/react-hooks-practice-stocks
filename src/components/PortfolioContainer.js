import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myPortfolio, handleSellStock}) {


  const portfolioStocks = myPortfolio.map((stock, index) => {

    return (
      <div key={index}>
        <div className="card">
          <div className="card-body">
            <h5 id={stock.id} className="card-title" onClick={handleSellStock}>{stock.name}</h5>
            <p className="card-text">{stock.price}</p>
          </div>
        </div>
      </div>
    )
  })
  
  
  
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks}
    </div>
  );
}

export default PortfolioContainer;
