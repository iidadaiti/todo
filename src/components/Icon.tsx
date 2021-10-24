import '@spectrum-css/icon'
import React, { ComponentProps, FC, PropsWithChildren } from 'react'
import { mergeClassNames } from '../utils/classNames'

export interface IconProps
  extends Omit<ComponentProps<'svg'>, 'children' | 'aria-label'> {
  size?: 's' | 'm' | 'l' | 'xl'
  label: string
}

export const Icon: FC<PropsWithChildren<IconProps>> = ({
  size = 'm',
  label,
  className,
  ...props
}) => (
  <svg
    className={mergeClassNames(
      'spectrum-Icon',
      `spectrum-Icon--size${size.toUpperCase()}`,
      className
    )}
    aria-label={label}
    {...props}
  ></svg>
)

export const AddIcon: FC<Omit<IconProps, 'label'>> = ({ ...props }) => (
  <Icon label="Add" {...props}>
    <rect opacity="0" width="18" height="18" />
    <path d="M15.75,3H12V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H1.25A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4h1L3.4565,16.55a.5.5,0,0,0,.5.45H13.046a.5.5,0,0,0,.5-.45L14.75,4h1A.25.25,0,0,0,16,3.75v-.5A.25.25,0,0,0,15.75,3ZM5.5325,14.5a.5.5,0,0,1-.53245-.46529L5,14.034l-.5355-8a.50112.50112,0,0,1,1-.067l.5355,8a.5.5,0,0,1-.46486.53283ZM9,14a.5.5,0,0,1-1,0V6A.5.5,0,0,1,9,6ZM11,3H6V2h5Zm1,11.034a.50112.50112,0,0,1-1-.067l.5355-8a.50112.50112,0,1,1,1,.067Z" />
  </Icon>
)

export const DeleteIcon: FC<Omit<IconProps, 'label'>> = ({ ...props }) => (
  <Icon label="Delete" {...props}>
    <rect opacity="0" width="18" height="18" />
    <path d="M14.5,8H10V3.5A.5.5,0,0,0,9.5,3h-1a.5.5,0,0,0-.5.5V8H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H8v4.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V10h4.5a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,14.5,8Z" />
  </Icon>
)
