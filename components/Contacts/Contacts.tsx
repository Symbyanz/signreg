import './Contacts.scss'
import { BreadcrumbProps } from '../Breadcrumbs/Breadcrumbs.d'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Heading from '../Heading/Heading'
import Form from '../Form/Form'
import Map from '@/components/Map/Map'

interface Props {
    breadcrumbs: BreadcrumbProps[]
}
const Contacts = ({ breadcrumbs }: Props) => {
    return (
        <section className='contacts section'>
            <div className='contacts__content container'>
                <Breadcrumbs className='contacts__breadcrumbs' items={breadcrumbs} />
                <Heading className='contacts__title' tag='h1'>Контакты</Heading>
                <div className='contacts__box'>
                    <div className='contacts__column'>
                        <Form className='contacts__form' formId='contacts' />
                    </div>
                    <div className='contacts__column'>
                        <Map className='contacts__map' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts