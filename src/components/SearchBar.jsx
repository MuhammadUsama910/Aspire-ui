import { check_mark_icon, hero_img } from "../assets";
import Button from "./Button";

const SearchBar = () => {
  return (
    <>
    <section className="container">
      <div className="px-0 sm:px-8 md:px-20 lg:px-40">

        <h1 className="pt-9 lg:pt-20 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center font-bold leading-snug text-headingColor"> 
          Multipurpose Website Templates That boost your sales 
        </h1>
        
        <p className="pt-4 sm:pt-6 xl:pt-5 sm:px-12 md:px-16 lg:px-16 text-xs md:text-sm lg:text-xs xl:text-sm text-center leading-normal md:leading-relaxed text-textColor"> 
          Empowering Your Financial Journey through Customized Asset Management Services 
        </p>

        <div className="max-w-sm w-full p-2 m-auto mt-8 sm:mt-12 flex gap-1 bg-white rounded-full shadow-lg">
          <input
            className="w-full text-sm md:text-base text-textColor p-2 pl-3 rounded-full border-none focus:outline-none"
            type="text"
            id="text"
            name="search"
            placeholder="Enter your work email"
          />
          <Button classes={'p-2 text-xs md:text-sm'}> Get Started </Button>
        </div>

        <div className="pt-3.5 pr-4 flex justify-center items-center gap-x-1">
          <img
            className="size-2"
            src={check_mark_icon}
            alt="tick vector202"
          />
          <p className="text-xxs text-textColor"> No credit card required </p>
        </div>

        <div className="pt-12">
          <img
            className="m-auto"
            src={hero_img}
            alt="product"
          />
        </div>

      </div>      

      <div className="md:px-8 lg:px-16 xl:px-20">
        <hr className="h-1"/>
      </div>

    </section>
    </>
  )
}

export default SearchBar;
