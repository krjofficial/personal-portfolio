import React from "react";

function HeroSection(props) {
  return (
    
    <div
    className={`card-bordered m-5 border-gray-500 bg-[#232323] text-white/80  shadow-lg 
                 
              flex flex-col justify-center items-center text-center p-6 rounded-xl  ${props.className}`}
  >
      <div className="card-body ">
        <h2 className="card-title font-bold">{props.title}</h2>
      </div>

  </div>

  );
}

export default HeroSection;
