import React, { ComponentProps, FC } from 'react'
import { mergeClassNames } from '../utils/classNames'

export const TableBody: FC<ComponentProps<'tbody'>> = ({
  className,
  ...props
}) => (
  <tbody
    className={mergeClassNames('spectrum-Table-body', className)}
    {...props}
  ></tbody>
)
