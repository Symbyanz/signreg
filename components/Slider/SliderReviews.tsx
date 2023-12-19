'use client'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import SliderNavigation from './SliderNavigation'
import Review from '../Review/Review'

interface SliderProps {
  className?: string,
  slides: any[],
}

interface SlideProps {
  _id: string
  name: string
  post: string
  review: string
  stars?: 1 | 2 | 3 | 4 | 5
  imageUrl?: string
}

const SliderReviews = ({ className, slides }: SliderProps) => {
  const classes = className ? ('slider slider_reviews ' + className) : 'slider slider_reviews'
  const swiperRef = useRef<SwiperType | null>(null)
  const sliderOptions: SwiperProps = {
    slidesPerView: 'auto',
    loop: true,
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      881: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1121: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1481: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    },
    onInit: (swiper) => { swiperRef.current = swiper }
  }
  return (
    <>
      <Swiper className={classes} {...sliderOptions}>
        {slides.map((slide: SlideProps) => {
          return (
            <SwiperSlide key={slide._id}>
              <Review name={slide.name} post={slide.post} review={slide.review} stars={slide.stars} imageUrl={slide.imageUrl} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <SliderNavigation swiperRef={swiperRef} />
    </>
  )
}

export default SliderReviews