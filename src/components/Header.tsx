import React, { ComponentProps, FC } from 'react'
import { mergeClassNames } from '../utils/classNames'
import styles from './Header.module.css'

export const Header: FC<Omit<ComponentProps<'div'>, 'children'>> = ({
  className,
  ...props
}) => (
  <div className={mergeClassNames(styles.container, className)} {...props}>
    <h1 className={styles.title}>Todo</h1>
  </div>
)
