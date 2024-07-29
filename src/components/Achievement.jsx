import { cardArr } from '../constants/constant';

const Achievement = () => {
  return (
    <>
    <section className="container">
      <div className="py-8 mt-12 md:mt-16 lg:mt-20 xl:mt-28">

        <div className="text-headingColor text-2xl font-bold md:text-3xl xl:text-5xl sm:w-2/3 sm:m-auto xl:w-2/3 xl:m-auto text-center">
          <h1> Our 12 years of together have given us much to be proud of </h1>
        </div>

        <div className="grid grid-cols-1 gap-y-2 gap-x-2 justify-items-center sm:grid-cols-2 lg:grid-cols-4 
          lg:px-10 xl:px-28 pt-8 md:pt-12 lg:pt-16 xl:pt-20">
          {
            cardArr?.map((item, index) => (
              
              <div key={index} className="w-60 h-60 lg:w-56 lg:h-56 xl:w-60 xl:h-60 p-8 lg:p-6 xl:p-8 bg-cardPrimary rounded-md">
                <img 
                  src={item.icon}
                  alt="icon"
                />
                <p className="text-headingColor text-xl font-bold pt-5"> {item.text} </p>
                <p className="text-textColor text-xs mt-2"> {item.detail} </p>
              </div>
            ))
          }
        </div>

      </div>
    </section>
    
    
    </>
  )
}

export default Achievement