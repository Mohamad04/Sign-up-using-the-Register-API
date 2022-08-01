import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";

import axios from "axios";

const Signup = () => {

  let navigate = useNavigate ();

  const initialValues = {
    name: "",
    email: "",
    password: ""
  };
  const [customerDetails, setCustomerDetails] =  useState(initialValues);
  const [missingFields, setmissingFields] = useState(null);


  const checkFormInput = () => {
    if(customerDetails.name === initialValues.name ||
    customerDetails.email === initialValues.email ||
    customerDetails.password === initialValues.password 
      ) {
        console.log(customerDetails)
        setmissingFields("there is missing fields");
      } else {
        setmissingFields(null)
        return true;
      }
    };


    const handleInput = (e) => {
      const newCustomer = { ...customerDetails };
      newCustomer[e.target.id] = e.target.value;
      setCustomerDetails(newCustomer);
    };


  const register = async () => {
    if (checkFormInput()) {
    const response = await axios.post("http://localhost:8080/addcustomer", customerDetails);
    
    if (response.data["valid"] === false || !response.data["valid"]) {
      setmissingFields("not valid");
    } else {
      console.log(response.data);
      navigate("/customers");
    }
    } 
  };




  useEffect(() => {
 
  }, [missingFields]);


  
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Register Customers
          </h1>
        </div>
        <div className="lg:flex-grow md:w-1/2 mt-8 md:mt-0   mx-auto ">
          <div className="flex flex-wrap  w-full  justify-center ">
            <div className="relative mb-6 w-full flex justify-between">
              <label
                htmlFor="name"
                className="flex items-end leading-7 text-sm text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={e => handleInput(e)}
                className=" w-9/12 bg-white border-2 border-gray-300 rounded-sm  focus:ring-2 focus:ring-primary-200 text-[12px]  shadow-md outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              </div>
  
            
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
                onChange={e => handleInput(e)}
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
                onChange={e => handleInput(e)}
                className=" w-9/12 bg-white border-2 border-gray-300 rounded-sm  focus:ring-2 focus:ring-primary-200 text-[12px]  shadow-md outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              </div>
               <small className="block text-red-500"> {missingFields === null ? (
            ""
          ) : (
            `${missingFields}`
          )}</small>
 

            <div className="relative mt-10">
              <button 
              onClick={register}
              className=" text-center  text-white bg-primary font-semibold bg-purpleLight border-0 p-4 focus:outline-none  rounded-md text-sm ">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
