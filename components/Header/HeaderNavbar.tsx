'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ArrowIcon from './arrow.svg';
import HeaderSubmenu from './HeaderSubmenu';
import MenuItems from './MenuItems';


export interface Props {
  link: {
    label: string
    href: string
    children?: Children[]
  },
  setMobileMenuActive: any
}

export interface Children {
  label: string
  href: string
  children: Children2[]
}

export interface Children2 {
  label: string
  href: string
}

const HeaderSubNavbar = ({ link, setMobileMenuActive }: Props) => {
  const pathname = usePathname();
  const [dropdown, setDropdown] = useState(false);
  const regexp = new RegExp('^' + link.href);
  const isActive = regexp.test(pathname);
  const children = link.children;
  return (
    <li className={isActive ? 'h-menu-list__item menu-list__item_active' : 'h-menu-list__item'} key={link.label}>
      {
        !children
          ? <Link href={link.href} className={'h-menu-list__link'} onClick={() => { setMobileMenuActive(false); setDropdown(false) }} >{link.label}</Link>
          : (<>
            <button className={'h-menu-list__link'} onClick={() => setDropdown(!dropdown)}>{link.label}<span className={dropdown ? 'h-menu-list__arrow h-menu-list__arrow_active' : 'h-menu-list__arrow'}><ArrowIcon /></span></button>
            <HeaderSubmenu navLinks={children} dropdown={dropdown} setDropdown={setDropdown} />
          </>)
      }
    </li>
  )
}

const HeaderNavbar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setMobileMenuActive(false);
  }, [pathname])
  
  return (
    <nav className="h-navbar">
      <div className={mobileMenuActive ? 'h-navbar__menu h-navbar__menu_active' : 'h-navbar__menu'} >
        <ul className="h-menu-list">
          {MenuItems.map(link => <HeaderSubNavbar key={link.label} link={link} setMobileMenuActive={setMobileMenuActive} />)}
        </ul>
      </div>
      <div className="h-navbar__menu-icon">
        <button className={mobileMenuActive ? 'h-menu-icon h-menu-icon_active' : 'h-menu-icon'} onClick={() => setMobileMenuActive(!mobileMenuActive)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}


export default HeaderNavbar