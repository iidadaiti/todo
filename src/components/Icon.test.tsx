import { render } from '@testing-library/react'
import React from 'react'
import { AddIcon, DeleteIcon, Icon } from './Icon'

test('Icon snapshot', () => {
  const result = render(<Icon label=""></Icon>)
  expect(result.asFragment()).toMatchSnapshot()
})

test('AddIcon snapshot', () => {
  const result = render(<AddIcon></AddIcon>)
  expect(result.asFragment()).toMatchSnapshot()
})

test('DeleteIcon snapshot', () => {
  const result = render(<DeleteIcon></DeleteIcon>)
  expect(result.asFragment()).toMatchSnapshot()
})
