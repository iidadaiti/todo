import { customAlphabet } from 'nanoid'
import React, { FC, useState } from 'react'
import { Todo, TodoProps } from './components/Todo'

const nanoid = customAlphabet('1234567890', 8)

export const App: FC = () => {
  const [todoList, setTodoList] = useState<TodoProps['todoList']>([])
  const [text, setText] = useState('')
  const addTodo = () => {
    const key = nanoid()
    const isDone = false
    const createAt = new Date()
    setTodoList([...todoList, { text, key, isDone, createAt }])
  }

  return (
    <div>
      <input
        type="text"
        autoFocus={true}
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        onKeyPress={(e) => {
          if (e.key !== 'Enter' || e.currentTarget.value.length < 1) {
            return
          }

          e.preventDefault()
          addTodo()

          setText('')
        }}
      />
      <button
        onClick={() => {
          if (text.length < 1) {
            return
          }

          addTodo()
          setText('')
        }}
      >
        Add
      </button>

      <Todo
        todoList={todoList}
        onRemoveTodo={(todoData) =>
          setTodoList(todoList.filter((it) => it !== todoData))
        }
        onChangeTodo={(before, after) => {
          const replaceIndex = todoList.findIndex((it) => it === before)
          if (replaceIndex >= 0) {
            todoList[replaceIndex] = after
            setTodoList([...todoList])
          }
        }}
      ></Todo>
    </div>
  )
}
