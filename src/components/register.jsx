import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaRegEyeSlash, FaEye } from "react-icons/fa6";

// firebase auth 
// firebase auth
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../firebase";


function Register() {
  const [visiable, setVisiable] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  // firebase auth 
  // Email-password

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        phoneNumber,
        password
      );
      const user = userCredential.user;
      console.log("User registered:", user);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  // Google sign-up
  const handleRegisterWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // Handle the result as needed
    } catch (error) {
      console.error("Error during Google registration:", error);
    }
  };


  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex flex-col gap-y-3 justify-center items-center">
        <div className="bg-white w-[75%] rounded-lg px-5 py-10 drop-shadow-2xl">
          <h2 className="text-2xl text-center font-bold text-blue-500">
            नमस्ते / Hello
          </h2>
          <h3 className="text-center text-blue-400">
            Please Create an Account
          </h3>
          <form onSubmit={handleRegister}>
            <div className="flex flex-col my-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md outline-0 font-themeFontRegular bg-slate-100 py-3 px-5 shodow-md border-b-2"
                placeholder="Enter Your Email..."
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-x-1">
              <div className="flex flex-col my-3">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md outline-0 font-themeFontRegular bg-slate-100 py-3 px-5 shodow-md border-b-2"
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="flex flex-col my-3">
                <label htmlFor="contact">Mobile</label>
                <input
                  id="contact"
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  maxLength={10}
                  minLength={10}
                  className="w-full rounded-md outline-0 font-themeFontRegular bg-slate-100 py-3 px-5 shodow-md border-b-2"
                  placeholder="Enter Your Mobile No.."
                />
              </div>
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="password">Create Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={visiable ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md outline-0 font-themeFontRegular bg-slate-100 py-3 px-5 shodow-md border-b-2"
                  placeholder="Enter Your Password"
                  required
                />
                <div
                  className="absolute right-4 top-4 hover:cursor-pointer"
                  onClick={() => setVisiable(!visiable)}
                >
                  {visiable ? (
                    <FaEye className="text-gray-500" />
                  ) : (
                    <FaRegEyeSlash className="text-gray-500" />
                  )}
                </div>
              </div>
            </div>

            {/* <div className="flex  justify-end mb-2">
              <Link
                to="/forget-password"
                className="text-sm text-gray-600 hover:text-blue-500 font-mono"
              >
                Forget-Password
              </Link>
            </div> */}
            <button
              type="submit"
              className="bg-green-500  hover:bg-green-400 rounded-lg text-white font-semobold w-full py-3 px-5 my-2 shodow-md border-b-2"
            >
              SignUp
            </button>
          </form>
          <button
            onClick={handleRegisterWithGoogle}
            className="bg-blue-500 hover:bg-blue-400 rounded-lg text-white font-semobold w-full py-3 px-5 shodow-md border-b-2 my-3 flex justify-center items-center gap-2"
          >
            <span className="">Signup with Google</span>
            <span>
              <FaGoogle />
            </span>
          </button>

          <div className="text-center text-gray-600">
            <span className="text-black">Already have an Account ? </span>
            <Link
              to={"/login"}
              className="text-center text-gray-600 font-mono hover:text-blue-500"
            >
              Login An Account
            </Link>
          </div>
        </div>
      </div>
      {/* image section  */}
      <div className="h-screen w-full object-cover relative">
        <img
          className="h-full w-full"
          src="/img/auth_img.jpeg"
          alt="Agromart-Img"
        />
        <div className="absolute top-0 flex justify-center items-center h-full w-full">
          <div className="bg-white px-10 py-5 rounded-lg">
            <Link to={"/"}>
              <h1 className="text-4xl font-bold font-serif">AGROMART</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
