import './InteractionProcess.scss'
import './InteractionProcessMini.scss'
import Image from 'next/image'
import SubHeading from '../SubHeading/SubHeading'


const InteractionProcessMini = () => {
    return (
        <div className="interactoin-process interactoin-process_mini">
            <div className="interactoin-process__content">
                <ul className="interactoin-process__list">
                    <li className="interactoin-process__item interactoin-process-item">
                        <div className="interactoin-process-item__image">
                            <Image src='/images/process1.svg' fill={true} alt={'Бесплатная консультация'} />
                        </div>
                        <SubHeading className='interactoin-process-item__title' size='medium'>Бесплатная консультация</SubHeading>
                    </li>
                    <li className="interactoin-process__item interactoin-process-item">
                        <div className="interactoin-process-item__image">
                            <Image src='/images/process2.svg' fill={true} alt={'Заключение соглашения'} />
                        </div>
                        <SubHeading className='interactoin-process-item__title' size='medium'>Заключение соглашения</SubHeading>
                    </li>
                    <li className="interactoin-process__item interactoin-process-item">
                        <div className="interactoin-process-item__image">
                            <Image src='/images/process3.svg' fill={true} alt={'Работа юристов'} />
                        </div>
                        <SubHeading className='interactoin-process-item__title' size='medium'>Работа юристов</SubHeading>
                    </li>
                    <li className="interactoin-process__item interactoin-process-item">
                        <div className="interactoin-process-item__image">
                            <Image src='/images/process4.svg' fill={true} alt={'Результат для клиента'} />
                        </div>
                        <SubHeading className='interactoin-process-item__title' size='medium'>Результат для клиента</SubHeading>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default InteractionProcessMini