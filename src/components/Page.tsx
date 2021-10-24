import '@spectrum-css/page'
import React, { ComponentProps, FC, PropsWithChildren } from 'react'
import { mergeClassNames } from '../utils/classNames'

export interface PageProps extends Omit<ComponentProps<'div'>, 'children'> {
  theme?: 'light'
  scale?: 'medium' | 'large'
}

export const Page: FC<PropsWithChildren<PageProps>> = ({
  theme = 'light',
  scale = 'medium',
  className,
  ...props
}) => {
  return (
    <div
      className={mergeClassNames(
        'spectrum',
        `spectrum--${scale}`,
        `spectrum--${theme}`,
        className
      )}
      {...props}
    ></div>
  )
}
