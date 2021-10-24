import { render } from '@testing-library/react'
import React from 'react'
import { App } from './App'

test('App snapshot', () => {
  const result = render(<App></App>)
  expect(result.asFragment()).toMatchSnapshot()
})
