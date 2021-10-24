import { render } from '@testing-library/react'
import React from 'react'
import { Page } from './Page'

test('Page snapshot', () => {
  const result = render(<Page></Page>)
  expect(result.asFragment()).toMatchSnapshot()
})
