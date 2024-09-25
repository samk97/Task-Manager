import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="w-full flex flex-col justify-center p-4 md:items-center">
      <div className="flex flex-col mt-5 gap-3">
        <div className="w-full flex justify-start">
          <h2 className="text-3xl font-bold text-blue-500">Signup</h2>
        </div>
        <div className="w-full md:w-[500px]  border-2 border-blue-500 rounded-lg flex flex-col gap-3  px-3 py-5">
          <div className="w-full border-[1px] border-gray-400  px-2 py-[0.1rem]">
            <input
              className="outline-none w-full p-1"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="w-full border-[1px] border-gray-400  px-2 py-[0.1rem]">
            <input
              className="outline-none w-full p-1"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="w-full border-[1px] border-gray-400  px-2 py-[0.1rem]">
            <input
              className="outline-none w-full p-1"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="w-full border-[1px] border-gray-400  px-2 py-[0.1rem]">
            <input
              className="outline-none w-full p-1"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="w-full border-[1px] border-gray-400 px-2 py-[0.1rem]">
            <input
              className="outline-none w-full p-1"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <button
            type="button"
            className=" w-full text-white bg-[#3173f5] hover:bg-blue-800 font-medium  text-sm px-5  py-2.5 "
          >
            Signup
          </button>

          <div className="w-full flex justify-center px-2 py-1">
            <p>
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={handleLoginClick}
              >
                Login
              </span>
            </p>
          </div>
          <div className="w-full flex justify-center px-2 py-[0.1rem]">
            <button
              type="button"
              className="text-white bg-[#3173f5] hover:bg-blue-800 font-medium rounded-lg text-sm px-5 w-[200px] py-2.5 "
            >
              Signup with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
