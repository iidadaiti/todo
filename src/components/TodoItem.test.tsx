import { render } from '@testing-library/react'
import React from 'react'
import { TodoItem } from './TodoItem'

test('TodoItem snapshot', () => {
  const data = {
    key: 'test',
    text: 'test',
    isDone: false,
    createAt: new Date()
  }

  const result = render(<TodoItem data={data} />)
  expect(result.asFragment()).toMatchSnapshot()
})
