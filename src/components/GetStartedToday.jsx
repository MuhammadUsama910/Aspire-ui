import { check_mark_white_icon } from "../assets"
import Button from "./Button"

const GetStartedToday = () => {
  return (
    <>
    <section className="container mt-16 md:mt-20 lg:mt-32 lg:px-28 xl:px-32">

      <div className="py-10 lg:py-14 px-2 bg-bgSecondary rounded-lg">

        <p className="sm:text-3xl lg:text-4xl xl:text-5xl text-white text-center font-bold"> Get started with Aspire today </p>
        <p className="pt-5 px-8 sm:px-12 md:px-28 lg:px-40 text-xxs sm:text-xs lg:text-sm font-normal text-white text-center">
          We are self-service data analytics software that lets you create visually 
          appealing data visualisations and insightful dashboards in minutes.
        </p>

        <div className="max-w-sm xl:max-w-md w-full p-2 m-auto mt-10 lg:mt-12 flex gap-1 bg-white rounded-full shadow-lg">
          <input
            className="w-full text-xs sm:text-sm md:text-base text-textColor p-2 pl-3 rounded-full border-none focus:outline-none"
            type="text"
            id="text"
            name="search"
            placeholder="Enter your work email"
          />
          <Button classes={'p-2 text-xs md:text-sm'}> Get Started </Button>
        </div>

        <div className="pt-5 flex justify-center items-center gap-x-1.5">
          <img
            className="size-3 text-sm"
            src={check_mark_white_icon}
            alt="tick vector202"
          />
          <p className="text-xxs text-white"> No credit card required </p>
        </div>


      </div>

    </section>
    </>
  )
}

export default GetStartedToday