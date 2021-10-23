import '@spectrum-css/button'
import React, { Children, ComponentProps, FC, PropsWithChildren } from 'react'
import { mergeClassNames } from '../utils/classNames'

export interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'children'> {
  size?: 's' | 'm' | 'l' | 'xl'
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  size = 'm',
  className,
  children,
  ...props
}) => (
  <button
    className={mergeClassNames(
      'spectrum-Button',
      'spectrum-Button--cta',
      `spectrum-Button--size${size.toUpperCase()}`,
      className
    )}
    {...props}
  >
    {Children.map(children, (child) =>
      typeof child === 'string' || typeof child === 'number' ? (
        <span className="spectrum-Button-label">{child}</span>
      ) : (
        child
      )
    )}
  </button>
)
