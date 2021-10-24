import { customAlphabet } from 'nanoid'
import React, { FC, FormEvent, useState } from 'react'
import styles from './App.module.css'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { InputText } from './components/InputText'
import { Page } from './components/Page'
import { Todo, TodoData, TodoProps } from './components/Todo'

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

  const handlerSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (text.length < 1) {
      return
    }

    addTodo()
    setText('')
  }

  const handlerChangeTodo = (before: TodoData, after: TodoData) => {
    console.log('change')

    const replaceIndex = todoList.findIndex((it) => it === before)
    if (replaceIndex >= 0) {
      todoList[replaceIndex] = after
      setTodoList([...todoList])
    }
  }

  const handlerRemoveTodo = (todoData: TodoData) =>
    setTodoList(todoList.filter((it) => it !== todoData))

  return (
    <Page className={styles.page}>
      <header>
        <Header />
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.todoHeader}>
              <form onSubmit={handlerSubmit}>
                <InputText
                  autoFocus
                  value={text}
                  onChange={(e) => setText(e.currentTarget.value)}
                />
                <div className={styles.todoHeaderButton}>
                  <Button type="submit">Add</Button>
                </div>
              </form>
            </div>

            <div className={styles.todoBody}>
              <Todo
                todoList={todoList}
                onChangeTodo={handlerChangeTodo}
                onRemoveTodo={handlerRemoveTodo}
              ></Todo>
            </div>
          </div>
        </section>
      </main>
    </Page>
  )
}
