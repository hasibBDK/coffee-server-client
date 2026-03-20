import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import headerbg from "../assets/15.jpg";
import logo from "../assets/logo1.png";
import { FaArrowLeft } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { AuthContext } from '../provider/Authprovider';

function Signin() {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        console.log(result.user);
        toast.success('Logged in successfully!');
        navigate('/');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignin = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        toast.success('Signed in with Google!');
        navigate('/');
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
            Welcome Back
          </h2>
          <p className="text-center text-sm text-gray-500 mb-8 leading-relaxed">
            Sign in to your account and continue your coffee journey!
          </p>

          <form onSubmit={handleSignin}>

            <div className="mb-5">
              <label className="block mb-1 font-semibold text-sm text-gray-700">Email</label>
              <input name="email" type="email" placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none bg-white" required />
            </div>

            <div className="mb-8">
              <label className="block mb-1 font-semibold text-sm text-gray-700">Password</label>
              <input name="password" type="password" placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none bg-white" required />
            </div>

            <button type="submit"
              className="w-full py-3 bg-[#C8A96E] text-[#331A00] border-2 border-[#A0784A] rounded-lg font-bold text-base tracking-widest hover:bg-[#b8935a] transition mb-4">
              Sign In
            </button>

            <div className="flex items-center gap-3 mb-4">
              <hr className="flex-1 border-gray-300" />
              <span className="text-sm text-gray-400">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <button type="button" onClick={handleGoogleSignin}
              className="w-full py-3 bg-white border-2 border-gray-300 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition mb-5">
              <FcGoogle className="text-xl" /> Continue with Google
            </button>

            <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#331A00] font-bold hover:underline">Sign Up</Link>
            </p>

          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;