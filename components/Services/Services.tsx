import HeadingBox from '../HeadingBox/HeadingBox'
import SliderServices from '../Slider/SliderServices'
import { servicesList } from '@/app/storage'

const Services = () => {
    return (
        <section className='services section'>
            <div className='services__content container'>
                <HeadingBox className='services__heading-box' title='Профессиональные Юридические&nbsp;Услуги' subtitle='Наши юристы – ваш надежный партнер для успешного разрешения юридических вопросов' type='line' />
                <SliderServices className='services__slider' slides={servicesList} />
            </div>
        </section>
    )
}

export default Services