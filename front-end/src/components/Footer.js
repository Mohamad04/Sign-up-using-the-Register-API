

const Footer = () => {

    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }


    return (
        <div className="relative h-80 bg-white py-20">
        <button
            onClick={goToTop}
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
    )
}

export default Footer;