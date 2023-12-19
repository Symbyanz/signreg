import { ReactNode } from 'react';
import './SubHeading.scss'

interface Props {
    children: ReactNode
    className?: string
    size?: 'large' | 'medium' | 'small'
    tag?: 'h2' | 'h3' | 'h4' | 'p'
}

const SubHeading = ({ className, tag, children, size }: Props) => {
    let classes = className ? (className + ' subtitle') : 'subtitle';
    switch (size) {
        case ('large'):
            classes += ' subtitle_large';
            break;
        case ('small'):
            classes += ' subtitle_small';
            break;
        default:
            classes += ' subtitle_medium';
    }
    
    switch (tag) {
        case 'h2':
            return <h2 className={classes}>{children}</h2>
        case 'h3':
            return <h3 className={classes}>{children}</h3>
        case 'h4':
            return <h4 className={classes}>{children}</h4>
        default:
            return <p className={classes}>{children}</p>
    }
}

export default SubHeading