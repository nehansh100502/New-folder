import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';
import Bird from '../../assets/bird.png';
import Aa from '../../assets/flower.jpg';
import Aa2 from '../../assets/BIRD6.png';
import Aa3 from '../../assets/flower1.jpg';
// import Aa4 from '../../assets/river.jpg';
import Aa5 from '../../assets/tree.jpg';
import Aa6 from '../../assets/gardden.jpg';
import Aa7 from '../../assets/sea.jpg';
import Aa8 from '../../assets/flower2.jpg';




const images = [Aa8, Aa7, Aa6, Aa, Aa3, Bird, Aa2, Aa5];

function Home() {

   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
         );
      }, 3000);

      return () => clearInterval(intervalId);
   }, []);
   return (
      <>
         <div className="bg-green-100">
            <div
               class="image"

               style={{
                  height: "380px",
                  width: "500px",
                  margin:"20px",
                  // margin: "0px",
                  backgroundImage: `url(${images[currentIndex]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
               }}

            >
               <div className="p-7">
                  <div className="w-96 h-80 ml-[560px] text-white font-bold font-serif text-center p-20 border-blue-500 box-border border-2 pt-6 shadow-2xl shadow-indigo-500 hover:shadow-cyan-500">

                     <span className="text-orange-500 text-3xl ">EcoWorld</span>
                     <span><hr/></span>
                     <span className="text-green-700 text-2xl">  Explore the Beauty of Nature and Sustainability..</span>
                     <button className='bg-green-900 text-white p-3 my-24 hover:bg-green-700 rounded-lg w-48 border-gray-950 border-2 outline outline-offset-1'><Link to="/gallery">Explore Here</Link></button>
                  </div>
               </div>
            </div>
         </div>
         {/* <hr className="h-1 w-auto bg-black"/> */}
         <div>
            {/* <hr className="h-1 w-auto bg-black"/> */}
            <div className='bg-white h-[850px]'>
               <div>
                  <h1 className="text-3xl text-green-900 font-bold font-sans  text-center pt-20">About Eco-World </h1>
               <p className="text-cyan-800 font-mono text-lg p-9 text-center">At <span className="text-orange-700 font-bold">EcoWorld</span>, we are dedicated to promoting sustainable living and environmental
                   stewardship. Our mission is to educate, inspire, and empower individuals to make eco-friendly choices that benefit the planet.
                    Whether you're a seasoned environmentalist or just beginning your journey towards a greener lifestyle,
                   EcoWorld has the resources, tips, and community support you need.
               </p>
               {/* <div className=" box-content border-x-2 bg-green-50"> 
               <p className="text-2xl font-bold text-orange-500 p-9 text-center ">Join us in our journey to promote eco-friendly living and
               preserve the natural wonders of our planet.</p>
               </div> */}
               </div>
               {/* <hr className="h-[2px] w-auto bg-slate-600"/> */}

              
               <div>
                  <p className="text-green-900 text-3xl font-sans text-center font-bold p-4">Our Mission</p>
                  <p className="text-cyan-800 font-mono text-lg p-9 text-center">
                  <span className="text-orange-700 font-bold">EcoWorld</span> aims to create a global community focused on sustainability and environmental 
                  consciousness. We believe that small changes can lead to big impacts, and we are here to
                   guide you every step of the way.
                  </p>
            </div>

            <div>
                  <p className="text-green-900 text-3xl font-sans text-center font-bold p-4">Eco-Friendly Tips</p>
                  <p className="text-cyan-800 font-mono text-lg p-9 text-center">
                Living sustainably doesn’t have to be difficult. Here are some simple tips to help you get started:
                  </p>
                  {/* <p className="p-9 font-light text-cyan-700 ml-5">
                     <li><span  className=" text-lg font-mono  text-orange-600"> Reduce, Reuse, Recycle:</span> Minimize waste by practicing the 3 Rs. Choose reusable items,recycle properly,and reduce your overall consumption.</li>
                    <li><span className="text-lg font-mono  text-orange-600"> Conserve Water:</span> Fix leaks, take shorter showers, and use water-efficient appliances to save this precious resource.</li> 
                     <li><span className="text-lg font-mono  text-orange-600"> Go Green at Home:</span> Use energy-efficient light bulbs, insulate your home, and opt for eco-friendly cleaning products.</li>
                     <li><span className="text-lg font-mono  text-orange-600"> Support Sustainable Brands:</span> Choose products from companies that prioritize sustainability and ethical practices. </li>
                  </p> */}
            </div>
            </div>
         </div>

      </>

   )
}

export default Home