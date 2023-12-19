import { DetailedHTMLProps, HTMLAttributes } from 'react'
import Image from 'next/image'
import './TabFiller.scss'
import Heading from '@/components/Heading/Heading'
import SubHeading from '@/components/SubHeading/SubHeading'
import Paragraph from '@/components/Paragraph/Paragraph'
import Button from '@/components/Button/Button'

interface TabFillerPacketProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string
    subtitle?: string
    description: string[]
    button?: string
    price?: string
    imageUrl?: string
    imageAlt?: string
}

export const TabFillerPacket = ({ className, title, subtitle, description, button, price, imageUrl, imageAlt, ...props }: TabFillerPacketProps): JSX.Element => {
    const classes = className ? `tab-filler-packet ${className}` : 'tab-filler-packet '
    return (
        <div className={classes} {...props}>
            <div className='tab-filler-packet__content'>
                {
                    imageUrl &&
                    <div className='tab-filler-packet__image tab-filler-packet__image_mobile'>
                        <Image src={imageUrl} quality={75} fill={true} alt={imageAlt ? imageAlt : title} />
                    </div>
                }
                {
                    !subtitle
                        ? <Heading size='small' className='tab-filler-packet__title'>{title}</Heading>
                        : <div className='tab-filler-packet__heading-box'>
                            <Heading size='small'>{title}</Heading>
                            <SubHeading>{subtitle}</SubHeading>
                        </div>
                }
                <div className='tab-filler-packet__description'>
                    {description.map((el, i) => <Paragraph key={i}>{el}</Paragraph>)}
                </div>

                {
                    button &&
                    <div className='tab-filler-packet__button-with-text'>
                        <Button size='large'>{button}</Button>
                        {price && <span>{price}</span>}
                    </div>
                }
            </div>
            {
                imageUrl &&
                <div className='tab-filler-packet__image tab-filler-packet__image_desktop'>
                    <Image src={imageUrl} quality={75} fill={true} alt={imageAlt ? imageAlt : title} />
                </div>
            }
        </div>
    )
}
