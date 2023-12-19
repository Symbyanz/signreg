import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

type NavLink = {
    label: string;
    href: string;
    children?: any
};

type Props = {
    navLinks: NavLink[];
    dropdown: boolean;
    setDropdown: Dispatch<SetStateAction<boolean>>;
}

const HeaderSubmenu = ({ navLinks, dropdown, setDropdown }: Props) => {
    const submenuRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname();
    useEffect(() => {
        setDropdown(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return (
        <div ref={submenuRef} className={dropdown ? 'h-submenu h-submenu_active' : 'h-submenu'} style={dropdown && submenuRef.current ? { height: submenuRef.current['scrollHeight'] } : { height: '0px' }}>
            <div className="h-submenu__content container">
                <ul className="h-submenu-list">
                    {
                        navLinks.map(link => {
                            const children = link.children;
                            return (
                                <li className='h-submenu-list__item' key={link.label}>
                                    {
                                        !children
                                            ? <Link href={link.href} className={'h-submenu-list__link'} onClick={() => setDropdown(false)}>{link.label}</Link>
                                            : (
                                                <>
                                                    <div className='h-submenu-list__title'>{link.label}</div>
                                                    <ul className="h-submenu-list__group h-submenu-group" key={link.label}>
                                                        {
                                                            children.map((sublink: NavLink) => {
                                                                return (
                                                                    <li className="h-submenu-group__item" key={sublink.label}>
                                                                        <Link href={sublink.href} className={'h-submenu-group__link'} onClick={() => setDropdown(false)}>{sublink.label}</Link>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </>
                                            )
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default HeaderSubmenu