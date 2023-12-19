import { DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes } from 'react'
import './Table.scss'


interface TableProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    size?: 'large' | 'medium' | 'small'
    items: Items
}

interface TableRowProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    row: string[]
    type?: 'th' | 'td'
}

interface Items {
    thead?: string[]
    tbody: string[][]
}


export const Table = ({ className, items, size = 'medium', ...props }: TableProps) => {
    const classes = className ? (`table table_${size} ${className}`) : `table table_${size}`
    const { thead, tbody } = items;
    return (
        <div className={classes}>
            <table {...props} role='table'>
                {thead && <thead>{<TableRow row={thead} type='th' />}</thead>}
                <tbody>{tbody.map((row, i) => <TableRow key={i} row={row} type='td' />)}</tbody>
            </table>
        </div>
    )
}

export const TableRow = ({ row, type = 'th', ...props }: TableRowProps) => {
    if (type === 'td') {
        return <tr {...props}>{row.map((el, i) => <td key={i}>{el}</td>)}</tr>
    }
    return <tr {...props}>{row.map((el, i) => <th key={i}>{el}</th>)}</tr>
}


export default Table

