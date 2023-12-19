'use client'
import './SocialNets.scss'
import VkontakteIcon from './vk.svg'
import TelegramIcon from './telegram.svg'
import WhatsappIcon from './whatsapp.svg'
import InstagramIcon from './insta.svg'
import Link from 'next/link'

type SocialLinks = {
    vkontakte: string;
    whatsapp: string;
    instagram: string;
    telegram: string;
}

type Props = {
    socialLinks: SocialLinks
}

const SocialNets = ({ socialLinks }: Props) => {
    return (
        <ul className="socialnet">
            <li className="socialnet__item">
                <Link href={socialLinks.vkontakte} className="socialnet__link">
                    <VkontakteIcon />
                </Link>
            </li>
            <li className="socialnet__item">
                <Link href={socialLinks.telegram} className="socialnet__link">
                    <TelegramIcon />
                </Link>
            </li>
            <li className="socialnet__item">
                <Link href={socialLinks.whatsapp} className="socialnet__link">
                    <WhatsappIcon />
                </Link>
            </li>
            <li className="socialnet__item">
                <Link href={socialLinks.instagram} className="socialnet__link">
                    <InstagramIcon />
                </Link>
            </li>
        </ul>
    )
}

export default SocialNets