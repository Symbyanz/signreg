'use client'
import './Hero.scss'
import Image from 'next/image'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import Button from '../Button/Button'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

interface Props {
    className?: string
    title: string
    description: Description[]
    imageUrl: string
    imageAlt?: string
    buttonText?: string
    href?: string
    type?: string
    reversed?: boolean
    breadcrumbs?: Breadcrumb[]
    isFirstComponent?: boolean
}

interface Description {
    _id: number
    content: string
}

interface PropsImage {
    imageUrl: string
    imageAlt: string
    priority: boolean
}

interface Breadcrumb {
    title: string
    url: string
}

const HeroImage = ({ imageUrl, imageAlt, priority }: PropsImage) => {
    return <Image src={imageUrl} quality={75} fill={true} priority={priority} alt={imageAlt} />
}

const Hero = ({ className, title, description, imageUrl, imageAlt, buttonText, href, reversed, breadcrumbs, isFirstComponent = false }: Props) => {
    const isMainPage = className && (/hero_special/.test(className)) ? true : false;
    let classes = className ? 'hero ' + className : 'hero';
    return (
        <section className={classes}>
            <div className={reversed ? 'hero__content hero__content_relaction container' : 'hero__content container'}>
                <div className='hero__text'>
                    {breadcrumbs && <Breadcrumbs className='hero__breadcrumbs' items={breadcrumbs} />}
                    <Heading className='hero__title' size={isMainPage ? 'large' : 'medium'} tag={isMainPage || isFirstComponent ? 'h1' : 'h2'}>{title}</Heading>
                    <div className='hero__image hero__image_mobile'>
                        <HeroImage imageUrl={imageUrl} imageAlt={imageAlt ? imageAlt : title} priority={isMainPage || isFirstComponent} />
                    </div>
                    <div className="hero__description">
                        {description.map(item => <Paragraph key={item._id}>{item.content}</Paragraph>)}
                    </div>
                    {buttonText && <Button href={href} className='hero__button' size='large'>{buttonText}</Button>}
                </div>
                <div className='hero__image hero__image_desktop'>
                    <HeroImage imageUrl={imageUrl} imageAlt={imageAlt ? imageAlt : title} priority={isMainPage || isFirstComponent} />
                </div>
            </div>
        </section>
    )
}

export default Hero