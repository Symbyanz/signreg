import './Card.scss'
import Link from 'next/link'
import Image from 'next/image'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import SubHeading from '../SubHeading/SubHeading'


interface Props {
    title: string
    url: string
    imageUrl: string
    description?: string
    imageAlt?: string
    className?: string
    type?: 'primary' | 'secondary' | 'boxed'
}

const ArrowIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="6" viewBox="0 0 18 6" width="18"><path d="M18 3L13 0.113249V5.88675L18 3ZM0 3.5H13.5V2.5H0V3.5Z" /></svg>
    )
}

const Card = ({ title, description, url, imageUrl, imageAlt, className, type = 'primary' }: Props) => {
    let classes = className ? ('card ' + className) : 'card';
    switch (type) {
        case 'primary':
            classes += ' card_primary'
            return (
                <Link className={classes} href={url}>
                    <div className='card__content'>
                        <div className="card__top">
                            <Heading className='card__title' size='small' tag='p'>{title}</Heading>
                        </div>
                        <div className="card__bottom">
                            <div className="card__text">
                                {description && <Paragraph className='card__description' size='small'>{description}</Paragraph>}
                                <div className='card__action'>Перейти <span className='card__arrow'><ArrowIcon /></span></div>
                            </div>
                            <div className="card__image">
                                <Image src={imageUrl} quality={75} fill={true} alt={imageAlt ? imageAlt : title} />
                            </div>
                        </div>
                    </div>
                </Link>
            )
        case 'secondary':
            classes += ' card_secondary'
            return (
                <Link className={classes} href={url}>
                    <div className="card__content">
                        <div className="card__text">
                            <Heading className='card__title' size='small' tag='p'>{title}</Heading>
                            {description && <Paragraph className='card__description' size='small'>{description}</Paragraph>}
                            <div className='card__action'>Узнать больше <span className='card__arrow'><ArrowIcon /></span></div>
                        </div>
                        <div className="card__image">
                            <Image src={imageUrl} quality={75} fill={true} alt={imageAlt ? imageAlt : title} />
                        </div>
                    </div>
                </Link>
            )
        case 'boxed':
            classes += ' card_boxed'
            return (
                <Link className={classes} href={url}>
                    <div className="card__content">
                        <div className="card__image">
                            <Image src={imageUrl} quality={75} fill={true} alt={imageAlt ? imageAlt : title} />
                        </div>
                        <div className="card__text">
                            <SubHeading className='card__title' size='large' tag='p'>{title}</SubHeading>
                        </div>
                        <div className="card__line"></div>
                    </div>
                </Link>
            )
        default:
            return false;
    }

}

export default Card