import React, { ComponentProps, FC } from 'react'
import { TodoItem } from './TodoItem'

export interface TodoData {
  key: string
  text: string
  isDone: boolean
  createAt: Date
}

export interface TodoProps extends Omit<ComponentProps<'div'>, 'children'> {
  todoList: TodoData[]
  onRemoveTodo?: (todoData: TodoData) => void
  onChangeTodo?: (before: TodoData, after: TodoData) => void
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
          <TodoItem data={data} onChangeTodo={onChangeTodo}></TodoItem>
          {onRemoveTodo && (
            <button
              onClick={() => {
                onRemoveTodo(data)
              }}
            >
              remove
            </button>
          )}
        </li>
      ))}
    </ul>
  </div>
)
