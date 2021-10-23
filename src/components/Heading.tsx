import '@spectrum-css/typography'
import React, { ComponentProps, FC } from 'react'
import { mergeClassNames } from '../utils/classNames'

export const Heading: FC<ComponentProps<'h1'>> = ({ className, ...props }) => (
  <h1
    className={mergeClassNames(
      'spectrum-Heading',
      'spectrum-Heading--sizeXXL',
      className
    )}
    {...props}
  ></h1>
)
