import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Auth from "../auth";



const Signup = () => {
    // let navigate = useNavigate();

    const initialValues = {
        email: "",
        password: "",
    };
    const [adminDetails, setAdminDetails] = useState(initialValues);
    const [missingFields, setmissingFields] = useState(null);

    // const [token, setToken] = useState(null);

  const checkFormInput = () => {
    if (
      adminDetails.email === "" ||
      adminDetails.password === ""
    ) {
      console.log(adminDetails);
      setmissingFields("there is missing fields");
    } else {
      setmissingFields(null);
      return true;
    }
  };

  const handle = (e) => {
    const newAdmin = { ...adminDetails };
    newAdmin[e.target.id] = e.target.value;
    setAdminDetails(newAdmin);
  };


  async function handleSubmit(event) {
    event.preventDefault();
    // console.log(adminDetails)

    try {
        if (checkFormInput()) {

          const response = await axios("http://localhost:8080/admin/login", {
            method: "post",
            data: adminDetails,
            withCredentials: true,
          });
          // const response = await fetch("http://localhost:8080/admin/login", {
          //   method: "POST",
          //   mode: "cors",
          //   Credentials: "include", // Don't Forget To Specify This If You Need Cookies

          //   headers: {
          //     "Content-type": "application/json; charset=UTF-8",
          //     "Accept": "application/json",
          //   },
          //   body: JSON.stringify(adminDetails),
          // })
            const data = await response.json();
            console.log(data);
          // if (response.data.authenticated) {
              // console.log(response.data.accessToken);
              // Auth.storeAuthData(response.data.user, response.data.accessToken);
              refresh()
          //     // navigate(`/customers/${response.data.accessToken}`);        
          // } else {
          //     setmissingFields(
          //       "The email or the password is incorrect!  "
          //     );
          // }
        }
      } catch(error) {
          setmissingFields("Something happened  " + error);
        }
    }
  

function  refresh() {
      fetch("http://localhost:8080/admin/refresh")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err.message));
}



  useEffect(() => {
  }, [missingFields]);

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Log In
              </h1>
            </div>
            <div className="lg:flex-grow md:w-1/2 mt-8 md:mt-0   mx-auto ">
              <div className="flex flex-wrap  w-full  justify-center ">
                <form onSubmit={handleSubmit} className="w-full">
                  <div className="relative mb-6 w-full flex justify-between">
                    <label
                      htmlFor="email"
                      className="flex items-end leading-7 text-sm text-gray-600"
                    >
                      E-mail
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      onChange={(e) => handle(e)}
                      className=" w-9/12 bg-white border-2 border-gray-300 rounded-sm  focus:ring-2 focus:ring-primary-200 text-[12px]  shadow-md outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <div className="relative mb-6 w-full flex justify-between">
                    <label
                      htmlFor="password"
                      className="flex items-end leading-7 text-sm text-gray-600"
                    >
                      password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={(e) => handle(e)}
                      className=" w-9/12 bg-white border-2 border-gray-300 rounded-sm  focus:ring-2 focus:ring-primary-200 text-[12px]  shadow-md outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <small className="block text-center text-red-500">
                    {" "}
                    {missingFields === null ? "" : `${missingFields}`}
                  </small>

                  <div className="relative mt-10">
                    <input type="submit" value="Log In" 
                      className=" text-center  text-white bg-primary font-semibold bg-purpleLight border-0 p-4 focus:outline-none  rounded-md text-sm "
                    />
                     
                  </div>
                </form>
              </div>
            </div>
          
        
      </div>
    </section>
  );
};

export default Signup;
