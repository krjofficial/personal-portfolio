import React from "react";
import { Link } from "react-router";

function Card(props) {
  return (
    <Link
      to={props.link || "/"}
      className="no-underline w-full text-white" // Added w-full for full width if needed
    >
      <div className="card-bordered m-5 border-yellow-500 bg-[#242424] text-white/87 w-full shadow-lg shadow-yellow-600 
                      hover:bg-[#333] hover:text-white hover:border-orange-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-700 transition-all duration-300
                      flex flex-col justify-center items-center text-center p-4 rounded-xl" // Added Tailwind classes
      >
        <div className="card-body">
          <h2 className="card-title font-bold">{props.title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Card;