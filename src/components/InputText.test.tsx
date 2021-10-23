import { render } from '@testing-library/react'
import React from 'react'
import { InputText } from './InputText'

test('InputText snapshot', () => {
  const result = render(<InputText />)
  expect(result.asFragment()).toMatchSnapshot()
})
