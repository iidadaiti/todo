import '@spectrum-css/textfield'
import React, { ComponentProps, FC } from 'react'
import { mergeClassNames } from '../utils/classNames'

export interface InputTextProps
  extends Omit<ComponentProps<'input'>, 'children'> {
  type?: Extract<
    ComponentProps<'input'>['type'],
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
  >
}

export const InputText: FC<InputTextProps> = ({
  className,
  type = 'text',
  ...props
}) => (
  <div className="spectrum-Textfield">
    <input
      type={type}
      className={mergeClassNames('spectrum-Textfield-input', className)}
      {...props}
    />
  </div>
)
