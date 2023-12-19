'use client'
import Link from 'next/link'
import SocialNets from '../SocialNets/SocialNets'
import LogoIcon from './logo.svg'
import { SocialItems } from './FooterItems'
import Paragraph from '../Paragraph/Paragraph'

const FooterSidebar = () => {
  return (
    <div className='u-footer-sidebar'>
      <div className='u-footer-sidebar__group'>
        <Link href='/' className='u-footer-sidebar__logo'>
          <LogoIcon />
        </Link>
        <Paragraph className='u-footer-sidebar__tagline' size='small'>Будьте спокойны в юридических вопросах с нашей экспертной помощью</Paragraph>
        <div className='u-footer-sidebar__socialnets u-footer-socialnets'>
          <Paragraph className='u-footer-socialnets__title' size='small'>Мы в социальных сетях:</Paragraph>
          <div className='u-footer-socialnets__list'>
            <SocialNets socialLinks={SocialItems} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSidebar