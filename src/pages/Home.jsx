import React from "react";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
const Home = () => {
  return (
    // <div className="flex items-center justify-center my-10">
    //   <div className="grid grid-cols-3 ">
    //     {/*First Column*/}
    //     <div className="space-y-8 ">
    //       {" "}
    //       {/* Space between cards */}
    //       <Card
    //         title="Who am I"
    //         link="/about"
    //         className="shadow-red-600 w-[400px] h-[400px]"
    //       />
    //       <Card
    //         title="Projects"
    //         link="/projects"
    //         className="shadow-red-600 w-[400px] h-[300px]"
    //       />
    //     </div>

    //     {/* Second Column */}
    //     <div className="flex flex-col items-center space-y-8">
    //       <div className=" max-w-lg mt-6">
    //         <HeroSection className="w-[680px] h-[400px]" />
    //       </div>
    //       <Card
    //         title="The Timeline"
    //         link="/timeline"
    //         className="shadow-red-600 w-[480px] h-[300px]"
    //       />
    //     </div>

    //     {/* Third Column */}
    //     <div className="space-y-8">
    //       <Card
    //         title="Achievements"
    //         link="/achievements"
    //         className="shadow-red-600 w-full h-[400px]"
    //       />
    //       <Card
    //         title="Experience"
    //         link="/experience"
    //         className="shadow-red-600 w-full h-40"
    //       />
    //     </div>
    //   </div>
    // </div>
<div>
    <div className="flex">
    
      <Card
        title="Who am I"
        link="/about"
        className="shadow-orange-600 w-[320px] h-[400px] hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300 hover:text-black hover:shadow-orange-700 my-[100px]"
      />
    
    <HeroSection
        title="Krish Jain"
        className="shadow-blue-600 w-full h-[580px]"
      />

      <Card
        title="Projects"
        link="/projects"
        className="shadow-pink-600 w-[320px] h-[400px]  hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-300 hover:text-black hover:shadow-pink-700 my-[100px]"
      />
    </div>

    <div className="flex ">
       <Card
             title="Achievements"
             link="/achievements"
             className="shadow-yellow-600 w-[300px] h-[200px]  hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-300 hover:text-black hover:shadow-yellow-700"
          />
     <Card
         title="The Timeline"
             link="/timeline"
             className="shadow-green-600 w-[980px] h-[200px]  hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 hover:text-black hover:shadow-green-700"
           />

<Card
             title="Experience"
             link="/experience"
           className="shadow-violet-600 w-[300px] h-[200px] hover:text-black hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-300  hover:shadow-violet-700"
        />
       
    </div>
    </div>
  );
};

export default Home;
