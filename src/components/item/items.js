import React from "react";

const Items = (props) => {
  const { items, del, incr,decr } = props;
  let length = items.length;
  const ListItem = length ? (
    items.map((item) => {
        
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>{item.price}</p>
          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
          <section className="count">
            <button
              className="dec"
              onClick={() => {
                decr(item.id);
              }}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="inc"
              onClick={() => {
                incr(item.id);
              }}
            >
              +
            </button>
          </section>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Edit</p>
        <p>Quantity</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
