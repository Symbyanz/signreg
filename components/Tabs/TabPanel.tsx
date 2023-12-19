import { DetailedHTMLProps, HTMLAttributes } from "react";

interface TabPanelProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    selected?: boolean
    index: number
}

const TabPanel = ({ className, children, index, selected = false, ...props }: TabPanelProps): JSX.Element => {
    let classes = selected ? 'tabs__tab-panel tabs__tab-panel_active' : 'tabs__tab-panel'
    className && classes + ` ${className}`
    return (
        <div
            {...props}
            className={classes}
            role='tabpanel'
            id={`panel-${index}`}
            aria-labelledby={`tab-${index}`}
        >
            {selected && children}
        </div>
    )
}

export default TabPanel