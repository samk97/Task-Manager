import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("");

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleHomeClick = () => {
    navigate("/"); 
  };

  useEffect(() => {
    if (location.pathname === "/login") {
      setActiveButton("login");
    } else if (location.pathname === "/signup") {
      setActiveButton("signup");
    } else if (location.pathname === "/") {
      setActiveButton("home");
    } else {
      setActiveButton(""); 
    }
  }, [location.pathname]);

  return (
    <header className="flex sticky top-0 justify-between items-center px-5 bg-[#3173f5] h-[50px] z-50">
      <div
        className={`cursor-pointer rounded-md py-[0.1rem] px-3 ${activeButton === "home" ? "bg-white text-blue-500" : "text-white"}`}
        onClick={handleHomeClick}
      >
        Home
      </div>
      <div className="flex gap-5">
        <button
          className={`rounded-md py-[0.1rem] px-3 ${activeButton === "login" ? "bg-white text-blue-500" : "text-white"}`}
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          className={`rounded-md py-[0.1rem] px-3 ${activeButton === "signup" ? "bg-white text-blue-500" : "text-white"}`}
          onClick={handleSignupClick}
        >
          Signup
        </button>
      </div>
    </header>
  );
};

export default Header;
