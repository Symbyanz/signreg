import Link from 'next/link'
import './Button.scss'
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance?: 'primary' | 'secondary';
    size?: 'large' | 'medium' | 'small';
    href?: string;
}


const Button = ({ href, appearance, size, children, className, ...props }: Props) => {
    let classes = className ? className + ' button' : 'button';
    switch (appearance) {
        case ('secondary'):
            classes += ' button_secondary';
            break;
        default:
            classes += ' button_primary';
    }
    switch (size) {
        case ('large'):
            classes += ' button_large';
            break;
        case ('small'):
            classes += ' button_small';
            break;
        default:
            classes += ' button_medium';
            break;
    }

    if (href) return <Link href={href} className={classes}>{children}</Link>
    return <button className={classes} {...props}>{children}</button>
}

export default Button