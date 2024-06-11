import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const clean = onAuthStateChanged(auth, (user) => {
      if (user === null) {
        navigate("/login");
      } else {
        // setName("hahaha");
        setName(user.email);
      }
    });
    return () => clean();
  }, [navigate]);

  const handleSignOut = () => {
    firebaseSignOut(auth)
      .then(() => {
        console.log("Successful Signout");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <>
      <div className="Main-Container">
        <h1>{name}</h1>
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </>
  );
}

export default Home;
