import { render } from '@testing-library/react'
import React from 'react'
import { Button } from './Button'

test('Button snapshot', () => {
  const result = render(<Button></Button>)
  expect(result.asFragment()).toMatchSnapshot()
})
