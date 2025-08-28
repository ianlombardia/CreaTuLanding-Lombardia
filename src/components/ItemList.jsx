import React from "react";
import Item from "./item";

const ItemList = ({ data }) => {
  return (
    <div className="row g-4 justify-content-center">
      {data.map((prod) => (
        <div key={prod.id} className="col-md-4 col-sm-6">
          <Item prod={prod} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;