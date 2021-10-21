import { render } from '@testing-library/react'
import React from 'react'
import { Todo, TodoProps } from './Todo'

test('Todo snapshot', () => {
  const todoList: TodoProps['todoList'] = []

  const result = render(<Todo todoList={todoList} />)
  expect(result.asFragment()).toMatchSnapshot()
})
