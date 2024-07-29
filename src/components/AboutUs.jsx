import { FaArrowRightLong } from "react-icons/fa6";
import { About } from "../assets";

const AboutUs = () => {
  return (
    <>
    <section className="container">
      <div className="py-10 mt-4 lg:mt-10 bg-bgSecondary">

        <div className="md:px-20 lg:px-24 xl:px-28 flex flex-col md:flex-row md:gap-12">

          <div className="md:w-1/3 md:pt-12 text-white text-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl md:font-semibold"> About Our Company </h1>
            <p className="mt-6 flex gap-4 justify-center items-center text-xs sm:text-sm md:text-xs xl:text-sm"> Learn More <FaArrowRightLong color="white"/> </p>
          </div>

          <div className="flex flex-col gap-3 md:w-2/3 px-6 pt-6 md:pt-12 text-white text-xxs sm:text-xs 
            lg:text-sm text-center md:text-start">
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum.
            </p>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
              dicta sunt explicabo
            </p>

          </div>
        </div>

        <img
          className="px-4 sm:px-6 md:px-24 lg:px-36 xl:px-40 mt-8 md:mt-16 lg:mt-20 mb-8"
          src={About}
          alt="about"
        />

      </div>
    </section>
    </>
  )
}

export default AboutUs