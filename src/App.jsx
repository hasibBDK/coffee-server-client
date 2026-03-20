import { useState, useEffect } from 'react'
import { FaEye, FaPen, FaTrashAlt, FaCoffee } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import headerbg from "./assets/15.jpg"
import logo from "./assets/logo1.png"
import secondlogo from "./assets/3.png"
import cuplogo from "./assets/111.png"
import badge from "./assets/222.png"
import grades from "./assets/333.png"
import bottle from "./assets/444.png"
import Democoffee from './Components/Democoffee';
import Footer from './Components/Footer';
import './App.css'

function App() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch('https://coffe-store-server-one-flame.vercel.app/coffee')
      .then(res => res.json())
      .then(data => setCoffees(data));
  }, []);

  const features = [
    { img: cuplogo, title: "Awesome Aroma", desc: "You will definitely be a fan of the design & aroma of your coffee" },
    { img: badge, title: "High Quality", desc: "We served the coffee to you maintaining the best quality" },
    { img: grades, title: "Pure Grades", desc: "The coffee is made of the green coffee beans which you will love" },
    { img: bottle, title: "Proper Roasting", desc: "Your coffee is brewed by first roasting the green coffee beans" },
  ];

  return (
    <>
      {/* Header */}
      <div className='flex justify-between items-center py-3 px-10' style={{ backgroundImage: `url(${headerbg})` }}>
  
  {/* Left - Logo & Name */}
  <div className="flex items-center gap-2">
    
    <h1 className="text-xl italic text-[#FFFFFF] font-bold">Espresso Emporium</h1>
  </div>

  {/* Middle - Nav Links */}
  <div className="flex items-center gap-6">
    <Link to="/" className="text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#b8935a] transition">Home</Link>
    <Link to="/AddCoffee" className="text-white text-sm px-4 py-2 font-semibold rounded hover:bg-[#b8935a] transition">Add Coffee</Link>
    
    <Link to="/signup" className=" text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#b8935a] transition">Sign Up</Link>
  </div>

  {/* Right - Logo */}
  <div>
    <img src={logo} alt="Logo" className="w-10 h-10" />
  </div>

</div>

      {/* Hero Section */}
      <div style={{ backgroundImage: `url(${secondlogo})` }} className="w-full h-[650px] bg-cover bg-center">
        <div className='flex flex-col gap-3 py-48 pl-[700px]'>
          <h1 className='text-3xl italic text-[#FFFFFF]'>Would you like a Cup of Delicious Coffee</h1>
          <p className='text-sm text-[#FFFFFF] mr-48'>Its coffee time - slip & savor - Relaxation in every slip! Get the nostalgia back!! Your companion of every moment!! Enjoy the beautiful moments and made them memorable.</p>
          <button className='bg-[#8B4513] hover:bg-[#A0522D] text-[#FFFFFF] font-bold py-2 px-4 rounded self-start'>Learn More</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#ECEAE3] py-16 px-10">
        <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <img src={item.img} alt={item.title} className="w-14 h-14" />
              <h3 className="text-xl italic font-bold text-[#331A00]">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Coffee Section */}
      <div className="bg-[#F4F0E6] py-16 px-10">

        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 tracking-widest">--- Sip & Savor ---</p>
          <h2 className="text-4xl italic font-bold text-[#331A00] mb-4">Our Popular Products</h2>
          <Link to="/AddCoffee">
            <button className="border border-[#C8A96E] bg-[#C8A96E] text-white px-5 py-2 rounded text-bold hover:bg-white transition ">
              Add Coffee <FaCoffee className='inline ml-1 text-[#331A00]' />
            </button>
          </Link>
        </div>

        {/* Coffee Cards */}
        <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
          {coffees.map(coffee => (
            <div key={coffee._id} className="bg-[#F8F4EC] rounded-xl p-5 flex items-center gap-5 shadow-sm border border-[#E5DDD0]">
              
              {/* Image */}
              <img src={coffee.photo} alt={coffee.name} className="w-28 h-28 object-contain" />

              {/* Info */}
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1"><span className="font-bold text-[#331A00]">Name: </span>{coffee.name}</p>
                <p className="text-sm text-gray-600 mb-1"><span className="font-bold text-[#331A00]">Chef: </span>{coffee.chef}</p>
                <p className="text-sm text-gray-600"><span className="font-bold text-[#331A00]">Price: </span>{coffee.price} 500 Taka</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <button className="bg-[#D4A96A] p-2 rounded text-white hover:bg-[#b8935a] transition">
                  <FaEye />
                </button>
                <Link to={`/updateCoffee/${coffee._id}`}>
                  <button className="bg-[#3D3D3D] p-2 rounded text-white hover:bg-[#555] transition">
                    <FaPen />
                  </button>
                </Link>
                <button className="bg-[#D9534F] p-2 rounded text-white hover:bg-[#c9302c] transition">
                  <FaTrashAlt />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>


      <Democoffee></Democoffee>
      <Footer></Footer>

    </>
  )
}

export default App;

