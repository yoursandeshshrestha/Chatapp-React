import React from "react";
import "./Register.css";
import { Link, NavLink } from "react-router-dom";
import { RiExternalLinkLine } from "react-icons/ri";

function Register() {
  return (
    <div className="Register-Container">
      <div className="register-wrapper">
        <form>
          <label>Email</label>
          <input type="email" required placeholder="E.g. Demo@gmail.com" />
          <label>Password</label>
          <input type="password" required placeholder="Enter your password" />
          <button type="submit">Create Account</button>
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
    </div>
  );
}

export default Register;
