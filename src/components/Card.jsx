import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div
      className={`card-bordered m-5 border-gray-500 bg-[#242424] text-white/87  shadow-lg 
                 hover:scale-105 hover:shadow-lg  transition-all duration-300
                flex flex-col justify-center items-center text-center p-6 rounded-xl  ${props.className}`}
    >
      <Link
        to={props.link || "/"}
        className="   " // Added w-full for full width if needed
      >
        <div className="card-body ">
          <h2 className="card-title font-bold">{props.title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Card;
