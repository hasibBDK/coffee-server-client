import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import headerbg from "../assets/15.jpg";
import logo from "../assets/logo1.png";
import { FaArrowLeft } from 'react-icons/fa';

const UpdateCoffee = () => {
  const coffee = useLoaderData(); // ✅ existing data load হবে

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, chef, supplier, taste, category, details, photo };

    fetch(`http://localhost:5000/coffee/${coffee._id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedCoffee)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0) {
        toast.success('Coffee updated successfully!');
      }
    });
  };

  return (
    <>
      {/* Header */}
      <div className='flex justify-center items-center py-2' style={{ backgroundImage: `url(${headerbg})` }}>
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <h1 className="text-3xl italic text-[#FFFFFF]">Espresso Emporium</h1>
      </div>

      {/* Back */}
      <div className="bg-[#F4F0E6]">
        <Link to="/">
          <h1 className='max-w-3xl font-bold mx-auto py-5 flex items-center gap-2'>
            <FaArrowLeft /> Back to home
          </h1>
        </Link>
      </div>

      {/* Form */}
      <div className="min-h-screen bg-[#F4F0E6] px-5">
        <div className="max-w-3xl mx-auto bg-[#EDEAD8] rounded-xl p-10">

          <h2 className="text-center text-4xl font-bold text-[#331A00] mb-3" style={{ fontFamily: "cursive" }}>
            Update Coffee
          </h2>
          <p className="text-center text-sm text-gray-500 mb-8 leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as opposed to using
            Content here.
          </p>

          <form onSubmit={handleUpdateCoffee}>

            <div className="grid grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block mb-1 font-semibold text-sm text-gray-700">Name</label>
                <input name="name" type="text" defaultValue={coffee.name} placeholder="Enter coffee name" className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none" required />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-sm text-gray-700">Chef</label>
                <input name="chef" type="text" defaultValue={coffee.chef} placeholder="Enter coffee chef" className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block mb-1 font-semibold text-sm text-gray-700">Supplier</label>
                <input name="supplier" type="text" defaultValue={coffee.supplier} placeholder="Enter coffee supplier" className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-sm text-gray-700">Taste</label>
                <input name="taste" type="text" defaultValue={coffee.taste} placeholder="Enter coffee taste" className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block mb-1 font-semibold text-sm text-gray-700">Category</label>
                <input name="category" type="text" defaultValue={coffee.category} placeholder="Enter coffee category" className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-sm text-gray-700">Details</label>
                <input name="details" type="text" defaultValue={coffee.details} placeholder="Enter coffee details" className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none" />
              </div>
            </div>

            <div className="mb-8">
              <label className="block mb-1 font-semibold text-sm text-gray-700">Photo</label>
              <input name="photo" type="text" defaultValue={coffee.photo} placeholder="Enter photo URL" className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none" />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#C8A96E] text-[#331A00] border-2 border-[#A0784A] rounded-lg font-bold text-base tracking-widest hover:bg-[#b8935a] transition"
            >
              Update Coffee
            </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateCoffee;