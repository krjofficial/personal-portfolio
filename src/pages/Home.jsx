import React from "react";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
const Home = () => {
  return (
//  <div>
//     <div className="flex">
    
//       <Card
//         title="Who am I"
//         link="/about"
//         className="shadow-orange-600 w-[320px] h-[300px] hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300 hover:text-black hover:shadow-orange-700 my-[50px]"
//       />
    
//     <HeroSection
//         title="Krish Jain"
//         className="shadow-blue-600 w-full h-[460px]"
//       />

//       <Card
//         title="Projects"
//         link="/projects"
//         className="shadow-pink-600 w-[320px] h-[300px]  hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-300 hover:text-black hover:shadow-pink-700 mt-[50px]"
//       />
//     </div>

//     <div className="flex ">
//        <Card
//              title="Achievements"
//              link="/achievements"
//              className="shadow-yellow-600 w-[300px] h-[200px]  hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-300 hover:text-black hover:shadow-yellow-700"
//           />
//      <Card
//          title="The Timeline"
//              link="/timeline"
//              className="shadow-green-600 w-[980px] h-[200px]  hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 hover:text-black hover:shadow-green-700"
//            />

// <Card
//              title="Experience"
//              link="/experience"
//            className="shadow-violet-600 w-[300px] h-[200px] hover:text-black hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-300  hover:shadow-violet-700"
//         />
       
//     </div>
//     </div> 

<div>
<div className="flex">
    <div>
    <Card
      title="Who am I"
      link="/about"
      className=" w-[220px] h-[300px] hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300 hover:text-black hover:shadow-orange-700 my-[50px]"
    />
    <div className="w-4 h-4 bg-white m-3">
    contacts info
    </div>
  </div>
  <HeroSection
      title="Krish Jain"
      className=" w-full h-[570px]"
    />

<div>
    <Card
      title="Projects"
      link="/projects"
      className=" w-[220px] h-[300px]  hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-300 hover:text-black hover:shadow-pink-700 mt-[50px]"
    />
    <div className="w-4 h-4 bg-white m-3">
    contacts info
    </div>
  </div>
  </div>

  <div className="flex ">
     <Card
           title="Achievements"
           link="/achievements"
           className=" w-[300px] h-[200px]  hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-300 hover:text-black hover:shadow-yellow-700"
        />
   <Card
       title="The Timeline"
           link="/timeline"
           className=" w-[980px] h-[200px]  hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 hover:text-black hover:shadow-green-700"
         />

<Card
           title="Experience"
           link="/experience"
         className=" w-[300px] h-[200px] hover:text-black hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-300  hover:shadow-violet-700"
      />
     
  </div>
  </div>

  );
};

export default Home;
