'use client'
import './Form.scss'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Paragraph from '../Paragraph/Paragraph'
import SuccessIcon from './success.svg'
import { useForm } from 'react-hook-form'
import HeadingBox from '../HeadingBox/HeadingBox'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    formId: string
}

interface FormData {
    email?: string
    phone?: string
    content?: string
    agreement?: boolean
}



const FormModal = ({ className, formId, ...props }: Props) => {
    const classes = className ? 'form ' + className : 'form'
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch("/api", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData['message'])
            alert('Сообщение успешно отправлено');
        } catch (err) {
            console.error(err);
            alert("Ошибка, пожалуйста попробуйте отправить сообщение повторно");
        }
    }
    return (
        <form className={classes} onSubmit={handleSubmit(onSubmit)}>
            <div className='form__field'>
                <HeadingBox className='form__heading-box' title='Обратная связь' subtitle='Оставьте заявку и наш менеджер свяжется с вами в ближайшее время' type='align-left'/>
            </div>
            <div className='form__field'>
                <Input
                    inputMode='email'
                    className={errors.email && 'input_error'}
                    {...register('email', {
                        required: 'Обязательное поле',
                        pattern: { value: /\S+@\S+\.\S+/, message: 'Неверный формат email' }
                    })}
                    placeholder='Ваш email *'
                    aria-invalid={errors.email ? 'true' : 'false'} />
                {errors.email && <span className='form__field-error' role='alert'>{errors.email.message}</span>}
            </div>
            <div className='form__field'>
                <Input
                    inputMode='tel'
                    className={errors.phone && 'input_error'}
                    {...register('phone', {
                        required: 'Обязательное поле',
                        pattern: { value: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/, message: 'Неверный формат телефона' }
                    })}
                    placeholder='Ваш телефон *'
                    aria-invalid={errors.phone ? 'true' : 'false'} />
                {errors.phone && <span className='form__field-error' role='alert'>{errors.phone.message}</span>}
            </div>
            <div className='form__field'>
                <Paragraph className='checkbox__label' size='super-small' style={{padding: 0}}>Оставляя сообщение, вы соглашаетесь на обработку персональных данных.</Paragraph>
            </div>
            <div className='form__field'>
                <Button className='form__button' size='large'>Оставить заявку</Button>
            </div>
            <div className='form__success success'>
                <div className='success__image'>
                    <SuccessIcon />
                </div>
                <Paragraph className='success__text' size='super-small'>Сообщение отправлено!</Paragraph>
            </div>
        </form>

    )
}

export default FormModal