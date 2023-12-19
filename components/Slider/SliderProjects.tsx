'use client'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import SliderNavigation from './SliderNavigation'
import Card from '../Card/Card'

interface SliderProps {
  className?: string,
  slides: SlideProps[],
}

interface SlideProps {
  _id: string,
  title: string
  description: string
  url: string
  imageUrl: string
  imageAlt?: string
  className?: string
}

const SliderProjects = ({ className, slides }: SliderProps) => {
  const classes = className ? ('slider slider_projects ' + className) : 'slider slider_projects'
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
        slidesPerView: 3,
        spaceBetween: 20
      },
      1481: {
        slidesPerView: 3,
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
              <Card url={slide.url} title={slide.title} description={slide.description} imageUrl={slide.imageUrl} imageAlt={slide.imageAlt} type='secondary'/>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <SliderNavigation swiperRef={swiperRef} />
    </>
  )
}

export default SliderProjects