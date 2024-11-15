import { useState } from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/Auth/login.jpg";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${login})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161c2db3]"></div>

      <div className="container mx-auto h-full flex justify-start items-center">
        <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg opacity-90">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Please Sign In
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@website.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blue-500">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md transition duration-300 ease-in-out hover:bg-blue-600"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
