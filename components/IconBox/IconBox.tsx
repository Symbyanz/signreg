import Image from 'next/image'
import './IconBox.scss'
import Paragraph from '../Paragraph/Paragraph'
import SubHeading from '../SubHeading/SubHeading'
interface Props {
    className?: string
    icon: any
    title: string
    desc?: string
}

const IconBox = ({ className, title, icon, desc }: Props) => {
    const classes = className ? 'icon-box ' + className : 'icon-box';
    return (
        <div className={classes}>
            <div className="icon-box__image">
                <Image src={icon} fill={true} alt={title} />
            </div>
            <SubHeading className='icon-box__title' size='large' tag='p'>{title}</SubHeading>
            {desc && <Paragraph className='icon-box__description' size='medium'>{desc}</Paragraph>}
        </div>
    )
}

export default IconBox