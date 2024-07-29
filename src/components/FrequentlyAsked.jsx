import { MdKeyboardArrowDown } from "react-icons/md";
import { frequentlyAskedArr } from "../constants/constant";

const FrequentlyAsked = () => {
  return (
    <>
    <section className="max-sm:mt-12 mt-16">
      <div className="py-12 xl:py-28 bg-bgPrimary">

        <div className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center">
          Frequently asked questions
        </div>

        <p className="pt-5 max-md:w-3/4 max-md:m-auto text-sm lg:text-base font-normal text-center text-textColor"> 
          We haveput together some commonly asked questions 
        </p>

        <ul className="pt-8 lg:pt-14 px-12 lg:px-28 grid grid-cols-1 md:grid-cols-2 gap-x-4 justify-items-center gap-y-4">
        {
          frequentlyAskedArr?.map((item, index) => (
              <li key={index} className="w-full flex items-center justify-between max-md:text-xxs md:text-xs xl:text-sm bg-white text-headingColor p-1 md:p-2 lg:p-4">
              <p> {item.text} </p>
              <MdKeyboardArrowDown/>
              </li>

          ))
        }
        </ul>

      </div>
    </section>
    </>
  )
}

export default FrequentlyAsked