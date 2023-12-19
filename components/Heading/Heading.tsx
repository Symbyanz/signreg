import { ReactNode } from 'react';
import './Heading.scss'

interface Props {
    children: ReactNode
    className?: string
    size?: 'large' | 'medium' | 'small'
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
}

const Heading = ({ className, tag, children, size }: Props) => {
    let classes = className ? ('title ' + className) : 'title';
    switch (size) {
        case ('large'):
            classes += ' title_large';
            break;
        case ('small'):
            classes += ' title_small';
            break;
        default:
            classes += ' title_medium';
    }

    switch (tag) {
        case 'h1':
            return <h1 className={classes}>{children}</h1>
        case 'h2':
            return <h2 className={classes}>{children}</h2>
        case 'h3':
            return <h3 className={classes}>{children}</h3>
        case 'h4':
            return <h4 className={classes}>{children}</h4>
        case 'p':
            return <p className={classes}>{children}</p>
        default:
            return <h2 className={classes}>{children}</h2>
    }
}

export default Heading