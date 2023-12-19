import './IconBoxContainer.scss'
import IconBox from './IconBox'

interface Props {
    className?: string
    items: Advantage[]
}

interface Advantage {
    icon: any
    title: string
    desc?: string
}

const IconBoxContainer = ({ className, items }: Props) => {
    const classes = className ? 'item-box-container ' + className : 'item-box-container';
    return (
        <div className={classes}>
            {items.map((item, index) => <div key={index} className="item-box-container__item"><IconBox {...item} /></div>)}
        </div>
    )
}

export default IconBoxContainer