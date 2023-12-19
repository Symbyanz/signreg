import Paragraph from '../Paragraph/Paragraph';
import './Checkbox.scss'
import { DetailedHTMLProps, ForwardedRef, HTMLAttributes, forwardRef, useState } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string,
    checked?: boolean
}
const Checkbox = forwardRef(({ className, label, checked = true, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked)
    const classes = className ? 'checkbox ' + className : 'checkbox'
    return (
        <div className={classes}>
            <label className='checkbox__content'>
                <input type='checkbox' checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} className={isChecked ? 'checked' : ''} ref={ref} />
            </label>
            {label && <Paragraph className='checkbox__label' size='super-small'>{label}</Paragraph>}
        </div>
    )
})

Checkbox.displayName = 'Checkbox'
export default Checkbox