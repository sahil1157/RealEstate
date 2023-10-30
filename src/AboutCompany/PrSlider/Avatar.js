import React from 'react'
import image from '../../Components/logos/A-Gent1.jpg'
import { Avatar } from '@material-ui/core'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Avatar1 = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: '100',
    };

    const avs =
        [
            {
                img: '/RealEstateGallery/A-Gent1.jpg'
            },
            {
                img: '/RealEstateGallery/image.jpg'
            },
            {
                img: '/RealEstateGallery/imagess.jpg'
            },
        ]
    return (
        <div className='w-[70vw] m-auto'>
            <Slider {...settings}>

                {
                    avs.map((i) => {
                        return (
                            <div className='box-border pt-5 h-[400px] w-[100vw] border-black border-2 flex-row'>
                                <div className='flex justify-center '>
                                    <Avatar
                                        src={i.img}
                                        imgProps={{ style: { borderRadius: '50%' } }}
                                        style={{ width: '140px', height: '140px', border: '1px solid lightgray', padding: '7px' }} />
                                </div>

                                <div className='text-center m-auto flex w-[70%] '>
                                    <p className='pt-5 text-gray-500 font-Oldenburg'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam hic voluptates atque ab nam distinctio! Placeat cupiditate ratione maxime inventore porro veritatis dolore sunt dolores ipsum! Ab illum officiis error veniam qui laboriosam voluptate enim, excepturi ratione sint voluptatem dolorem.</p>
                                </div>
                            </div>


                        )
                    })
                }
            </Slider>
        </div >
    )
}

export default Avatar1
