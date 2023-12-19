import { DetailedHTMLProps, HTMLAttributes } from "react";

interface TabListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    // soon...
}

const TabList = ({ className, children, ...props }: TabListProps): JSX.Element => {
    const classes = className ? ('tabs__tab-list ' + className) : 'tabs__tab-list'
    return (
        <div className={classes} aria-label='tabs' {...props} role='tablist'>
            {children}
            <span className="tabs__scrollbar" />
        </div>
    )
}

export default TabList