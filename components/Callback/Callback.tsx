import Button from '../Button/Button'
import Paragraph from '../Paragraph/Paragraph'
import SubHeading from '../SubHeading/SubHeading'
import './Callback.scss'

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

const Callback = ({ className }: { className?: string }) => {
    const classes = className ? 'callback ' + className : 'callback'
    return (
        <div className={classes}>
            <div className="callback__content">
                <div className="callback__box">
                    <div className="callback__column callback__column_button">
                        <Button className='callback__button' size='large'>Консультация</Button>
                    </div>
                    <div className="callback__column callback__column_info">
                        <SubHeading className='callback__description' size='large'>Звоните по телефону горячей линии:</SubHeading>
                    </div>
                    <div className="callback__column callback__column_number">
                        <div className="callback__icon">
                            <PhoneIcon />
                        </div>
                        <SubHeading className='callback__number'>+7 (704) 555-0127</SubHeading>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Callback