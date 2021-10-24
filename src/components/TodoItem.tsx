import React, { ComponentProps, FC } from 'react'
import { Button } from './Button'
import { TableCell, TableRow } from './Table'
import { TodoData } from './Todo'
import styles from './TodoItem.module.css'

export interface TodoItemProps extends Omit<ComponentProps<'tr'>, 'children'> {
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
  const id = `todo-item-${data.key}`

  const handlerToggleDone = () =>
    onChangeTodo && onChangeTodo(data, { ...data, isDone: !data.isDone })

  const handlerClick = onRemoveTodo && (() => onRemoveTodo(data))

  return (
    <TableRow {...props}>
      <TableCell valign="middle" onClick={handlerToggleDone}>
        <input
          id={id}
          type="checkbox"
          checked={data.isDone}
          onChange={handlerToggleDone}
        />
      </TableCell>
      <TableCell
        className={styles.textCell}
        valign="middle"
        onClick={handlerToggleDone}
      >
        {data.text}
      </TableCell>
      <TableCell valign="middle">
        <Button onClick={handlerClick} disabled={!onRemoveTodo}>
          Remove
        </Button>
      </TableCell>
    </TableRow>
  )
}
