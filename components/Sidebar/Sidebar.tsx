import Link from 'next/link'
import Heading from '../Heading/Heading'
import './Sidebar.scss'

interface Props {
    className?: string
    type?: 'service' | 'blog'
    items?: MenuItem[]
}


interface MenuItem {
    label: string
    href: string
}

const SidebarItem = ({ item }: { item: MenuItem }) => {
    return (
        <li className='sidebar-menu-list__item'>
            <Link className='sidebar-menu-list__link' href={item.href}>{item.label}</Link>
        </li>
    )
}


const Sidebar = ({ className, type = 'service', items }: Props) => {
    const classes = className ? ('sidebar sidebar_' + type + ' ' + className) : ('sidebar sidebar_' + type)
    if (type === 'service') {
        return (
            <nav className={classes}>
                <div className="sidebar__content">
                    <Heading className='sidebar__title' tag='h2' size='small'>Похожие услуги</Heading>
                    <ul className="sidebar__list sidebar-menu-list">
                        {items?.map((el, i) => <SidebarItem key={i} item={el} />)}
                    </ul>
                </div>
            </nav>
        )
    } else {
        <aside className={classes}>
            <div className="sidebar__content">
                <Heading>Скоро</Heading>
            </div>
        </aside>
    }
}

export default Sidebar