import Paragraph from "../Paragraph/Paragraph";

const FooterCopyright = () => {
  const copyrightYear = new Date().getFullYear();
  return (
    <div className="footer-copyright">
      <div className="footer-copyright__content">
        <Paragraph size="super-small" className="footer-copyright__text">© 2021 - {copyrightYear} ООО &quot;СИГНРЕГ&quot;</Paragraph>
        <Paragraph size="super-small" className="footer-copyright__text">Используем cookies для корректной работы сайта, персонализации пользователей и других целей, предусмотренных политикой обработки персональных данных.</Paragraph>
      </div>
    </div>
  )
}

export default FooterCopyright