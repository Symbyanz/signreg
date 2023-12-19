import './Author.scss'
import Image from 'next/image'
import SubHeading from '../SubHeading/SubHeading'
import Paragraph from '../Paragraph/Paragraph'

interface Props {
  className?: string
  imageUrl?: string
  imageAlt?: string
  title: string
  subtitle?: string
}

const Author = ({ className, imageUrl = '/images/reviews/avatar.svg', imageAlt, title, subtitle }: Props) => {
  const classes = className ? ('author ' + className) : 'author';
  return (
    <div className={classes}>
      <div className="author__image">
        <Image src={imageUrl} width={64} height={64} alt={imageAlt ? imageAlt : title} quality={75} />
      </div>
      <div className="author__content">
        <SubHeading className='author__title' size='large'>{title}</SubHeading>
        <Paragraph className='author__subtitle' size='super-small'>{subtitle}</Paragraph>
      </div>
    </div>
  )
}

export default Author