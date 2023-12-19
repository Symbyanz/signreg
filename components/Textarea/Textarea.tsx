import { DetailedHTMLProps, ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react'
import './Textarea.scss'

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
}

const Textarea = forwardRef(({ className, ...props }: Props, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    const classes = className ? 'textarea ' + className : 'textarea'
    return (
        <textarea className={classes} {...props} ref={ref}/>
    )
})

Textarea.displayName = 'Textarea'
export default Textarea