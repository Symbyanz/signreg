import './GetThere.scss'
import Image from 'next/image'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import SubHeading from '../SubHeading/SubHeading'
import { data } from './data'

const LocationIcon = () => {
    return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 23.9985C25.1 23.9985 26.0417 23.6069 26.825 22.8235C27.6083 22.0402 28 21.0985 28 19.9985C28 18.8985 27.6083 17.9569 26.825 17.1735C26.0417 16.3902 25.1 15.9985 24 15.9985C22.9 15.9985 21.9583 16.3902 21.175 17.1735C20.3917 17.9569 20 18.8985 20 19.9985C20 21.0985 20.3917 22.0402 21.175 22.8235C21.9583 23.6069 22.9 23.9985 24 23.9985ZM24 38.6985C28.0667 34.9652 31.0833 31.5735 33.05 28.5235C35.0167 25.4735 36 22.7652 36 20.3985C36 16.7652 34.8417 13.7902 32.525 11.4735C30.2083 9.15687 27.3667 7.99854 24 7.99854C20.6333 7.99854 17.7917 9.15687 15.475 11.4735C13.1583 13.7902 12 16.7652 12 20.3985C12 22.7652 12.9833 25.4735 14.95 28.5235C16.9167 31.5735 19.9333 34.9652 24 38.6985ZM24 43.9985C18.6333 39.4319 14.625 35.1902 11.975 31.2735C9.325 27.3569 8 23.7319 8 20.3985C8 15.3985 9.60833 11.4152 12.825 8.44854C16.0417 5.48187 19.7667 3.99854 24 3.99854C28.2333 3.99854 31.9583 5.48187 35.175 8.44854C38.3917 11.4152 40 15.3985 40 20.3985C40 23.7319 38.675 27.3569 36.025 31.2735C33.375 35.1902 29.3667 39.4319 24 43.9985Z" fill="url(#paint0_linear_157_162)" />
            <defs>
                <linearGradient id="paint0_linear_157_162" x1="24" y1="3.99854" x2="24" y2="43.9985" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2626FF" />
                    <stop offset="0.0001" stopColor="#7373FF" />
                    <stop offset="1" stopColor="#2626FF" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const PhoneIcon = () => {
    return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.9 41.9985C35.7333 41.9985 31.6167 41.0902 27.55 39.2735C23.4833 37.4569 19.7833 34.8819 16.45 31.5485C13.1167 28.2152 10.5417 24.5152 8.725 20.4485C6.90833 16.3819 6 12.2652 6 8.09854C6 7.49854 6.2 6.99854 6.6 6.59854C7 6.19854 7.5 5.99854 8.1 5.99854H16.2C16.6667 5.99854 17.0833 6.15687 17.45 6.47354C17.8167 6.7902 18.0333 7.1652 18.1 7.59854L19.4 14.5985C19.4667 15.1319 19.45 15.5819 19.35 15.9485C19.25 16.3152 19.0667 16.6319 18.8 16.8985L13.95 21.7985C14.6167 23.0319 15.4083 24.2235 16.325 25.3735C17.2417 26.5235 18.25 27.6319 19.35 28.6985C20.3833 29.7319 21.4667 30.6902 22.6 31.5735C23.7333 32.4569 24.9333 33.2652 26.2 33.9985L30.9 29.2985C31.2 28.9985 31.5917 28.7735 32.075 28.6235C32.5583 28.4735 33.0333 28.4319 33.5 28.4985L40.4 29.8985C40.8667 30.0319 41.25 30.2735 41.55 30.6235C41.85 30.9735 42 31.3652 42 31.7985V39.8985C42 40.4985 41.8 40.9985 41.4 41.3985C41 41.7985 40.5 41.9985 39.9 41.9985ZM12.05 17.9985L15.35 14.6985L14.5 9.99854H10.05C10.2167 11.3652 10.45 12.7152 10.75 14.0485C11.05 15.3819 11.4833 16.6985 12.05 17.9985ZM29.95 35.8985C31.25 36.4652 32.575 36.9152 33.925 37.2485C35.275 37.5819 36.6333 37.7985 38 37.8985V33.4985L33.3 32.5485L29.95 35.8985Z" fill="url(#paint0_linear_157_171)" />
            <defs>
                <linearGradient id="paint0_linear_157_171" x1="24" y1="5.99854" x2="24" y2="41.9985" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7373FF" />
                    <stop offset="1" stopColor="#2626FF" />
                </linearGradient>
            </defs>
        </svg>

    )
}


const GetThere = ({ className }: { className?: string }) => {
    const classes = className ? 'get-there ' + className : 'get-there'
    return (
        <section className='section'>
            <div className='container'>
                <div className={classes}>
                    <div className='get-there__content'>
                        <Heading className='get-there__title' tag='h2'>Приходите к нам в офис</Heading>
                        <div className="get-there__box">
                            <div className="get-there__column">
                                <div className="get-there__icon">
                                    <LocationIcon />
                                </div>
                                <div className="get-there__text">
                                    <SubHeading className='get-there__subtitle' size='large'>{data.address.title}</SubHeading>
                                    <Paragraph size='super-small'>{data.address.desc}</Paragraph>
                                </div>
                            </div>
                            <div className="get-there__column">
                                <div className="get-there__icon">
                                    <PhoneIcon />
                                </div>
                                <div className="get-there__text">
                                    <SubHeading className='get-there__subtitle' size='large'>{data.phone.title}</SubHeading>
                                    <div>
                                        <Paragraph size='super-small'>{data.phone.desc[0]}</Paragraph>
                                        <Paragraph size='super-small'>{data.phone.desc[1]}</Paragraph>
                                    </div>
                                </div>
                            </div>
                            <div className="get-there__column get-there__column_image">
                                <div className="get-there__image">
                                    <Image src='/images/amico.svg' fill={true} alt='Монитор с документами' />
                                </div>
                            </div>
                            <div className="get-there__column get-there__column_button">
                                <Button className='get-there__button' size='large'>Обратный звонок</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetThere