import { MutableRefObject } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import ArrowIcon from './arrow.svg'

interface Props {
    className?: string
    swiperRef: MutableRefObject<SwiperType | null>
}

const SliderNavigation = ({ className, swiperRef }: Props) => {
    const classes = className ? ('navigation ' + className) : 'navigation';
    return (
        <div className={classes}>
            <button className='navigation__prev-arrow' onClick={() => { if (!swiperRef.current || swiperRef.current.destroyed) return; swiperRef.current.slidePrev(); }}><ArrowIcon /></button>
            <button className='navigation__next-arrow' onClick={() => { if (!swiperRef.current || swiperRef.current.destroyed) return; swiperRef.current.slideNext(); }}><ArrowIcon /></button>
        </div>
    )
}

export default SliderNavigation