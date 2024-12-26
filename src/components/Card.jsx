import React from "react";

function Card(props) {
  return (
    <div className="card bg-base-100 w-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{props.title}</h2>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Click</button>
      </div>
    </div>
  </div>
  );
}

export default Card;
