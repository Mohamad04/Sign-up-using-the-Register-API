import React from 'react'

const Customers = ({ cc, ll }) => {
	if (ll) {
    		return <h2> Loading ....</h2>;
  	}

  	return (
      <div className="container px-3 pb-8  flex flex-wrap">
        {cc.length === 0 ? (
          <></>
        ) : (
          cc.map((customer, index) => (
            <div
              key={customer.id}
              className="flex relative py-10  sm:items-center md:w-2/3 "
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                {customer.id}
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  {customer.photoUrl ? (
                    <image src={customer.photoUrl} />
                  ) : (
                    <svg
                      className="w-12 h-12 stroke-current text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    {customer.name}
                  </h2>
                  <p className="leading-relaxed">{customer.email}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
}

export default Customers;