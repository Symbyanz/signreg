export interface BreadcrumbsProps {
    className?: string
    items: BreadcrumbProps[]
}

export interface BreadcrumbProps {
    title: string
    url: string
    hidden?: boolean
}