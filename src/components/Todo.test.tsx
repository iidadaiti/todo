import { render } from '@testing-library/react'
import React from 'react'
import { Todo, TodoProps } from './Todo'

test('Todo snapshot', () => {
  const todoList: TodoProps['todoList'] = [
    { key: '01', text: '', isDone: false, createAt: new Date() }
  ]

  const result = render(<Todo todoList={todoList}></Todo>)
  expect(result.asFragment()).toMatchSnapshot()
})
