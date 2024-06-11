import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { RiExternalLinkLine } from "react-icons/ri";
import { LuEyeOff, LuEye } from "react-icons/lu";
import {
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { ToastContainer, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const RegisterWithGoogle = async (e) => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      // You can access the user information from `result.user`
      // For example:
      // const user = result.user;
      toast.success("Google Sign-in successful!", {
        transition: Slide,
      });
      navigate("/"); // Navigate to home or desired page after successful sign-in
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      toast.error(`Error: ${error.message}`, {
        transition: Slide,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Registration successful! Please login.", {
        transition: Slide,
      });
      setEmail("");
      setPassword("");

      try {
        await signOut(auth);
      } catch (signOutError) {
        console.log("Error during sign out: ", signOutError);
      }

      navigate("/login");
    } catch (error) {
      const errorCode = error.code;
      let errorMessage = error.message;

      if (errorCode === "auth/weak-password") {
        errorMessage = "Password must include at least 6 characters";
      }

      toast.error(`Error: ${errorMessage}`, {
        transition: Slide,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Register-Container">
      {loading && <Loader />}
      <div className="register-wrapper">
        <button className="Google-button" onClick={RegisterWithGoogle}>
          <FcGoogle className="Google-icon" />
          Register with google
        </button>
        <p className="seprate-text">or Register with Email</p>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="E.g. Demo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              id="Password-Input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="toggle-password-btn"
            >
              {showPassword ? <LuEye /> : <LuEyeOff />}
            </button>
          </div>
          <button type="submit" className="Register-Button">
            Create Account
          </button>
        </form>
        <div className="register-other">
          <p>Already have an account?</p>
          <Link
            to={"/login"}
            style={{ color: "blue", cursor: "pointer", textDecoration: "none" }}
          >
            Login <RiExternalLinkLine />
          </Link>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </div>
  );
}

export default Register;
