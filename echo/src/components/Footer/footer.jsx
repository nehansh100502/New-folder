import React from 'react'
// import { Link } from 'react-router-dom'

function footer() {
  return (
    <>
     <footer className='bg-slate-800 text-white flex-row flex gap-48 p-5 cursor-pointer'>
            <div>
                
                <p className='text-xl font-bold pb-2'>Contact Us</p>
                {/* <p className='text-orange-500 pb-3'>We'd love to hear from you! Whether you have questions, suggestions, or want to get involved, feel free to reach out.</p> */}
                <p>Email: contact@ecoworld.com</p>
<p>Phone: +1 234 567 890</p>
<p>Address: 123 Green Lane, Sustainable City, Earth</p>
               
            </div>
            <div>
                <p className='text-xl font-bold pb-2'>Follow Us </p>
                <p className='text-green-500 pb-2'>Stay connected and updated with the latest from EcoWorld by following us on social media:</p>
                <p>Facebook: EcoWorld</p>
<p>Twitter: @EcoWorld</p>
<p>Instagram: @EcoWorld</p>
<p>LinkedIn: EcoWorld</p>
            </div>
            <div>
                <p className='text-xl font-bold pb-2'>Join Us</p>
                <p className='text-green-500 '>Join us on our journey towards a more sustainable and eco-friendly world. Together, we can make a difference!</p>
                
            </div>
         </footer>
    </>
  )
}

export default footer