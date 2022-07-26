import React, { useState, useEffect } from "react";
import axios from "axios";
import Customers from "./Customers";
import Pagination from "./Pagination";

const CustomerList = () => {
  // const customer = {
  // 	id: "",
  // 	name: "",
  // 	email: "",
  // };
  const [customers, setCustomers] = useState([]);
  const [currentCustomers, setCurrentCustomers] = useState([]);
  //  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage, setCustomersPerPage] = useState(5);
  const [displayAverageRegistrations, setDisplayAverage] = useState(0);
  const [averageSelect, setAverageSelect] = useState("24 hours");



  const filterBy = (e) => {
    const keyword = e.target.value;

    if (Number.isInteger(parseInt(keyword))) {
      const results = customers.filter(
        (customer) => customer.id === parseInt(e.target.value)
      );
      setCurrentCustomers(results);
    } else if (keyword.includes("@")) {
      const results = customers.filter((customer) => {
        return customer.email.includes(keyword.toLowerCase());
      });

      setCurrentCustomers(results);
    } else if (keyword !== "") {
      const results = customers.filter((customer) => {
        return customer.name.includes(keyword);
      });
      setCurrentCustomers(results);
    } else {
       setCurrentCustomers(customers);
    }
    // setSearchQuery(keyword);
    // console.log(searchQuery);
  };



  useEffect(() => {
//   console.log("useEffect ")
    async function fetchData() {
        setLoading(true);
        const response = await axios.get("http://localhost:8080/customers");
        setCustomers(response.data);
        setLoading(false);
    }
    fetchData();
  }, []);



  useEffect(() => {
    // Get current Customers
    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;

    setCurrentCustomers(
      customers.slice(indexOfFirstCustomer, indexOfLastCustomer)
    );
  }, [customersPerPage, currentPage, customers]);




    const changeNbPerPage = (e) => {
        setCustomersPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };


  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  //    average nb of Registration
  const getAverageRegistrations = async (e) => {
    const keyword = e.target.value;
    // console.log(keyword);
    let sendtimeObject;
    if (keyword === "24 hours") {
      sendtimeObject = {
        nbOfTime: "1",
        timeUnit: "day",
      };
    } else if (keyword === "week") {
      sendtimeObject = {
        nbOfTime: "1",
        timeUnit: "week",
      };
    } else if (keyword === "month") {
      sendtimeObject = {
        nbOfTime: "1",
        timeUnit: "month",
      };
    } else if (keyword === "3 months") {
      sendtimeObject = {
        nbOfTime: "3",
        timeUnit: "month",
      };
    } else {
      sendtimeObject = {
        nbOfTime: "1",
        timeUnit: "year",
      };
    }

    const response = await axios.post(
      "http://localhost:8080/customers/average_registrations",
      sendtimeObject
    );
    // console.log(response.data.length);
    setDisplayAverage(response.data.length);
    setAverageSelect(keyword);
  };



  return (
    <section className="text-gray-600 body-font">
      <div className="p-4  mt-4 md:flex justify-evenly">
        <div className="mx-3">
          <label htmlFor="filter" className="leading-7 text-gray-700">
            Filter By
          </label>
          <input
            type="text"
            id="filter"
            name="filter"
            // value={searchQuery}
            onChange={(e) => filterBy(e)}
            placeholder="id, name, email"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="mx-3">
          <label htmlFor="average" className="leading-7 text-gray-700">
            Average Registrations in last
          </label>
          <select
            id="average"
            value={averageSelect}
            onChange={getAverageRegistrations}
            className="w-full bg-gray-100 bg-opacity-50 rounded border
							border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2
							focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3
							leading-8 transition-colors duration-200 ease-in-out"
          >
            {" "}
            <option value="24 hours">24 hours</option>
            <option value="week">week</option>
            <option value="month">month</option>
            <option value="3 months">3 months</option>
            <option value="year">year</option>
          </select>
          <div> {displayAverageRegistrations ? displayAverageRegistrations + " customers" : <></>} </div>
        </div>

        <div className="mx-3">
          <label htmlFor="paginationNb" className="leading-7 text-gray-700">
            nb of customers in a page
          </label>
          <select
            id="paginationNb"
            value={customersPerPage}
            onChange={changeNbPerPage}
            className="w-full bg-gray-100 bg-opacity-50 rounded border
							border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2
							focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3
							leading-8 transition-colors duration-200 ease-in-out"
          >
            {" "}
            <option value="5">5</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
          </select>
        </div>
      </div>
      <Customers cc={currentCustomers} ll={loading} />
      <Pagination
        customersPerPage={customersPerPage}
        totalCustomers={customers.length}
        current={currentPage}
        paginate={paginate}
      />
    </section>
  );
};

export default CustomerList;