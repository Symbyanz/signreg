import { DetailedHTMLProps, HTMLAttributes } from 'react'

const Container = ({ className, children }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const classes = className ? ('section ' + className) : 'section'
    return (
        <section className={classes}>
            <div className="container">
                {children}
            </div>
        </section>
    )
}

export default Container