import React from 'react'

const Pagination = ({ customersPerPage, totalCustomers, current,  paginate}) => {
    const pageNumbers = [];

    for (let i =1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
        pageNumbers.push(i);
    }


  return (
    <div className="flex mb-12 justify-center items-center ">
      {pageNumbers.map((number) =>
        number === current ? (
          <span
            key={number}
            onClick={() => paginate(number)}
            className=" text-indigo-700 border-b-2 border-indigo-700 py-2 text-lg px-2 mr-2 hover:cursor-pointer"
          >
            {number}
          </span>
        ) : (
          <span
            key={number}
            onClick={() => paginate(number)}
            className=" text-gray-500 border-b-2 border-gray-500 py-2 text-lg px-2 mr-2 hover:cursor-pointer hover:border-indigo-500 hover:text-indigo-500"
          >
            {number}
          </span>
        )
      )}
      {/* <svg
          className="w-4 h-4 ml-12 fill-gray-200 hover:cursor-pointer "
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg> */}
    </div>
  );
}

export default Pagination