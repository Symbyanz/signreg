import './Review.scss'
import Author from '../Author/Author'
import Paragraph from '../Paragraph/Paragraph'
import StarEmptyIcon from './star-empty.svg'
import StarFilledIcon from './star-filled.svg'

interface Props {
    className?: string
    name: string
    post: string
    review: string
    stars?: 1 | 2 | 3 | 4 | 5
    imageUrl?: string
    imageAlt?: string
}



const Stars = ({ count }: { count: 1 | 2 | 3 | 4 | 5 }) => {
    const elements = new Array(5);
    for (let i = 0; i < 5; i++) {
        elements[i] = count > i ? <StarFilledIcon key={i} /> : <StarEmptyIcon key={i} />
    }
    return (
        <div className='review__stars'>
            {elements}
        </div>
    )
}

const Review = ({ className, name, post, review, stars = 5, imageUrl = '', imageAlt }: Props) => {
    const classes = className ? ('review ' + className) : 'review';
    return (
        <div className={classes}>
            <div className='review__content'>
                <div className='review__top'>
                    <Author imageUrl={imageUrl} imageAlt={imageAlt ? imageAlt : name} title={name} subtitle={post} />
                    <Stars count={stars} />
                </div>
                <div className='review__bottom'>
                    <Paragraph className='review__text' size='small'>{review}</Paragraph>
                </div>
            </div>
        </div>
    )
}

export default Review