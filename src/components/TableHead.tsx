import React, { ComponentProps, FC } from 'react'
import { mergeClassNames } from '../utils/classNames'

export const TableHead: FC<ComponentProps<'thead'>> = ({
  className,
  ...props
}) => (
  <thead
    className={mergeClassNames('spectrum-Table-head', className)}
    {...props}
  ></thead>
)
