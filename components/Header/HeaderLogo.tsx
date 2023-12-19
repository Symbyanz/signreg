'use client'
import Link from "next/link"
import LogoIcon from './logo.svg';

const HeaderLogo = () => {
    return (
        <div className="header-logo">
            <Link href="/" className="header-logo__link">
                <LogoIcon />
            </Link>
        </div>
    )
}

export default HeaderLogo