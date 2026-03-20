import demo1 from "../assets/Rectangle 9.png";
import demo2 from "../assets/Rectangle 10.png";
import demo3 from "../assets/Rectangle 11.png";
import demo4 from "../assets/Rectangle 12.png";
import demo5 from "../assets/Rectangle 13.png";
import demo6 from "../assets/Rectangle 14.png";
import demo7 from "../assets/Rectangle 15.png";
import demo8 from "../assets/Rectangle 16.png";
function Democoffee() {
  const images = [demo1, demo2, demo3, demo4, demo5, demo6, demo7, demo8];

  return (
    <div className="bg-[#F4F0E6] py-16 px-10">
      
      {/* Title */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500 tracking-widest">Follow Us Now</p>
        <h2 className="text-4xl font-bold text-[#331A00]" style={{ fontFamily: "cursive" }}>
          Follow on Instagram
        </h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 gap-3 max-w-4xl mx-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`coffee-${index}`}
            className="w-full h-48 object-cover rounded-md hover:opacity-80 transition cursor-pointer"
          />
        ))}
      </div>

    </div>
  );
}

export default Democoffee;