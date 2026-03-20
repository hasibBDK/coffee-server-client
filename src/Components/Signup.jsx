import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import headerbg from "../assets/15.jpg";
import logo from "../assets/logo1.png";
import { FaArrowLeft } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { AuthContext } from '../provider/Authprovider';

function Signup() {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    createUser(email, password)
      .then(result => {
        console.log(result.user);

        
        const newUser = { name, email };
        fetch('https://coffe-store-server-one-flame.vercel.app/users', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId) {
            toast.success('Account created successfully!');
            navigate('/');
          }
        });

      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignup = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;

        // ✅ Database এ user পাঠাও
        const newUser = { name: user.displayName, email: user.email };
        fetch('https://coffe-store-server-one-flame.vercel.app/users', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId) {
            toast.success('Signed up with Google!');
            navigate('/');
          }
        });

      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {/* Header */}
      <div className='flex justify-between items-center py-3 px-10' style={{ backgroundImage: `url(${headerbg})` }}>
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl italic text-[#FFFFFF] font-bold">Espresso Emporium</h1>
        </div>
        <div>
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </div>
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
            Create Account
          </h2>
          <p className="text-center text-sm text-gray-500 mb-8 leading-relaxed">
            Join us today and start your coffee journey with Espresso Emporium.
          </p>

          <form onSubmit={handleSignup}>

            <div className="mb-5">
              <label className="block mb-1 font-semibold text-sm text-gray-700">Full Name</label>
              <input name="name" type="text" placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none bg-white" required />
            </div>

            <div className="mb-5">
              <label className="block mb-1 font-semibold text-sm text-gray-700">Email</label>
              <input name="email" type="email" placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none bg-white" required />
            </div>

            <div className="grid grid-cols-2 gap-5 mb-8">
              <div>
                <label className="block mb-1 font-semibold text-sm text-gray-700">Password</label>
                <input name="password" type="password" placeholder="Enter password"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none bg-white" required />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-sm text-gray-700">Confirm Password</label>
                <input name="confirmPassword" type="password" placeholder="Confirm password"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none bg-white" required />
              </div>
            </div>

            <button type="submit"
              className="w-full py-3 bg-[#C8A96E] text-[#331A00] border-2 border-[#A0784A] rounded-lg font-bold text-base tracking-widest hover:bg-[#b8935a] transition mb-4">
              Sign Up
            </button>

            <div className="flex items-center gap-3 mb-4">
              <hr className="flex-1 border-gray-300" />
              <span className="text-sm text-gray-400">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <button type="button" onClick={handleGoogleSignup}
              className="w-full py-3 bg-white border-2 border-gray-300 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition mb-5">
              <FcGoogle className="text-xl" /> Continue with Google
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/signin" className="text-[#331A00] font-bold hover:underline">Sign In</Link>
            </p>

          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;