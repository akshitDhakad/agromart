import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle, FaRegEyeSlash, FaEye } from "react-icons/fa6";

// firebase auth

import { signInWithPopup, GoogleAuthProvider, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../firebase'; // Import auth and provider from your firebase.js file

 

function Login() {
  const [visiable, setVisiable] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // firebase Login auth
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User Loggin :", user);
    } catch (error) {
      console.error("Error during Login:", error);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log(user,token)
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      // The email of the user's account used.
      const email = error.customData?.email;

      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      // Handle the error...
      console.error("Error during Google Login:", errorCode, errorMessage);
    }
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex flex-col gap-y-3 justify-center items-center">
        <div className="bg-white w-[75%] rounded-lg px-5 py-10 drop-shadow-2xl">
          <h2 className="text-2xl text-center font-themeFont font-bold text-blue-500">
            नमस्ते / Hello
          </h2>
          <h3 className="text-center text-blue-400 font-themeFontMontserrat">
            Please Login
          </h3>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col my-3">
              <label htmlFor="">Email/Mobile</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md outline-0 font-themeFontRegular bg-slate-100 py-3 px-5 shodow-md border-b-2"
                placeholder="Enter Your Email/Mobile"
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="">Password</label>
              <div className="relative">
                <input
                  type={visiable ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md outline-0 font-themeFontRegular bg-slate-100 py-3 px-5 shodow-md border-b-2"
                  placeholder="Enter Your Password"
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

            <div className="flex  justify-end mb-2">
              <Link
                to="/forget-password"
                className="text-sm text-gray-600 hover:text-blue-500 font-mono"
              >
                Forget-Password
              </Link>
            </div>
            <button className=" w-full rounded-md outline-0 font-themeFontRegula py-3 px-5 shodow-md border-b-2 bg-green-500 text-white hover:bg-green-400">
              Login
            </button>
          </form>
          <button
            onClick={handleLoginWithGoogle}
            className="bg-blue-500 hover:bg-blue-400 text-white w-full rounded-md outline-0 font-themeFontRegula py-3 px-5 shodow-md border-b-2 flex justify-center items-center gap-2 mt-3"
          >
            <span>Login with Google</span>
            <span>
              <FaGoogle />
            </span>
          </button>

          <div className="text-center text-gray-600">
            <span className="text-black font-themeFont ">don't have an account ? </span>
            <Link
              to={"/register"}
              className="text-center text-gray-600 font-mono hover:text-blue-500 font-themeFontRegular"
            >
              Create An Account
            </Link>
          </div>
        </div>
      </div>
      {/* image section  */}
      <div className="h-screen w-full object-cover relative">
        <img className="h-full w-full" src="/img/auth_img.jpeg" alt="" />
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

export default Login