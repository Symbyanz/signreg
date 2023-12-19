'use client'
import Tab from './Tab'
import TabPanel from './TabPanel'
import './Tabs.scss'
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef, useState } from 'react'

interface TabsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tablist: string[]
    tabs: any[]
}


// Черновое решение из расчета 1 компонента на страницу
// Если допиливать: 
// 1. сделать универсальные id
// 2. изменить поведение полоски 
// 3. добавить навигацию через клавиатуру

const Tabs = ({ className, children, tablist, tabs, ...props }: TabsProps): JSX.Element => {
    const classes = className ? ('tabs ' + className) : 'tabs'
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [indicatorWidth, setIndicatorWidth] = useState(0)
    const [indicatorPosition, setIndicatorPosition] = useState(0)


    const tabsRef = useRef<HTMLDivElement>(null)
    const handleClick = (event: any, i: number) => {
        setSelectedIndex(i)
        setIndicatorPosition(event.currentTarget.offsetLeft)
        setIndicatorWidth(event.currentTarget.offsetWidth)
    }
    useEffect(() => {
        const el = document.getElementById('tab-0')
        setIndicatorWidth(el ? el.offsetWidth : 0)
        window.addEventListener('resize', () => {
            setSelectedIndex(0)
            setIndicatorPosition(0)
            setIndicatorWidth(el ? el.offsetWidth : 0)
        })
    }, [])


    if (!tablist.length || !tabs.length || tablist.length > tabs.length) {
        return <div>Неверно заданы параметры</div>
    }

    return (
        <div {...props} className={classes} data-rttabs ref={tabsRef}>
            <div className='tabs__tab-list' aria-label='tabs' role='tablist'>
                {tablist.map((el, i) => {
                    return <Tab key={i} selected={selectedIndex === i} index={i} onClick={(e) => handleClick(e, i)}>{el}</Tab>
                })}
                <span className="tabs__indicator" style={{ width: indicatorWidth, left: indicatorPosition }} />
            </div>
            {tabs.map((el, i) => <TabPanel key={i} index={i} selected={selectedIndex === i}>{el.content}</TabPanel>)}
        </div>
    )
}

export default Tabs










