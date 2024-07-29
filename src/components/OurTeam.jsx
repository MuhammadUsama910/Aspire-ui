import { ourTeam } from '../assets'
import { dreamTeam } from '../constants/constant'
import { FaArrowRightLong } from "react-icons/fa6";

const OurTeam = () => {
  return (
    <>
    <section className="container py-8">
      <div className="mt-20">

        <div className='flex flex-col items-center'>
          <img
            src={ourTeam}
            alt="our team"
          />

          <h1 className='pt-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center font-bold 
            leading-snug text-headingColor'> 
            Meet our dream team 
          </h1>

          <p className='pt-5 w-5/6 lg:w-1/2 m-auto text-xs lg:text-sm font-normal text-textColor text-center'> 
            We’re dedicated group of Sed ut perspiciatis unde omnis iste natus error 
            sit voluptatem accusantium doloremque laudantium 
          </p>

        </div>

        <div className='pt-10 md:pt-14 grid grid-cols-2 justify-items-center sm:grid-cols-4 
          lg:grid-cols-4 gap-x-5 md:gap-x-4 lg:gap-x-5 gap-y-8 lg:gap-y-14 sm:px-8 lg:px-28'>
        {
          dreamTeam?.map((item, index) => (
            <div key={index}>
              <img
                className='max-md:size-28'
                src={item.image}
                alt='image'
              />
              <p className='pt-5 text-xs lg:text-base font-medium text-headingColor'> {item.name} </p>
              <p className='pt-1 text-xxs lg:text-sm font-normal text-textColor'> {item.designation} </p> 
            </div>
          ))
        }
        </div>

        <div className='md:flex md:gap-x-12 gap-x-20 lg:gap-x-20 mt-14 md:px-12 lg:px-20 py-8 lg:py-14 sm:w-4/5 md:w-11/12 lg:w-5/6 
          m-auto rounded-lg bg-bgPrimary'>

          <div className='md:w-2/5 xl:w-1/3 text-2xl xl:text-3xl font-medium text-headingColor text-center'>
            <h1> Join our team </h1>
          </div>

          <div className='flex flex-col max-md:w-3/4 md:w-4/5 lg:w-11/12 max-md:m-auto max-md:mt-2 leading-snug'>
            <p className='text-textColor text-xs max-md:text-center font-normal'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
              dicta sunt explicabo.
            </p>
            <div className='pt-5 flex gap-x-3 items-center max-md:justify-center'>
              <p className='text-[#F63A61] text-xs font-medium'> View Current Openings </p>
              <FaArrowRightLong color="#F63A61"/>
            </div>
          </div>
        
        </div>

      </div>
    </section>
    </>
  )
}

export default OurTeam