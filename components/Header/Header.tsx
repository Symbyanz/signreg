import './Header.scss'
import HeaderLogo from './HeaderLogo';
import HeaderNavbar from "./HeaderNavbar";
import HeaderModal from './HeaderModal';


const Header = () => {    
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__list container">
                    <HeaderLogo />
                    <HeaderNavbar />
                    <HeaderModal />
                </div>
            </div>
        </header>
    )
}

export default Header
