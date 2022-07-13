


const Navbar = () => {

  
    const showMobileMenu = () => {
        const mobileMenu = document.getElementById("mob-nav-toggle");
        const mobNav = document.getElementById("mob-nav");
        const closeMobNav = document.getElementById("close-mob-nav");
    
        mobileMenu.classList.add("hidden");
        mobNav.classList.remove("hidden");
        closeMobNav.classList.remove("hidden");
      };
    
      const hideMobileMenu = () => {
        const mobileMenu = document.getElementById("mob-nav-toggle");
        const mobNav = document.getElementById("mob-nav");
        const closeMobNav = document.getElementById("close-mob-nav");
    
        mobileMenu.classList.remove("hidden");
        mobNav.classList.add("hidden");
        closeMobNav.classList.add("hidden");
      };


    return (
        <nav className=" w-full" id="navbar-section">
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="">
            <div className="flex items-center justify-end h-20 px-4 sm:px-0">
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <div className="group relative inline-block text-left">
                    <span className="flex ml-3 px-3 py-1 text-sm rounded-lg   text-white  hover:cursor-pointer focus:cursor-pointer focus:text-white focus:outline-none ">
                      Home
                      <svg
                        className="h-5 w-5 fill-white"
                        stroke="currentColor"
                        height="24px"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    </span>
                    <div className="hidden group-hover:block origin-top-right absolute left-0 mt-3 ml-4 w-56 border rounded-lg shadow-lg">
                      <div className="rounded-lg bg-white shadow-xs">
                        <div className="py-1">
                          <span className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            Share photos
                          </span>
                          <span className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            Code Challenge
                          </span>
                          <span className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            Subscribe
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="flex ml-3 px-3 py-1 text-sm rounded-lg   text-white  hover:cursor-pointer focus:cursor-pointer focus:text-white focus:outline-none ">
                    Features
                  </span>

                  <div className="group relative inline-block text-left">
                    <span className="flex ml-3 px-3 py-1 text-sm rounded-lg   text-white  hover:cursor-pointer focus:cursor-pointer focus:text-white focus:outline-none ">
                      Pages
                      <svg
                        className="h-5 w-5 fill-white"
                        stroke="currentColor"
                        height="24px"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    </span>
                    <div className="hidden group-hover:block origin-top-right absolute left-0 mt-3 ml-4 w-56 border rounded-lg shadow-lg">
                      <div className="rounded-lg bg-white shadow-xs">
                        <div className="py-1">
                          <span className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            Code challenge
                          </span>
                          <span className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            Powerful tools
                          </span>
                          <span className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            Tracking
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <span className="flex ml-3 px-3 py-1 text-sm rounded-lg   text-white  hover:cursor-pointer focus:cursor-pointer focus:text-white focus:outline-none ">
                    Screenshots
                  </span>
                  <span className="flex ml-3 px-3 py-1 text-sm rounded-lg   text-white  hover:cursor-pointer focus:cursor-pointer focus:text-white focus:outline-none ">
                    Pricing
                  </span>

                  <span className="flex ml-3 px-3 py-1 text-sm text-white rounded-lg  hover:cursor-pointer focus:cursor-pointer focus:text-white focus:outline-none ">
                    Contact
                  </span>
                </div>
              </div>
              <div className="-mr-2 flex block md:hidden">
                <button
                  id="mob-nav-toggle"
                  onClick={showMobileMenu}
                  className="block md:hidden inline-flex items-center justify-center p-2 rounded-lg  focus:outline-none "
                >
                  <svg
                    className="h-6 w-6 text-primary"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="inline-flex"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
                <button
                  id="close-mob-nav"
                  onClick={hideMobileMenu}
                  className="hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:text-white"
                >
                  <svg
                    className="h-6 w-6 text-primary"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="inline-flex"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="mob-nav" className="md:hidden">
          <div className="px-2 py-3 sm:px-3">
            <span className="hover:cursor-pointer block px-3 py-3 rounded-lg  text-gray-600 hover:bg-gray-100  focus:outline-none focus:bg-none">
              Home
            </span>
            <span className="mt-1hover:cursor-pointer block px-3 py-3 rounded-lg  text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-none">
              Features
            </span>
            <span className="hover:cursor-pointer block px-3 py-3 rounded-lg  text-gray-600 hover:bg-gray-100    focus:outline-none focus:bg-none">
              Pages
            </span>
            <span className="mt-1 hover:cursor-pointer block px-3 py-3 rounded-lg  text-gray-600 hover:bg-gray-100    focus:outline-none focus:bg-none">
              Screenshots
            </span>
            <span className="mt-1 hover:cursor-pointer block px-3 py-3 rounded-lg  text-gray-600 hover:bg-gray-100    focus:outline-none focus:bg-none">
              Pricing
            </span>
            <span className="mt-1hover:cursor-pointer block px-3 py-3 rounded-lg  text-gray-600 hover:bg-gray-100    focus:outline-none focus:bg-none">
              Contact
            </span>
          </div>
        </div>
      </nav>
    );
};


export default Navbar;