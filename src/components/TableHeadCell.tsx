import React, { ComponentProps, FC } from 'react'
import { mergeClassNames } from '../utils/classNames'

export const TableHeadCell: FC<ComponentProps<'th'>> = ({
  className,
  ...props
}) => (
  <th
    className={mergeClassNames('spectrum-Table-headCell', className)}
    {...props}
  ></th>
)
