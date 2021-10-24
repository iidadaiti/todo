import { render } from '@testing-library/react'
import React from 'react'
import { Header } from './Header'

test('Header snapshot', () => {
  const result = render(<Header></Header>)
  expect(result.asFragment()).toMatchSnapshot()
})
