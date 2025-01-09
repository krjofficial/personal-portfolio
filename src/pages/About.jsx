import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
export default function AboutMe() {
  return (
    <div className='flex items-center justify-center'>
      <div className='my-[200px]'>
  <div className="bg-primary text-2xl text-black grid h-[60px] p-[40px] place-content-center rounded hover:scale-x-105">Hi, I'm Krish, a web developer and third-year engineering student passionate about creating engaging web experiences. </div>
  <div className="ml-10 bg-accent text-2xl text-black grid h-[60px] p-[40px]  place-content-center rounded  hover:scale-x-105">With skills in HTML, CSS, JavaScript, and frameworks like React, I love turning ideas into functional and visually appealing designs. 
  </div>
  <div className="ml-24 bg-secondary text-2xl text-black grid h-[60px] p-[40px] place-content-center rounded  hover:scale-x-105">
  I’m always excited to collaborate on innovative projects. Let’s connect and create something amazing together!
  </div>
</div>
<button className="btn btn-square btn-outline w-[90px] h-[90px] text-2xl m-10">
  <Link to="/">
Back
  <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
    </Link>
</button>


    </div>
  )
}

