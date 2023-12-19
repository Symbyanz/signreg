'use client'
import './Accordion.scss'
import Paragraph from '../Paragraph/Paragraph'
import SubHeading from '../SubHeading/SubHeading'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'


interface AccordionProps {
    className: string
    items: AccordionItem[],
    columns?: 1 | 2
}

interface AccordionItemProps {
    key: number
    title: string
    desc: string[]
    isOpen: boolean
    handleClick: any
}

interface AccordionItem {
    _id?: string
    title: string
    desc: string[]
}

const AccordionItem = ({ title, desc, isOpen, handleClick }: AccordionItemProps) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const classes = isOpen ? 'accordion__item accordion__item_active' : 'accordion__item';
    return (
        <div className={classes}>
            <button className={isOpen ? 'accordion__button accordion-button accordion-button_active' : 'accordion__button accordion-button'} onClick={handleClick}>
                <SubHeading className='accordion__title' tag='p' size='large'>{title}</SubHeading>
                <div className='accordion-button__icon'>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div
                ref={contentRef}
                className='accordion__content'
                style={isOpen && contentRef.current ? { height: contentRef.current['scrollHeight'] || '0px' } : { height: '0px' }}>
                {desc.map((text, index) => <Paragraph key={index} size='small'>{text}</Paragraph>)}
            </div>
        </div>
    )
}


const Accordion = ({ className, items, columns = 1 }: AccordionProps) => {
    let classes = className ? ('accordion ' + className) : 'accordion';
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleItemClick = (index: number | null) => {
        setActiveIndex((prevIndex) => prevIndex === index ? null : index);
    };
    useEffect(() => {
        setActiveIndex(0)
        window.addEventListener('resize', () => {!activeIndex && setActiveIndex(null)})
    }, [])

    switch (columns) {
        case 1:
            return (
                <div className={classes}>
                    {items.map((item, index) => (<AccordionItem key={index} title={item.title} desc={item.desc} isOpen={activeIndex === index} handleClick={() => handleItemClick(index)} />))}
                </div>
            )
        default: // 2
            classes += ' accordion_grid';
            const rightColumn = new Array(Math.round(items.length / 2));
            const leftColumn = new Array(items.length - rightColumn.length);
            items.map((item, index) => {
                if (index < leftColumn.length) {
                    leftColumn[index] = <AccordionItem key={index} title={item.title} desc={item.desc} isOpen={activeIndex === index} handleClick={() => handleItemClick(index)} />
                } else {
                    rightColumn[index] = <AccordionItem key={index} title={item.title} desc={item.desc} isOpen={activeIndex === index} handleClick={() => handleItemClick(index)} />
                }
            })
            return (
                <div className={classes}>
                    <div className='accordion__column'>{leftColumn}</div>
                    <div className='accordion__column'>{rightColumn}</div>
                </div>
            )
    }
}

export default Accordion