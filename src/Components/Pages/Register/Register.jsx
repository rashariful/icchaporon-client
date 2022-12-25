import React, { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from "../../../Context/UserContext";



const Register = () => {

  const {
    setUser,
    setError,
    registerUser,
    registerUserWithGoogle,
  } = useContext(AuthContext);

  // 01 handel Register Function for submit doc
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    form.reset()

    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        window.location.reload()
        console.log(user);
        swal({
          title: "Registration Successful!",
          icon: "success",
          button: "ok",
        });
        setError("");
      
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        swal({
          title: error,
          icon: "warning",
          button: "ok",
        });
      });
    form.reset();
  };


  // 02 register user with Google
  const handleRegisterGoogle = () => {
    registerUserWithGoogle()
      .then((result) => {
        swal({
          title: "Registration Successful!",
          icon: "success",
          button: "ok",
        });
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        swal({
          title: error,
          icon: "warning",
          button: "ok",
        });
      });
  };



  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className=" py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <form
              onSubmit={handleRegister}
              className="max-w-md bg-white border rounded-lg mx-auto"
            >
              <h2 className="text-gray-700 text-xl font-semibold text-center mt-4 md:mt-8">
                Create your Icchaporon account
              </h2>
              <div className="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label
                    for="name"
                    className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>

                <div>
                  <label
                    for="password"
                    className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>

                <button className="block bg-rose-500 hover:bg-rose-600 active:bg-rose-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  Register
                </button>

                <div className="flex justify-center items-center relative">
                  <span className="h-px bg-gray-300 absolute inset-x-0"></span>
                  <span className="bg-white text-gray-400 text-sm relative px-4">
                    Register with social
                  </span>
                </div>

                <button className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3">
                  <FaFacebook className="w-5 h-5"></FaFacebook>
                  Continue with Facebook
                </button>

                <button
                  onClick={handleRegisterGoogle}
                  className="flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </button>
              </div>

              <div className="flex justify-center items-center bg-gray-100 p-4">
                <p className="text-gray-500 text-sm text-center">
                  Don't have an account?{" "}
                  <Link
                    to="/login"
                    className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
