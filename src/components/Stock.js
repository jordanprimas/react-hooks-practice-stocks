import React from "react";

function Stock({stock, handleBuyStockClick}) {

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 id={stock.id} className="card-title" onClick={handleBuyStockClick} data-name={stock.name}>{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
