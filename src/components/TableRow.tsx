import React, { ComponentProps, FC } from 'react'
import { mergeClassNames } from '../utils/classNames'

export const TableRow: FC<ComponentProps<'tr'>> = ({ className, ...props }) => (
  <tr
    className={mergeClassNames('spectrum-Table-row', className)}
    {...props}
  ></tr>
)
