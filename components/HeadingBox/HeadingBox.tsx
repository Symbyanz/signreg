import Heading from '../Heading/Heading'
import SubHeading from '../SubHeading/SubHeading'
import './HeadingBox.scss'

interface Props {
    title: string
    subtitle: string
    className?: string
    type?: 'align-center' | 'align-left' | 'line'
    isFirstComponent?: boolean
}


const HeadingBox = ({ className, title, subtitle, type = 'align-center', isFirstComponent = false }: Props) => {
    let classes = className ? ('heading-box ' + className) : 'heading-box';
    const tag = isFirstComponent ? 'h1' : 'h2';

    switch (type) {
        case ('line'):
            classes += ' heading-box_line'
            return (
                <div className={classes}>
                    <Heading className='heading-box__title services__title' tag={tag}>{title}</Heading>
                    <div className='heading-box__line'></div>
                    <SubHeading className='heading-box__subtitle'>{subtitle}</SubHeading>
                </div>
            )
        case ('align-left'):
            classes += ' heading-box_align-left'
            return (
                <div className={classes}>
                    <Heading className='heading-box__title services__title' tag={tag}>{title}</Heading>
                    <SubHeading className='heading-box__subtitle'>{subtitle}</SubHeading>
                </div>
            )
        default:
            return (
                <div className={classes}>
                    <Heading className='heading-box__title services__title' tag={tag}>{title}</Heading>
                    <SubHeading className='heading-box__subtitle'>{subtitle}</SubHeading>
                </div>
            )

    }
}

export default HeadingBox