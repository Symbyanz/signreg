import './Breadcrumbs.scss'
import { BreadcrumbsProps } from './Breadcrumbs.d'
import Link from 'next/link'
import Paragraph from '../Paragraph/Paragraph'



const ArrowIcon = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
  )
}

const Breadcrumbs = ({ className, items }: BreadcrumbsProps) => {
  const classes = className ? ('breadcrumbs ' + className) : 'breadcrumbs';
  return (
    <nav className={classes} aria-label='breadcrumb'>
      <ol className='breadcrumbs__list'>
        {items.map((item, i) => {
          const isLastItem = i === items.length - 1;
          if (!isLastItem) {
            return (
              <li className='breadcrumbs__item' key={item.title}>
                <Link className='breadcrumbs__link' href={item.url}>{item.title}</Link>
                <div className='breadcrumbs__separator' aria-hidden='true'>
                  <ArrowIcon />
                </div>
              </li>
            )
          } else {
            return (
              <li className='breadcrumbs__item' key={item.title}>
                <Paragraph className='breadcrumbs__link breadcrumbs__link_active' size='small'>{item.title}</Paragraph>
              </li>
            )
          }
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs