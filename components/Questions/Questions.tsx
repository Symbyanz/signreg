import HeadingBox from '../HeadingBox/HeadingBox'
import Accordion from '../Accordion/Accordion'
import { questionList } from '@/app/storage'

const Questions = () => {
    return (
        <section className='questions section'>
            <div className='questions__content container'>
                <HeadingBox className='questions__heading-box' title='Часто задаваемые вопросы' subtitle='Ответы на распространенные юридические вопросы в простой форме' type='line' />
                <Accordion className='questions__accordion' items={questionList} columns={2} />
            </div>
        </section>
    )
}

export default Questions