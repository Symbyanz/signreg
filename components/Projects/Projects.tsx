import './Projects.scss'
import Heading from '../Heading/Heading'
import SliderProjects from '../Slider/SliderProjects'
import { projectsList } from '@/app/storage'

const Projects = () => {
    return (
        <section className='projects section'>
            <div className='projects__content container'>
                <Heading className='projects__title' tag='h2'>Последние проекты</Heading>
                <SliderProjects className='projects__slider' slides={projectsList} />
            </div>
        </section>
    )
}

export default Projects