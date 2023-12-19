import { DetailedHTMLProps, HTMLAttributes } from 'react'
import './RichWrapper.scss'

const RichWrapper = ({ className, children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const classes = className ? ('rich-wrapper ' + className) : 'rich-wrapper';
    return (
        <div className={classes} {...props}>
            {children}
        </div>
    )
}

export default RichWrapper