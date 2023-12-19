'use client'
import './Partners.scss'
import SubHeading from '@/components/SubHeading/SubHeading'
import Image from 'next/image'
import Link from 'next/link'


interface Props {
    title: string
}


const Partners = ({ title }: Props) => {
    return (
        <section className='partners'>
            <div className='partners__content container'>
                <SubHeading className='partners__title' tag='h2'>{title}</SubHeading>
                <div className="partners__box">
                    <ul className='partners__list'>
                        <li className='partners__item'>
                            <Link href='#' className='partners__link'>
                                <Image
                                    src='/images/logos/dizarlogo.svg'
                                    quality={75}
                                    fill={true}
                                    alt='dizar logo' />
                            </Link>
                        </li>
                        <li className='partners__item'>
                            <Link href='#' className='partners__link'>
                                <Image
                                    src='/images/logos/lenco.svg'
                                    quality={75}
                                    fill={true}
                                    alt='lenco logo' />
                            </Link>
                        </li>
                        <li className='partners__item'>
                            <Link href='#' className='partners__link'>
                                <Image
                                    src='/images/logos/wow.svg'
                                    quality={75}
                                    fill={true}
                                    alt='wow logo' />
                            </Link>
                        </li>
                        <li className='partners__item'>
                            <Link href='#' className='partners__link'>
                                <Image
                                    src='/images/logos/cei.svg'
                                    quality={75}
                                    fill={true}
                                    alt='cei logo' />
                            </Link>
                        </li>
                        <li className='partners__item'>
                            <Link href='#' className='partners__link'>
                                <Image
                                    src='/images/logos/terra.svg'
                                    quality={75}
                                    fill={true}
                                    alt='terra logo' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Partners