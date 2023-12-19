import GetThere from '@/components/GetThere/GetThere'
import Contacts from '@/components/Contacts/Contacts'

const breadcrumbs = [
  {
    title: 'Главная',
    url: '/'
  },
  {
    title: 'Контакты',
    url: '/contacts'
  },
]

export default function ContactsPage() {
  return (
    <div id='contacts'>
      <Contacts breadcrumbs={breadcrumbs} />
      <GetThere />
    </div>
  )
}
