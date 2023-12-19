import './InteractionProcess.scss'
import Image from 'next/image'
import HeadingBox from '../HeadingBox/HeadingBox'
import SubHeading from '../SubHeading/SubHeading'


interface InteractionProcessProps {
    type?: 'align-center' | 'align-left' | 'line'
}

const InteractionProcess = ({ type = 'align-center' }: InteractionProcessProps) => {
    return (
        <section className="interactoin-process section">
            <div className="interactoin-process__content container">
                <HeadingBox className='interactoin-process__heading-box' title='Процесс оказания услуг' subtitle='От первичной консультации до успешного разрешения дела' type={type} />
                <ul className="interactoin-process__list">
                    <li className="interactoin-process__item interactoin-process-item">
                        <div className="interactoin-process-item__image">
                            <Image src='/images/process1.svg' fill={true} alt={'Бесплатная консультация'} />
                        </div>
                        <SubHeading className='interactoin-process-item__title' size='large'>Бесплатная консультация</SubHeading>
                    </li>
                    <li className="interactoin-process__item interactoin-process-item">
                        <div className="interactoin-process-item__image">
                            <Image src='/images/process2.svg' fill={true} alt={'Заключение соглашения'} />
                        </div>
                        <SubHeading className='interactoin-process-item__title' size='large'>Заключение соглашения</SubHeading>
                    </li>
                    <li className="interactoin-process__item interactoin-process-item">
                        <div className="interactoin-process-item__image">
                            <Image src='/images/process3.svg' fill={true} alt={'Работа юристов'} />
                        </div>
                        <SubHeading className='interactoin-process-item__title' size='large'>Работа юристов</SubHeading>
                    </li>
                    <li className="interactoin-process__item interactoin-process-item">
                        <div className="interactoin-process-item__image">
                            <Image src='/images/process4.svg' fill={true} alt={'Результат для клиента'} />
                        </div>
                        <SubHeading className='interactoin-process-item__title' size='large'>Результат для клиента</SubHeading>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default InteractionProcess