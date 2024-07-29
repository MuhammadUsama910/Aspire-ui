import { footerArr } from "../constants/constant";


const Footer = () => {
  return (
    <>
    <footer>
      <div className="py-12 sm:py-16 md:py-20 lg:py-28 px-10 lg:px-40 xl:px-48 bg-bgFooter">
        
        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-start">
          {
            footerArr?.map((item, index) => (
              <div key={index}>

                <p className="max-lg:mt-8 text-base font-medium text-white"> {item.header} </p>
                {
                  item.textItems?.map((text, index) => (
                    <p key={index} className={`mt-5 text-sm text-start text-textColor font-normal cursor-pointer`}>
                      {text}  
                    </p>
                  ))
                }
                 
              </div>
            ))
          }
        </div>

        <hr className="mt-14"/>

        <div className="pt-12 flex flex-col md:flex-row max-md:gap-y-5 justify-between text-xs sm:text-sm text-white font-normal">
          <p> Copyright @2023 Aspire. All Rights Reserved. </p>
          <p> Terms & Conditions ~ Privacy Policy </p>
        </div>
      
      </div>
    </footer>
    </>
  )
}

export default Footer