import { useState } from 'react'

import headerbg from "./assets/15.jpg"
import logo from "./assets/logo1.png"
import secondlogo from "./assets/3.png"
import cuplogo from "./assets/111.png"
import badge from "./assets/222.png"
import grades from "./assets/333.png"
import bottle from "./assets/444.png"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center py-2' style={{backgroundImage: `url(${headerbg})`}}>
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <h1 className="text-3xl italic  text-[#FFFFFF] ">Espresso Emporium</h1>
    </div>
    <div style={{ backgroundImage: `url(${secondlogo})` }} className="w-full h-[650px] bg-cover bg-center">
        
       <div className ='flex flex-col  gap-3  py-48 pl-[700px]  '>
        <h1 className='text-5xl italic text-[#FFFFFF]  '>Would you like a Cup of Delicious Coffee</h1>
        <p className='text-sm text-[#FFFFFF]  mr-24'>Its coffee time -slip & savor - Relaxation in every slip! Get the nostalogia back!! Your companion of every moment!!Enjoy the beautiful moments and made them memorable.</p>
        <button className='bg-[#8B4513] hover:bg-[#A0522D] text-[#FFFFFF] font-bold py-2 px-4 rounded self-start'>Learn More</button>
       </div>

    </div>

    <div className='bg-[#ECEAE3]'>
       <div className='flex flex-col  gap-3'>
        <img src={cuplogo} alt="cuplogo" className="w-40 h-40 ml-40 mt-20" />
        <h1 className='text-4xl italic text-[#331A00]  ml-40 mt-5'>Awesome Aroma</h1>
        <p>You will definetly be a top fan of the design & aroma of your coffee</p>
       </div>

    </div>

    
    </>
  )
}

export default App
