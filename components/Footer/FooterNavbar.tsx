'use client'
import Link from 'next/link'
import { MenuItems } from './FooterItems'
import ToCallIcon from './toCall.svg'
import ToMessageIcon from './toMessage.svg'
import ArrowIcon from './arrow.svg'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { usePathname } from 'next/navigation'


export interface Props {
    el: {
        title: string
        items: Item[]
    }
}

export interface Item {
    label: string
    href: string
    icon?: string
}

const FooterSubNavbar = ({ el }: Props) => {
    const footerMenuRef = useRef<HTMLUListElement>(null)
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const [dropdown, setDropdown] = useState(false)
    const pathname = usePathname();
    const handleResize = () => setDropdown(false)
    useEffect(() => {
        setDropdown(false)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [pathname]);
    return (
        <div className="footer-nav__group" >
            <h2 className={dropdown ? 'footer-nav__title footer-nav__title_active' : 'footer-nav__title'} onClick={() => isMobile && setDropdown(!dropdown)}>{el.title}<span className="footer-nav__arrow"><ArrowIcon /></span></h2>
            <ul ref={footerMenuRef} className='footer-nav__list' style={dropdown && footerMenuRef.current ? { height: footerMenuRef.current['scrollHeight'] } : { height: '0px' }}>
                {el.items.map((link: Item) => {
                    return (
                        <li className="footer-nav__item" key={link.label}>
                            {link.icon
                                ? <Link href={link.href} className='footer-nav__link footer-nav__link_icon'>{(link.icon === 'callback' ? <ToCallIcon /> : <ToMessageIcon />)}{link.label}</Link>
                                : <Link href={link.href} className='footer-nav__link'>{link.label}</Link>
                            }
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

const FooterNavbar = () => {
    return (
        <nav className="footer-nav">
            {MenuItems.map(el => <FooterSubNavbar el={el} key={el.title} />)}
        </nav>
    )
}

export default FooterNavbar