import '@spectrum-css/table'
import React, { ComponentProps, FC } from 'react'
import { mergeClassNames } from '../utils/classNames'

export interface TableProps extends Omit<ComponentProps<'table'>, 'children'> {
  size?: 's' | 'm' | 'l' | 'xl'
}

export const Table: FC<TableProps> = ({ size = 'm', className, ...props }) => (
  <table
    className={mergeClassNames(
      'spectrum-Table',
      `spectrum-Table--size${size.toUpperCase()}`,
      className
    )}
    {...props}
  ></table>
)

export const TableBody: FC<ComponentProps<'tbody'>> = ({
  className,
  ...props
}) => (
  <tbody
    className={mergeClassNames('spectrum-Table-body', className)}
    {...props}
  ></tbody>
)

export const TableCell: FC<ComponentProps<'td'>> = ({
  className,
  ...props
}) => (
  <td
    className={mergeClassNames('spectrum-Table-cell', className)}
    {...props}
  ></td>
)

export const TableHead: FC<ComponentProps<'thead'>> = ({
  className,
  ...props
}) => (
  <thead
    className={mergeClassNames('spectrum-Table-head', className)}
    {...props}
  ></thead>
)

export const TableHeadCell: FC<ComponentProps<'th'>> = ({
  className,
  ...props
}) => (
  <th
    className={mergeClassNames('spectrum-Table-headCell', className)}
    {...props}
  ></th>
)

export const TableRow: FC<ComponentProps<'tr'>> = ({ className, ...props }) => (
  <tr
    className={mergeClassNames('spectrum-Table-row', className)}
    {...props}
  ></tr>
)
