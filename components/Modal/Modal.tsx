'use client'
import './Modal.scss'
import FormModal from '../Form/FormModal';
import { useEffect } from 'react';

const Modal = () => {
    const handleClick = () => {
        const modal = document.querySelector('.modal_callback');
        document.body.classList.remove('no-scroll')
        modal && modal.classList.remove('modal_active')
    }
    useEffect(() => {
        window.addEventListener('click', (e: any) => {
            const modal = document.querySelector('.modal_callback');
            if (modal && e.target.classList.contains('button_callback')) {
                document.body.classList.add('no-scroll')
                modal.classList.add('modal_active')
            }
        })
    }, [])
    return (
        <div className='modal modal_callback'>
            <div className='modal__overlay'></div>
            <div className='modal__container' onClick={(e) => { (e.target as HTMLDivElement).className === 'modal__container' && handleClick() }}>
                <div className='modal__content'>
                    <FormModal formId='form-modal'></FormModal>
                    <button className='modal__close' aria-label='Закрыть' onClick={() => handleClick()}><span></span></button>
                </div>
            </div>
        </div>
    )
}


export default Modal