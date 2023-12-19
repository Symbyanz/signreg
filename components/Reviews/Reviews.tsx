import './Reviews.scss'
import Heading from '../Heading/Heading'
import SliderReviews from '../Slider/SliderReviews'
import { reviewList } from '@/app/storage'

const Reviews = () => {
    return (
        <section className='reviews section'>
            <div className='reviews__content container'>
                <Heading className='reviews__title' tag='h2'>Отзывы наших клиентов</Heading>
                <SliderReviews className='reviews__slider' slides={reviewList} />
            </div>
        </section>
    )
}

export default Reviews