import React, { ComponentProps, FC } from 'react'
import { mergeClassNames } from '../utils/classNames'

export const TableCell: FC<ComponentProps<'td'>> = ({
  className,
  ...props
}) => (
  <td
    className={mergeClassNames('spectrum-Table-cell', className)}
    {...props}
  ></td>
)
