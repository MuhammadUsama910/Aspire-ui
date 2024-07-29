import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { clickup_icon, freshbooks_icon, github_icon, dropbox_icon, segment_icon } from "../assets"

const Carousel = () => {
  
  const iconsArr = [clickup_icon, dropbox_icon, segment_icon, freshbooks_icon, github_icon];

  const settings = {
    
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
    // className: "center",
    // centerMode: true,
    // centerPadding: "60px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className="container mx-auto pt-12 lg:px-20 xl:px-40">

      <Slider {...settings} >
        { 
          iconsArr?.map((icon, index) => (

            <div key={index} className="px-1 bg-white">
              <div className={`bg-white`}>
                <img
                  className='object-contain'
                  src={`${icon}`}
                  alt={`Image index is: ${index}`}
                />
              </div>
            </div>
          ))
        }

      </Slider>

    </div>
  );
}

export default Carousel