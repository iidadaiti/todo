import React, { ComponentProps, FC } from 'react'
import { mergeClassNames } from '../utils/classNames'
import styles from './Header.module.css'
import { Heading } from './Heading'

export const Header: FC<Omit<ComponentProps<'div'>, 'children'>> = ({
  className,
  ...props
}) => (
  <div className={mergeClassNames(styles.container, className)} {...props}>
    <Heading>Todo</Heading>
  </div>
)
