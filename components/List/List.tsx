import './List.scss'

interface Props {
    className?: string,
    type?: 'none' | 'disc' | 'decimal'
    size?: 'medium' | 'small'
    items: string[]
}
const List = ({ className, type = 'disc', items, size = 'medium' }: Props) => {
    const classes = className ? (`list list_${type} list_${size} ${className}`) : `list list_${type} list_${size}`;

    if (type === 'decimal') {
        return (
            <ol className={classes}>
                {items.map((el, i) => <li className='list__item' key={i}>{el}</li>)}
            </ol>
        )
    } else {
        return (
            <ul className={classes}>
                {items.map((el, i) => <li className='list__item' key={i}>{el}</li>)}
            </ul>
        )
    }
}

export default List