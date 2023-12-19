import './Footer.scss'
import FooterCopyright from './FooterCopyright'
import FooterNavbar from './FooterNavbar'
import FooterSidebar from './FooterSidebar'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content container">
                <div className="footer__main-content">
                    <div className="u-footer-content__sidebar">
                        <FooterSidebar />
                    </div>
                    <div className="u-footer-content__nav">
                        <FooterNavbar />
                    </div>
                </div>
                <div className="footer__additional">
                    <FooterCopyright />
                </div>
            </div>
        </footer>
    )
}

export default Footer