import React, { ComponentProps, FC } from 'react'
import { mergeClassNames } from '../utils/classNames'
import styles from './Page.module.css'

export const Page: FC<ComponentProps<'div'>> = ({ className, ...props }) => (
  <div
    className={mergeClassNames(styles.container, className)}
    {...props}
  ></div>
)
