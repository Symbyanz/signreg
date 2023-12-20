import '@/components/Slider/Slider.scss'
import Hero from '@/components/Hero/Hero'
import Partners from '@/components/Partners/Partners'
import GetThere from '@/components/GetThere/GetThere'
import Reviews from '@/components/Reviews/Reviews'
import Projects from '@/components/Projects/Projects'
import Questions from '@/components/Questions/Questions'
import Services from '@/components/Services/Services'

export default function HomePage() {
  return (
    <div id='home'>
      <Hero
        className='hero_special'
        title='Лучшая Юридическая Консультация в Санкт&ndash;Петербурге'
        description={[{ _id: 0, content: 'Узкопрофильные специалисты по Всем отраслям права. Участие более чем в 5 000 процессах.' }]}
        buttonText='Узнать больше'
        href='#'
        imageUrl='/images/home-hero.svg'
      />
      <Partners title='Нам доверяют более 700 компаний:' />
      <Services />
      <Hero
        title='Создаем долгосрочные партнерства для вашего успеха'
        description={[
          { _id: 1, content: 'SignReg - это профессиональная юридическая компания, которая предоставляет широкий спектр услуг для бизнеса и частных лиц.' },
          { _id: 2, content: 'Мы стремимся к долгосрочным партнерствам, предлагая экспертную юридическую поддержку и решения для наших клиентов. Наш опыт и приверженность качеству позволяют нам успешно справляться с самыми сложными задачами в области юриспруденции.' }
        ]}
        buttonText='Больше о нашей компании'
        href='#'
        imageUrl='/images/about2.svg'
        reversed={true}
      />
      <Projects />
      <Hero
        title='Почему наши клиенты выбирают именно нас?'
        description={[
          { _id: 3, content: 'Наши клиенты выбирают нас благодаря многолетнему опыту, профессионализму и полному спектру юридических услуг, включая регистрацию, ликвидацию и сопровождение. Мы строим долгосрочные партнерства, гарантируя индивидуальный подход и конфиденциальность.' },
          { _id: 4, content: 'Наша репутация строится на принципах прозрачности и взаимного доверия. SignReg ориентирована на ваши успех и уверенность в будущем, предоставляя профессиональное обслуживание и индивидуальный подход. Решив работать с нами, вы выбираете надежного партнера, способного поддержать вас в юридической сфере.' }
        ]}
        buttonText='Связаться с нами'
        href='#'
        imageUrl='/images/about.svg'
      />
      <Reviews />
      <Questions />
      <GetThere />
    </div>
  )
}

