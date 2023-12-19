'use client'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import SwiperInit from 'swiper'
import { useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
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

const SliderServices = ({ className, slides }: SliderProps) => {
  const classes = className ? ('slider slider_services ' + className) : 'slider slider_services'
  const swiperRef = useRef<SwiperType | null>(null)
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const sliderOptions: SwiperProps = {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 12,
    onInit: (swiper) => { swiperRef.current = swiper }
  }

  useEffect(() => {
    if (!isMobile && !swiperRef.current?.destroyed) {
      swiperRef.current?.destroy(true, true);
    } else if (swiperRef.current?.destroyed) {
      swiperRef.current = new SwiperInit('.slider_services', sliderOptions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile])


  return (
    <Swiper className={classes} {...sliderOptions}>
      {slides.map((slide: SlideProps) => {
        return (
          <SwiperSlide key={slide._id}>
            <Card url={slide.url} title={slide.title} description={slide.description} imageUrl={slide.imageUrl} imageAlt={slide.imageAlt} />
          </SwiperSlide>
        )
      })}
      <SliderNavigation swiperRef={swiperRef} />
    </Swiper>
  )
}

export default SliderServices