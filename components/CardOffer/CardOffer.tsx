import { DetailedHTMLProps, HTMLAttributes } from 'react'
import Image from 'next/image'
import './CardOffer.scss'

interface CardOfferProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    imageUrl: string
    imageAlt?: string
}

const CardOffer = ({ className, children, imageUrl, imageAlt = 'Изобржание оффера' }: CardOfferProps) => {
    const classes = className ? ('card-offer ' + className) : 'card-offer'
    return (
        <article className={classes}>
            <div className="card-offer__content">
                {children}
            </div>
            <div className="card-offer__image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        </article>
    )
}


export default CardOffer