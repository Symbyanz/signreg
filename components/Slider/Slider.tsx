'use client'
import './Slider.scss'
import SliderProjects from './SliderProjects'
import SliderReviews from './SliderReviews'
import SliderServices from './SliderServices'

interface SliderProps {
    className?: string,
    slides: SlideProps[],
    type?: 'reviews' | 'projects' | 'services',
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
// не стоит использовать
const Slider = ({ className, slides, type }: SliderProps) => {
    switch (type) {
        case 'reviews':
            return <SliderReviews className={className} slides={slides} />
        case 'projects':
            return <SliderProjects className={className} slides={slides} />
        case 'services':
            return <SliderServices className={className} slides={slides} />
        default:
            return <SliderServices className={className} slides={slides} />
    }
}

export default Slider