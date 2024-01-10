import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Avatar } from '@material-ui/core';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import '../../App.css'

const SliderFirst = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    fade: false,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: '1000',
    prevArrow: <BsArrowLeft />,
    nextArrow: <BsArrowRight />
  };


  const [Slides] = useState([

    {
      img: '/RealEstateGallery/imagesss.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus possimus quibusdam maxime necessitatibus inventore laudantium voluptates quo sit expedita? Explicabo, excepturi animi? Similique,Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veniam illo'

    },
    {
      img: '/RealEstateGallery/images.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus possimus quibusdam maxime necessitatibus inventore laudantium voluptates quo sit expedita? Explicabo, excepturi animi? Similique, libero'

    },
    {
      img: '/RealEstateGallery/imagess.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus possimus quibusdam maxime necessitatibus inventore laudantium voluptates quo sit expedita? Explicabo, excepturi animi? Similique, liberoreviewLorem ipsum   dolor sit amet consectetur adipisicing elit. Quidem minus possimus quibusdam maxime necessitatibus inventore laudantium voluptates quo sit expedita? Explicabo, excepturi animi? Similique, libero'

    },
    {
      img: '/RealEstateGallery/imagesss.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus possimus quibusdam maxime necessitatibus inventore laudantium voluptates quo sit expedita? Explicabo, excepturi animi? Similique, libero'

    },
    {
      img: '/RealEstateGallery/image.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus possimus quibusdam maxime necessitatibus inventore laudantium voluptates quo sit expedita? Explicabo, excepturi animi? Similique, libero'

    },

  ])

  return (

    <div className='pt-10 lg:cursor-pointer justify-center'>

      <div className=''>
        <Slider {...settings}>
          {
            Slides.map((i,ind) => {
              return (
                <div key={ind.id} className='mt-10'>
                  <div className='flex justify-center '>
                    <Avatar
                      src={i.img}
                      imgProps={{ style: { borderRadius: '50%' } }}
                      style={{ width: '150px', height: '150px', border: '1px solid lightpink', padding: '7px' }} />
                  </div>

                  <div className='text-center p-4 mx-auto pt-7 w-[80%] md:w-[60vw]'>
                    <p className='flex-wrap font-Oldenburg text-xl font-normal '>{i.review}</p>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default SliderFirst
