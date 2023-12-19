import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import './Paragraph.scss'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode
    className?: string
    size?: 'medium' | 'small' | 'super-small'
}

const Paragraph = ({ className, children, size, ...props }: Props) => {
    let classes = className ? ('paragraph ' + className) : 'paragraph';
    switch (size) {
        case ('small'):
            classes += ' paragraph_small';
            break;
        case ('super-small'):
            classes += ' paragraph_super-small';
            break;
        default:
            classes += ' paragraph_medium';
    }
    return (
        <p className={classes} {...props}>{children}</p>
    )
}

export default Paragraph