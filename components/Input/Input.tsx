import { DetailedHTMLProps, ForwardedRef, HTMLAttributes, forwardRef } from 'react'
import './Input.scss'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

const Input = forwardRef(({ className, ...props }: Props, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const classes = className ? 'input ' + className : 'input'
    return (
        <input className={classes} {...props} ref={ref} />
    )
})

Input.displayName = 'Input'
export default Input