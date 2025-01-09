import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link
    to={props.link || "/"}
    className="   " // Added w-full for full width if needed
  >
    <div
      className={`card-bordered m-5 border-gray-500 bg-[#242424] text-white/87  shadow-lg 
                 hover:scale-105 hover:shadow-lg  transition-all duration-300
                flex flex-col justify-center items-center text-center p-6 rounded-xl  ${props.className}`}
    >
    
        <div className="card-body ">
          <h2 className="card-title font-bold mt-8">{props.title}</h2>
        </div>
 
    </div>
    </Link>
  );
}

export default Card;
