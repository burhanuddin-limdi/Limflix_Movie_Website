import { SwiperOptions } from "swiper";

export const config:SwiperOptions={
    slidesPerView:3,
    spaceBetween:6,
    slidesPerGroup:2,
    navigation:true,
    pagination:{
        type:'progressbar'
    },
    freeMode:true,
    breakpoints:{
        1000:{
            slidesPerView:8,
    slidesPerGroup:4,

        },
        800:{
            slidesPerView:7,
    slidesPerGroup:4,

        },
        600:{
            slidesPerView:6,
    slidesPerGroup:4,

        },
        400:{
            slidesPerView:4,
            spaceBetween:8,
    slidesPerGroup:3
        }
        
    }
}