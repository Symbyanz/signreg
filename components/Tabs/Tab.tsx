'use client'
import { DetailedHTMLProps, HTMLAttributes, useRef } from "react"

interface TabProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    selected: boolean
    index: number
}


const Tab = ({ className, children, tabIndex, selected, index, ...props }: TabProps): JSX.Element => {
    let classes = selected ? 'tabs__tab-item tabs__tab-item_active' : 'tabs__tab-item'
    className && classes + ` ${className}`
    const tabRef = useRef<HTMLButtonElement>(null)
    return (
        <button
            {...props}
            className={classes}
            role='tab'
            ref={tabRef}
            aria-selected={selected ? 'true' : 'false'}
            id={`tab-${index}`}
            aria-controls={`panel-${index}`}
            tabIndex={tabIndex || (selected ? 0 : 0)} //-1 - поменять для управления стрелками
            data-rttab
        >
            {children}
        </button>
    )
}

export default Tab