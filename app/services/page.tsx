import './page.scss'
import '@/components/Slider/Slider.scss'
import SliderServices from "@/components/Slider/SliderServices";
import { servicesList } from "../storage";
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Heading from '@/components/Heading/Heading';
import GetThere from '@/components/GetThere/GetThere';
import InteractionProcess from '@/components/InteractionProcess/InteractionProcess';
import Reviews from '@/components/Reviews/Reviews';
import Questions from '@/components/Questions/Questions';

export default function ServicesPage() {
  const breadcrumbs = [
    {
      title: 'Главная',
      url: '/'
    },
    {
      title: 'Услуги',
      url: '/services'
    },
  ]

  return (
    <div id="services" className="content">
      {/* modified component Services */}
      <section className='services section'>
        <div className='services__content container'>
          <Breadcrumbs className='services__breadcrumbs' items={breadcrumbs}></Breadcrumbs>
          <Heading className='services__title' tag='h1'>Услуги</Heading>
          <SliderServices className='services__slider' slides={servicesList} />
        </div>
      </section>
      <InteractionProcess />
      <Reviews />
      <Questions />
      <GetThere />
    </div>
  )
}
