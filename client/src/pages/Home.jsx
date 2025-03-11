import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: "",
    registrationNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    navigate("/game");
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#2a2a2a] rounded-xl shadow-2xl p-8 border border-[#3c3c3c]">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#FFD700] mb-2">
            GPL Birthday Bash! 🎉
          </h1>
          <p className="text-[#9ca3af]">Enter your details to join the fun</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#FFD700] mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={userDetails.name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
              className="w-full px-4 py-2 bg-[#3c3c3c] border border-[#4a4a4a] rounded-lg 
                       text-white placeholder-gray-400
                       focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] 
                       outline-none transition-colors"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Registration Number Input */}
          <div>
            <label
              htmlFor="regNo"
              className="block text-sm font-medium text-[#FFD700] mb-2"
            >
              Registration Number
            </label>
            <input
              type="text"
              id="regNo"
              value={userDetails.registrationNumber}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  registrationNumber: e.target.value,
                })
              }
              className="w-full px-4 py-2 bg-[#3c3c3c] border border-[#4a4a4a] rounded-lg 
                       text-white placeholder-gray-400
                       focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] 
                       outline-none transition-colors"
              placeholder="Enter your registration number"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#FFD700] hover:bg-[#F7C400] text-[#1a1a1a] 
                     font-semibold py-3 px-4 rounded-lg transition-all duration-300 
                     shadow-md hover:shadow-lg hover:shadow-[#FFD700]/20
                     transform hover:scale-[1.02]"
          >
            Enter Game
          </button>
        </form>

        {/* Footer Note */}
        <div className="relative mt-8 pt-6 text-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
          <p className="text-sm text-gray-400">
            Get ready to have some fun! 🎮
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
