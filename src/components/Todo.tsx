import React, { ComponentProps, FC } from 'react'
import { TodoItem, TodoItemProps } from './TodoItem'

export interface TodoData {
  key: string
  text: string
  isDone: boolean
  createAt: Date
}

export interface TodoProps
  extends Omit<ComponentProps<'div'>, 'children'>,
    Pick<TodoItemProps, 'onRemoveTodo' | 'onChangeTodo'> {
  todoList: TodoData[]
}

export const Todo: FC<TodoProps> = ({
  todoList,
  onRemoveTodo,
  onChangeTodo,
  ...props
}) => (
  <div {...props}>
    <ul>
      {todoList.map((data) => (
        <li key={data.key}>
          <TodoItem
            data={data}
            onChangeTodo={onChangeTodo}
            onRemoveTodo={onRemoveTodo}
          ></TodoItem>
        </li>
      ))}
    </ul>
  </div>
)
