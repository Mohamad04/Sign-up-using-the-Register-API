import React from 'react';
import Navbar from '../components/Navbar';


function Home() {

    function goToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

  
    return (
      <div>
        <div id="triangle-down" className="hidden md:block"></div>

        <Navbar />
        <section className="second-section ">
          <div className=" max-w-5xl mx-auto py-4 flex md:flex-row flex-col items-center">
            <div className="w-7/12 lg:flex-grow lg:pr-4 md:pr-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font text-6xl leading-none font-bold  text-gray-800">
                Creative way to showcase your App
              </h1>
              <p className="mt-7 mb-7  leading-6 text-base text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
                hic sint molestias, laboriosam nihil aliquid sequi error dolorem!
                Recusandae, distinctio!
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-primary border-0 py-3 px-6 focus:outline-none  rounded text-sm">
                  Get Started
                </button>
              </div>
            </div>
  
            <div className="w-5/12 flex justify-start ">
              <img
                className="w-[22rem] object-cover object-center rounded"
                alt="hero"
                src={require("../assets/thumb-1.png")}
              />
            </div>
          </div>
        </section>
  
        <section className="third-section text-gray-600 body-font">
          <div className="max-w-5xl mx-auto px-5 py-24 ">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-5xl text-3xl font-bold title-font mb-2 text-gray-900">
                Code Challenge
              </h1>
              <div className="mt-4 mb-2 h-0.5 w-16 bg-primary mx-auto"></div>
              <p className="w-9/12 w-full text-sm font-medium leading-relaxed text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                expedita optio voluptatibus. Deleniti, unde? Nobis quam deserunt
                voluptas minus neque harum placeat aliquid{" "}
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className=" md:w-1/3 p-4">
                <div className=" p-6 rounded-lg flex flex-wrap flex-col items-center justify-center">
                  <div className="inline-flex items-center justify-center rounded-full">
                    <svg
                      className="h-20 w-20 fill-gray-200"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        fillRule="evenodd"
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                      >
                        <g fill="#929292" id="icon-23-one-finger-double-tap">
                          <path
                            d="M18.8079869,11.2526203 C19.5587692,10.1925881 20,8.89782159 20,7.5 C20,3.91014895 17.0898511,1 13.5,1 C9.91014895,1 7,3.91014895 7,7.5 C7,9.80120872 8.19584359,11.823113 10,12.9781822 L10,11.742838 C8.77849665,10.7340464 8,9.20793705 8,7.5 C8,4.46243373 10.4624337,2 13.5,2 C16.5375663,2 19,4.46243373 19,7.5 C19,8.83329694 18.5255758,10.0557861 17.7363318,11.0078632 C18.1127655,11.0329911 18.4731402,11.1176946 18.8079869,11.2526203 L18.8079869,11.2526203 L18.8079869,11.2526203 Z M17,10.3286673 C17.6253999,9.55580421 18,8.57164839 18,7.5 C18,5.0147185 15.9852815,3 13.5,3 C11.0147185,3 9,5.0147185 9,7.5 C9,8.57164839 9.37460006,9.55580421 10,10.3286673 L10,7.49129639 C10,5.56125662 11.5670034,4 13.5,4 C15.4290634,4 17,5.56310664 17,7.49129639 L17,10.3286673 L17,10.3286673 L17,10.3286673 Z M19.4987391,30.9999999 C23.6415711,31 27,27.4147752 27,23.5 C27,23.5 27,25.8132437 27,23.5 L27,19.7491622 L27,17.5016756 C27,16.6723231 26.3342028,16 25.5,16 C24.6715729,16 24,16.6711894 24,17.5016756 L24,18 L23,18 L23,15.5064385 C23,14.6744555 22.3342028,14 21.5,14 C20.6715729,14 20,14.6715406 20,15.5064385 L20,17 L19,17 L19,14.5064385 C19,13.6744555 18.3342028,13 17.5,13 C16.6715729,13 16,13.6715406 16,14.5064385 L16,18 L15,18 L15,7.50524116 C15,6.67391942 14.3342028,6 13.5,6 C12.6715729,6 12,6.66712976 12,7.50524116 L12,18.7999878 C9.94160039,16.599567 7.23162978,14.1791206 6.12103271,15.2957153 C5.03386293,16.3887562 7.83536199,19.4007216 11.7473755,25.9830936 C13.5099958,28.9488875 15.7402849,30.9995418 19.4987391,30.9999999 L19.4987391,30.9999999 Z M28,23.5 C28,28.1944206 24.1944206,32 19.5,32.0000003 C16.3870848,32.0000003 13.101807,30.5474856 10.8408204,26.4282229 C7.57733174,20.4825159 3.40385286,16.5832077 5.39111327,14.5959473 C6.81276236,13.1742982 9.04484162,14.5381668 11,16.3667868 L11,16.3667868 L11,7.50840855 C11,6.11541748 12.1192881,5 13.5,5 C14.8903379,5 16,6.12305276 16,7.50840855 L16,12.4983653 C16.4178303,12.1853054 16.937197,12 17.5,12 C18.5825181,12 19.4948851,12.6774672 19.8458175,13.6281239 C20.2865931,13.2379894 20.8657109,13 21.5,13 C22.8903379,13 24,14.1182256 24,15.4976267 L24,15.5110883 C24.4178303,15.1985158 24.937197,15.014191 25.5,15.014191 C26.8903379,15.014191 28,16.1335355 28,17.5143168 L28,23.5 L28,23.5 Z"
                            id="one-finger-double-tap"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h2 className="text-xl text-gray-900 font-extrabold title-font m-2">
                    Fully functional
                  </h2>
                  <p className="text-center font-medium leading-relaxed text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere expedita optio voluptatibus.{" "}
                  </p>
                </div>
              </div>
              <div className=" md:w-1/3 p-4">
                <div className=" p-6 rounded-lg flex flex-wrap flex-col items-center justify-center">
                  <div className="inline-flex items-center justify-center rounded-full">
                    <svg
                      className="h-20 w-20 fill-gray-200"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39s-4.66 1.97-4.66 4.39c0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94s3.08 1.32 3.08 2.94c0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z" />
                    </svg>
                  </div>
                  <h2 className="text-xl text-gray-900 font-extrabold title-font m-2">
                    Fully functional
                  </h2>
                  <p className="text-center font-medium leading-relaxed text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere expedita optio voluptatibus.{" "}
                  </p>
                </div>
              </div>
              <div className=" md:w-1/3 p-4">
                <div className=" p-6 rounded-lg flex flex-wrap flex-col items-center justify-center">
                  <div className="inline-flex items-center justify-center rounded-full">
                    <svg
                      className="h-20 w-20 fill-gray-200"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                    </svg>
                  </div>
                  <h2 className="text-xl text-gray-900 font-extrabold title-font m-2">
                    Fully functional
                  </h2>
                  <p className="text-center font-medium leading-relaxed text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere expedita optio voluptatibus.{" "}
                  </p>
                </div>
              </div>
              <div className=" md:w-1/3 p-4">
                <div className=" p-6 rounded-lg flex flex-wrap flex-col items-center justify-center">
                  <div className="inline-flex items-center justify-center rounded-full">
                    <svg
                      className="h-20 w-20 fill-gray-200"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                  <h2 className="text-xl text-gray-900 font-extrabold title-font m-2">
                    Location Tracking
                  </h2>
                  <p className="text-center font-medium leading-relaxed text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere expedita optio voluptatibus.{" "}
                  </p>
                </div>
              </div>
              <div className=" md:w-1/3 p-4">
                <div className=" p-6 rounded-lg flex flex-wrap flex-col items-center justify-center">
                  <div className="inline-flex items-center justify-center rounded-full">
                    <svg
                      className="h-20 w-20 fill-gray-200"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10,13c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S9.45,13,10,13 M10,11c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3 S11.66,11,10,11L10,11z M18.5,9l1.09-2.41L22,5.5l-2.41-1.09L18.5,2l-1.09,2.41L15,5.5l2.41,1.09L18.5,9z M21.28,12.72L20.5,11 l-0.78,1.72L18,13.5l1.72,0.78L20.5,16l0.78-1.72L23,13.5L21.28,12.72z M16.25,14c0-0.12,0-0.25-0.01-0.37l1.94-1.47l-2.5-4.33 l-2.24,0.94c-0.2-0.13-0.42-0.26-0.64-0.37L12.5,6h-5L7.2,8.41C6.98,8.52,6.77,8.65,6.56,8.78L4.32,7.83l-2.5,4.33l1.94,1.47 C3.75,13.75,3.75,13.88,3.75,14s0,0.25,0.01,0.37l-1.94,1.47l2.5,4.33l2.24-0.94c0.2,0.13,0.42,0.26,0.64,0.37L7.5,22h5l0.3-2.41 c0.22-0.11,0.43-0.23,0.64-0.37l2.24,0.94l2.5-4.33l-1.94-1.47C16.25,14.25,16.25,14.12,16.25,14z M14.83,17.64l-1.73-0.73 c-0.56,0.6-1.3,1.04-2.13,1.23L10.73,20H9.27l-0.23-1.86c-0.83-0.19-1.57-0.63-2.13-1.23l-1.73,0.73l-0.73-1.27l1.49-1.13 c-0.12-0.39-0.18-0.8-0.18-1.23c0-0.43,0.06-0.84,0.18-1.23l-1.49-1.13l0.73-1.27l1.73,0.73c0.56-0.6,1.3-1.04,2.13-1.23L9.27,8 h1.47l0.23,1.86c0.83,0.19,1.57,0.63,2.13,1.23l1.73-0.73l0.73,1.27l-1.49,1.13c0.12,0.39,0.18,0.8,0.18,1.23 c0,0.43-0.06,0.84-0.18,1.23l1.49,1.13L14.83,17.64z" />
                    </svg>
                  </div>
                  <h2 className="text-xl text-gray-900 font-extrabold title-font m-2">
                    Powerful Settings
                  </h2>
                  <p className="text-center font-medium leading-relaxed text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere expedita optio voluptatibus.{" "}
                  </p>
                </div>
              </div>
              <div className=" md:w-1/3 p-4">
                <div className=" p-6 rounded-lg flex flex-wrap flex-col items-center justify-center">
                  <div className="inline-flex items-center justify-center rounded-full">
                    <svg
                      className="h-20 w-20 fill-gray-200"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* <path d="M0 0h24v24H0V0z" fill="none" /> */}
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                    </svg>
                  </div>
                  <h2 className="text-xl text-gray-900 font-extrabold title-font m-2">
                    Multiple Language
                  </h2>
                  <p className="text-center font-medium leading-relaxed text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere expedita optio voluptatibus.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="fourth-section text-gray-600 bg-secondary body-font">
          <div className="max-w-5xl mx-auto flex px-5 py-24 md:flex-row flex-col ">
            <div className="md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
              <img
                className="w-48 object-cover object-center rounded"
                alt="phone"
                src={require("../assets/thumb-2.png")}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2  md:pl-12 pt-10 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl  mb-4 font-bold text-gray-900">
                Work faster with powerful tools.
              </h1>
  
              <nav className="mt-5  w-full flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <span className=" inline-flex">
                  <span className="flex items-center">
                    <svg
                      className="h-5 w-5 stroke-1 stroke-primary "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* <path d="M0 0h24v24H0V0z" fill="none" /> */}
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm font-medium">
                    Combined with a handful of model sentence structures looks
                    reasonable.
                  </span>
                </span>
                <span className=" inline-flex">
                  <span className="flex items-center">
                    <svg
                      className="h-5 w-5 stroke-1 stroke-primary "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* <path d="M0 0h24v24H0V0z" fill="none" /> */}
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm font-medium">
                    Combined with a handful of model sentence structures looks
                    reasonable.
                  </span>
                </span>
                <span className=" inline-flex">
                  <span className="flex items-center">
                    <svg
                      className="h-5 w-5 stroke-1 stroke-primary "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* <path d="M0 0h24v24H0V0z" fill="none" /> */}
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm font-medium">
                    Combined with a handful of model sentence structures looks
                    reasonable.
                  </span>
                </span>
                <span className=" inline-flex">
                  <span className="flex items-center">
                    <svg
                      className="h-5 w-5 stroke-1 stroke-primary "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* <path d="M0 0h24v24H0V0z" fill="none" /> */}
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm font-medium">
                    Combined with a handful of model sentence structures looks
                    reasonable.
                  </span>
                </span>
                <span className=" inline-flex">
                  <span className="flex items-center">
                    <svg
                      className="h-5 w-5 stroke-1 stroke-primary "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* <path d="M0 0h24v24H0V0z" fill="none" /> */}
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm font-medium">
                    Combined with a handful of model sentence structures looks
                    reasonable.
                  </span>
                </span>
              </nav>
  
              <div className="mt-8 flex flex-wrap  text-center">
                <div className="border-2 border-gray-200 p-3 mr-3 bg-white shadow-md rounded">
                  <svg
                    className="h-6 w-6 fill-primary stroke-transparent "
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                  </svg>
                </div>
  
                <div className="border-2 border-gray-200 p-3 mr-3 bg-white shadow-md rounded">
                  <svg
                    className="h-6 w-6 fill-primary stroke-transparent "
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* <path d="M0 0h24v24H0V0z" fill="none" /> */}
                    <path d="M21.99 6.86L12 1 2 6.86V20h20l-.01-13.14zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z" />
                  </svg>
                </div>
                <div className="border-2 border-gray-200 p-3 mr-3 bg-white shadow-md rounded">
                  <svg
                    className="h-6 w-6 fill-primary stroke-transparent "
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* <path d="M0 0h24v24H0V0z" fill="none" /> */}
                    <path d="M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="fifth-secton">
          <div className="max-w-5xl mx-auto flex px-5 py-24 md:flex-row flex-col ">
            <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-5xl text-3xl font-bold text-gray-900">
                Share your photos with friends easily
              </h1>
  
              <nav className="mt-7  w-full flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-4">
                <span className=" inline-flex">
                  <div className="border-2 border-gray-200 p-3 bg-white shadow-md rounded">
                    <svg
                      className="h-5 w-5 fill-primary stroke-transparent "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
                    </svg>
                  </div>
                  <span className="ml-5 text-sm font-medium text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus nemo hic iusto placeat quidem nobis!
                  </span>
                </span>
                <span className="inline-flex">
                  <div className="border-2 border-gray-200 p-3 bg-white shadow-md rounded">
                    <svg
                      className="h-5 w-5 fill-primary stroke-transparent "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M22 6h-6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20V6zm-8 0h-4V4h4v2z" />
                    </svg>
                  </div>
                  <span className="ml-5 text-sm font-medium text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus nemo hic iusto placeat quidem nobis!
                  </span>
                </span>
                <span className=" inline-flex">
                  <div className="border-2 border-gray-200 p-3 bg-white shadow-md rounded">
                    <svg
                      className="h-5 w-5 fill-primary stroke-transparent "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect fill="none" height="24" width="24" />
                      <path d="M12,2c-5.33,4.55-8,8.48-8,11.8c0,4.98,3.8,8.2,8,8.2s8-3.22,8-8.2C20,10.48,17.33,6.55,12,2z M12,20c-3.35,0-6-2.57-6-6.2 c0-2.34,1.95-5.44,6-9.14c4.05,3.7,6,6.79,6,9.14C18,17.43,15.35,20,12,20z M7.83,14c0.37,0,0.67,0.26,0.74,0.62 c0.41,2.22,2.28,2.98,3.64,2.87c0.43-0.02,0.79,0.32,0.79,0.75c0,0.4-0.32,0.73-0.72,0.75c-2.13,0.13-4.62-1.09-5.19-4.12 C7.01,14.42,7.37,14,7.83,14z" />
                    </svg>
                  </div>
                  <span className="ml-5 text-sm font-medium text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus nemo hic iusto placeat quidem nobis!
                  </span>
                </span>
  
                <span className=" inline-flex">
                  <div className="border-2 border-gray-200 p-3 bg-white shadow-md rounded">
                    <svg
                      className="h-5 w-5 fill-primary stroke-transparent "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </div>
                  <span className="ml-5 text-sm font-medium text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus nemo hic iusto placeat quidem nobis!
                  </span>
                </span>
              </nav>
              <div className="md:mt-10 m-7 flex justify-center">
                <button className="inline-flex text-white bg-primary border-0 py-3 px-6 focus:outline-none  rounded text-sm">
                  Learn more
                </button>
              </div>
            </div>
            <div className="md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
              <img
                className="w-[15rem] object-cover object-center rounded"
                alt="phone"
                src={require("../assets/thumb-3.png")}
              />
            </div>
          </div>
        </section>
  
        <section className="sixth-section text-white bg-gradient-to-r from-purple to-pink">
          <div className="max-w-5xl mx-auto px-5 pt-20 pb-16 ">
            <div className="flex flex-wrap w-full mb-16 flex-col items-center text-center">
              <h1 className="sm:text-5xl text-3xl font-bold title-font mb-2 ">
                Code Challenge
              </h1>
              <p className="w-9/12 w-full mt-5  text-sm font-medium leading-relaxed ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                expedita optio voluptatibus. Deleniti, unde? Nobis quam deserunt
                voluptas minus neque harum placeat aliquid{" "}
              </p>
            </div>
            <div className="flex flex-wrap -m-4 md:justify-between">
              <div className=" md:w-3/12 mb-5 md:mb-0">
                <div className=" rounded-lg flex flex-wrap flex-col items-center justify-center">
                  <svg
                    className="h-20 w-20 fill-white"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path d="M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z" />
                    </g>
                  </svg>
  
                  <h2 className="text-xl  font-extrabold title-font m-2">
                    Install the App
                  </h2>
                  <p className="text-center font-medium leading-relaxed text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere expedita optio voluptatibus.{" "}
                  </p>
                </div>
              </div>
              <div className="md:w-1/12 items-center hidden md:block">
                <svg
                  className="h-20 w-20 fill-gray-200"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </div>
              <div className=" md:w-4/12 mb-5 md:mb-0">
                <div className=" rounded-lg flex flex-wrap flex-col items-center justify-center">
                  <svg
                    className="h-20 w-20 fill-gray-200"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4,22H2V2h2V22z M22,2h-2v20h2V2z M13.5,7h-3v10h3V7z" />
                  </svg>
  
                  <h2 className="text-xl  font-extrabold title-font m-2">
                    Setup your profile
                  </h2>
                  <p className="text-center font-medium leading-relaxed text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere expedita optio voluptatibus.{" "}
                  </p>
                </div>
              </div>
              <div className="md:w-1/12 items-center hidden md:block">
                <svg
                  className="h-20 w-20 fill-gray-200"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </div>
              <div className=" md:w-3/12 mb-5 md:mb-0">
                <div className=" rounded-lg flex flex-wrap flex-col items-center justify-center">
                  <svg
                    className="h-20 w-20 fill-gray-200"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <rect fill="none" height="1" width="10" x="7" y="20" />
                      <rect fill="none" height="1" width="10" x="7" y="3" />
                      <path d="M21.81,12.74l-0.82-0.63c0-0.09,0-0.13,0-0.22l0.8-0.63c0.16-0.12,0.2-0.34,0.1-0.51l-0.85-1.48 c-0.07-0.13-0.21-0.2-0.35-0.2c-0.05,0-0.1,0.01-0.15,0.03l-0.95,0.38c-0.08-0.05-0.11-0.07-0.19-0.11l-0.15-1.01 C19.22,8.15,19.05,8,18.85,8h-1.71c-0.2,0-0.37,0.15-0.4,0.34L16.6,9.35c-0.03,0.02-0.07,0.03-0.1,0.05 c-0.03,0.02-0.06,0.04-0.09,0.06l-0.95-0.38c-0.05-0.02-0.1-0.03-0.15-0.03c-0.14,0-0.27,0.07-0.35,0.2l-0.85,1.48 c-0.1,0.17-0.06,0.39,0.1,0.51l0.8,0.63c0,0.09,0,0.13,0,0.23l-0.8,0.63c-0.16,0.12-0.2,0.34-0.1,0.51l0.85,1.48 c0.07,0.13,0.21,0.2,0.35,0.2c0.05,0,0.1-0.01,0.15-0.03l0.95-0.37c0.08,0.05,0.12,0.07,0.2,0.11l0.15,1.01 c0.03,0.2,0.2,0.34,0.4,0.34h1.71c0.2,0,0.37-0.15,0.4-0.34l0.15-1.01c0.03-0.02,0.07-0.03,0.1-0.05c0.03-0.02,0.06-0.04,0.09-0.06 l0.95,0.38c0.05,0.02,0.1,0.03,0.15,0.03c0.14,0,0.27-0.07,0.35-0.2l0.85-1.48C22.01,13.08,21.97,12.86,21.81,12.74z M18,13.5 c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C19.5,12.83,18.83,13.5,18,13.5z M17,18H7V6h10v1h2V3 c0-1.1-0.9-2-2-2H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2v-4h-2V18z M7,3h10v1H7V3z M17,21H7v-1h10V21z" />
                    </g>
                  </svg>
  
                  <h2 className="text-xl  font-extrabold title-font m-2">
                    Enjoy the features!
                  </h2>
                  <p className="text-center font-medium leading-relaxed text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere expedita optio voluptatibus.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="seventh-section bg-secondary body-font">
          <div className="max-w-5xl mx-auto px-5 py-24 ">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-5xl text-3xl font-bold title-font mb-2 text-gray-900">
                BASMA code Challenge
              </h1>
              <div className="mt-4 mb-2 h-0.5 w-16 bg-primary mx-auto"></div>
              <p className="w-9/12 w-full text-sm font-medium leading-relaxed text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                expedita optio voluptatibus. Deleniti, unde? Nobis quam deserunt
                voluptas minus neque
              </p>
            </div>
            <div className="flex flex-wrap -m-4 justify-center">
              <div className=" md:w-[30%] sm:mr-3 ">
                <div className=" flex flex-wrap items-center justify-center ">
                  <div className="h-full w-full py-10 rounded-[15px] items-center justify-center border-0 flex flex-col  bg-white relative shadow-lg overflow-hidden">
                    <svg
                      className="h-20 w-24 fill-primary stroke-transparent "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <rect fill="none" height="24" width="24" />
                      </g>
                      <g>
                        <path d="M18.18,10l-1.7-4.68C16.19,4.53,15.44,4,14.6,4H12v2h2.6l1.46,4h-4.81l-0.36-1H12V7H7v2h1.75l1.82,5H9.9 c-0.44-2.23-2.31-3.88-4.65-3.99C2.45,9.87,0,12.2,0,15c0,2.8,2.2,5,5,5c2.46,0,4.45-1.69,4.9-4h4.2c0.44,2.23,2.31,3.88,4.65,3.99 c2.8,0.13,5.25-2.19,5.25-5c0-2.8-2.2-5-5-5H18.18z M7.82,16c-0.4,1.17-1.49,2-2.82,2c-1.68,0-3-1.32-3-3s1.32-3,3-3 c1.33,0,2.42,0.83,2.82,2H5v2H7.82z M14.1,14h-1.4l-0.73-2H15C14.56,12.58,14.24,13.25,14.1,14z M19,18c-1.68,0-3-1.32-3-3 c0-0.93,0.41-1.73,1.05-2.28l0.96,2.64l1.88-0.68l-0.97-2.67c0.03,0,0.06-0.01,0.09-0.01c1.68,0,3,1.32,3,3S20.68,18,19,18z" />
                      </g>
                    </svg>
  
                    <p className="flex items-center text-xl text-gray-600 tracking-widest font-semibold mb-2">
                      BASIC
                    </p>
                    <p className="flex items-end text-xl text-primary font-semibold mt-2 mb-4">
                      $<span className="text-4xl font-[1100]">49</span>
                    </p>
                    <div className="sm:w-2/3 w-full mx-auto overflow-auto">
                      <table className="table-auto w-full text-center text-gray-600 text-sm whitespace-no-wrap">
                        <tbody>
                          <tr>
                            <td className="border-t-[1px] border-gray-200 sm:px-2 px-1 py-4">
                              5GB Linux Web Space
                            </td>
                          </tr>
                          <tr>
                            <td className="border-t-[1px] border-gray-200 sm:px-2 px-1 py-4">
                              5 MySQL Databases
                            </td>
                          </tr>
                          <tr>
                            <td className="border-t-[1px] border-gray-200 sm:px-2 px-1 py-4">
                              24/7 Tech Support
                            </td>
                          </tr>
                          <tr>
                            <td className="border-t-[1px] border-b-[1px] border-gray-200 sm:px-2 px-1 py-4">
                              Daily Backups
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button className=" inline-flex md:mt-[-20px] m-5 text-white bg-primary font-semibold bg-gradient-to-r from-purple to-pink border-0 py-3 px-6 focus:outline-none  rounded text-sm z-50 ">
                    Sign up
                  </button>
                </div>
              </div>
              <div className=" md:w-[30%] sm:ml-3 ">
                <div className=" flex flex-wrap items-center justify-center ">
                  <div className="h-full w-full py-10 rounded-[15px] items-center justify-center border-0 flex flex-col  bg-white relative shadow-lg overflow-hidden">
                    <svg
                      className="h-20 w-24 fill-primary stroke-transparent "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path d="M20,11c-0.18,0-0.36,0.03-0.53,0.05L17.41,9H20V6l-3.72,1.86L13.41,5H9v2h3.59l2,2H11l-4,2L5,9H0v2h4c-2.21,0-4,1.79-4,4 c0,2.21,1.79,4,4,4c2.21,0,4-1.79,4-4l2,2h3l3.49-6.1l1.01,1.01C16.59,12.64,16,13.75,16,15c0,2.21,1.79,4,4,4c2.21,0,4-1.79,4-4 C24,12.79,22.21,11,20,11z M4,17c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C6,16.1,5.1,17,4,17z M20,17c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2s2,0.9,2,2C22,16.1,21.1,17,20,17z" />
                      </g>
                    </svg>
                    <p className="flex items-center text-xl text-gray-600 tracking-widest font-semibold mb-2">
                      PRO
                    </p>
                    <p className="flex items-end text-xl text-primary font-semibold mt-2 mb-4">
                      $<span className="text-4xl font-[1100]">129</span>
                    </p>
                    <div className="sm:w-2/3 w-full mx-auto overflow-auto">
                      <table className="table-auto w-full text-center text-gray-600 text-sm whitespace-no-wrap">
                        <tbody>
                          <tr>
                            <td className="border-t-[1px] border-gray-200 sm:px-2 px-1 py-4">
                              10GB Linux Web Space
                            </td>
                          </tr>
                          <tr>
                            <td className="border-t-[1px] border-gray-200 sm:px-2 px-1 py-4">
                              50 MySQL Databases
                            </td>
                          </tr>
                          <tr>
                            <td className="border-t-[1px] border-gray-200 sm:px-2 px-1 py-4">
                              Unlimited Email
                            </td>
                          </tr>
                          <tr>
                            <td className="border-t-[1px] border-b-[1px] border-gray-200 sm:px-2 px-1 py-4">
                              Daily Backups
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button className=" inline-flex md:mt-[-20px] m-5 text-white bg-primary font-semibold bg-gradient-to-r from-purple to-pink border-0 py-3 px-6 focus:outline-none  rounded text-sm z-50 ">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
            <div className=" w-full mt-8 items-center text-center">
              <p className=" w-full text-sm font-medium leading-relaxed text-black">
                Not sure what to choose?{" "}
                <span className="underline decoration-1">Contact Us</span>
              </p>
            </div>
          </div>
        </section>
  
        <section className="seventh-section h-88 relative bg-blue-900">
          <img
            className=" w-full opacity-25 object-cover h-full object-center block absolute "
            alt="background"
            src={require("../assets/download-bg.jpeg")}
          />
  
          <div className="max-w-5xl mx-auto  flex flex-wrap w-full text-white pt-20 pb-20 px-10 relative mb-1 ">
            <div className="text-center relative z-10 w-full">
              <h2 className="text-[2.8rem]  font-medium title-font mb-2">
                BASMA is available for all devices
              </h2>
              <p className="text-center md:mx-16 leading-relaxed text-base ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                suscipit repellat reprehenderit maxime neque placeat autem enim
                fugit qui. Debitis itaque dolorem perferendis velit error veniam
                voluptatum alias nulla tenetur.
              </p>
              <div className="flex flex-wrap -mx-2 justify-center mt-2">
                <div className="px-2 ">
                  <div className="flex flex-wrap w-full   py-6 relative">
                    <img
                      className="w-40 object-cover object-center "
                      alt="hero"
                      src={require("../assets/google-play.png")}
                    />
                  </div>
                </div>
                <div className="px-2 ">
                  <div className="flex flex-wrap w-full  py-6 relative">
                    <img
                      className="w-40 object-cover object-center "
                      alt="hero"
                      src={require("../assets/app-store.png")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full  items-center text-center">
              <p className=" w-full text-sm font-medium  italic  leading-relaxed ">
                * Available on iPhone, iPad and all Android devices
              </p>
            </div>
          </div>
        </section>
  
        <section className="eigth-section h-88 relative py-10 ">
          <img
            className=" w-full object-cover h-full object-center block absolute "
            alt="background"
            src={require("../assets/newsletter-background.png")}
          />
  
          <div className="max-w-5xl mx-auto  flex flex-wrap w-full text-gray-500 pt-20 pb-20 px-10 relative mb-1 ">
            <div className="text-center relative z-10 w-full">
              <h2 className="text-[2.8rem] text-black font-semibold title-font mb-2">
                Subscribe to get updates
              </h2>
              <p className="text-center md:w-8/12 mx-auto leading-relaxed text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                suscipit repellat reprehenderit maxime neque placeat autem enim
                fugit qui.
              </p>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="md:w-8/12 w-full bg-white mt-6 text-center font-semibold rounded-sm  focus:ring-2 focus:ring-primary-200 text-[14px]  shadow-md outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <button className="md:w-8/12 w-full mt-3 text-center  text-white bg-primary font-semibold bg-purpleLight border-0 py-4 focus:outline-none  rounded-md text-sm ">
                Subscribe
              </button>
            </div>
          </div>
        </section>
  
        <section className="ninth-section bg-secondary">
          <div className="flex flex-wrap w-full pt-24 flex-col items-center text-center">
            <h1 className="sm:text-[2.8rem] text-3xl font-bold title-font mb-2 text-gray-900">
              Stay Tuned
            </h1>
            <div className="mt-4 mb-2 h-0.5 w-16 bg-primary mx-auto"></div>
            <p className="md:w-7/12 w-full text-sm font-medium leading-relaxed text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              expedita optio voluptatibus. expedita optio volupt
            </p>
          </div>
          <div className="max-w-5xl mx-auto  flex flex-wrap  px-5 py-16  ">
            <div className=" md:w-1/2 w-5/6  ">
              <nav className="md:w-9/12  w-full flex flex-col text-gray-500 sm:items-start sm:text-left text-center items-center -mb-1 space-y-4">
                <span className=" text-sm font-medium ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus nemo hic iusto placeat quidem nobis! Possimus nemo hic
                  iusto placeat quidem.
                </span>
  
                <span className="inline-flex">
                  <div className="border-0 p-3 bg-purpleLight  rounded">
                    <svg
                      className="h-5 w-5 fill-white  "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <g>
                          <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h6v-6h2v6h6v-8h3L19,9.3z M17,18h-2v-6H9v6H7v-7.81l5-4.5l5,4.5V18z" />
                          <path d="M10,10h4c0-1.1-0.9-2-2-2S10,8.9,10,10z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="ml-5 text-sm font-medium  flex items-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </span>
                <span className=" inline-flex">
                  <div className="border-0 p-3 bg-purpleLight  rounded">
                    <svg
                      className="h-5 w-5 fill-white  "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                  </div>
                  <span className="ml-5 text-sm font-medium  flex items-center">
                    +1 230 456 789-012 345 6789
                  </span>
                </span>
  
                <span className=" inline-flex">
                  <div className="border-0 p-3 bg-purpleLight  rounded">
                    <svg
                      className="h-5 w-5 fill-white  "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <span className="ml-5 text-sm font-medium  flex items-center">
                    exampledomain@domain.com
                  </span>
                </span>
              </nav>
            </div>
            <div className="lg:flex-grow md:w-1/2 mt-8 md:mt-0  flex ">
              <div className="flex flex-wrap  w-full text-start md:justify-start ">
                <div className="relative mb-4 w-full">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full bg-white rounded-sm  focus:ring-2 focus:ring-primary-200 text-[12px]  shadow-md outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4 w-full">
                  <input
                    type="text"
                    id="email"
                    name="Email"
                    placeholder="Email"
                    className="w-full bg-white rounded-sm  focus:ring-2 focus:ring-primary-200 text-[12px] shadow-md outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4 w-full">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full bg-white rounded-sm  focus:ring-2 focus:ring-primary-200 text-[12px] shadow-md outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4 w-full">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="w-full bg-white rounded-sm  focus:ring-2 focus:ring-indigo-200 h-36 text-[12px] shadow-md outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <div className="relative mt-3 w-full">
                  <button className="w-full text-center  text-white bg-primary font-semibold bg-purpleLight border-0 py-4 focus:outline-none  rounded-md text-sm ">
                    <svg
                      className="h-5 w-5 fill-white mr-3 inline-flex "
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <div className="relative h-80 bg-white py-20">
          <button
            onClick={goToTop()}
            className=" absolute bottom-20 right-12 text-center  text-white bg-gray-400 font-semibold  border-0 p-2  focus:outline-none  rounded text-sm "
          >
            <svg
              className="h-5 w-5 fill-white  "
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
  
  export default Home;
  