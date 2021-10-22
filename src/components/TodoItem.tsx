import React, { ComponentProps, FC } from 'react'
import { TodoData } from './Todo'

export interface TodoItemProps extends Omit<ComponentProps<'div'>, 'children'> {
  data: TodoData
  onRemoveTodo?: (todoData: TodoData) => void
  onChangeTodo?: (before: TodoData, after: TodoData) => void
}

export const TodoItem: FC<TodoItemProps> = ({
  data,
  onRemoveTodo,
  onChangeTodo,
  ...props
}) => {
  return (
    <label>
      <div {...props}>
        <input
          type="checkbox"
          checked={data.isDone}
          onChange={() =>
            onChangeTodo &&
            onChangeTodo(data, { ...data, isDone: !data.isDone })
          }
        />
        <span>{data.text}</span>
        <button
          onClick={() => {
            onRemoveTodo && onRemoveTodo(data)
          }}
          disabled={!onRemoveTodo}
        >
          remove
        </button>
      </div>
    </label>
  )
}
