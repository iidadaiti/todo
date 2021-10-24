import { render } from '@testing-library/react'
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow
} from './Table'

test('Table snapshot', () => {
  const result = render(
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell></TableHeadCell>
        </TableRow>
      </TableHead>

      <TableBody>
        <TableRow>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
  expect(result.asFragment()).toMatchSnapshot()
})
