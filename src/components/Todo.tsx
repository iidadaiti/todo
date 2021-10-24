import React, { ComponentProps, FC } from 'react'
import { Table, TableBody } from './Table'
import { TodoItem, TodoItemProps } from './TodoItem'

export interface TodoData {
  key: string
  text: string
  isDone: boolean
  createAt: Date
}

export interface TodoProps
  extends Omit<ComponentProps<'table'>, 'children'>,
    Pick<TodoItemProps, 'onRemoveTodo' | 'onChangeTodo'> {
  todoList: TodoData[]
}

export const Todo: FC<TodoProps> = ({
  todoList,
  onRemoveTodo,
  onChangeTodo,
  ...props
}) => (
  <Table {...props}>
    <TableBody>
      {todoList.map((data) => (
        <TodoItem
          key={data.key}
          data={data}
          onChangeTodo={onChangeTodo}
          onRemoveTodo={onRemoveTodo}
        ></TodoItem>
      ))}
    </TableBody>
  </Table>
)
