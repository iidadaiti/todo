import { ComponentProps } from 'react'

export function mergeClassNames(
  ...classNames: ComponentProps<'div'>['className'][]
): string {
  return classNames
    .map((item) => (typeof item === 'string' ? item.trim().split(/\s+/) : []))
    .flat(1)
    .filter((item, i, array) => array.indexOf(item, i + 1) < 0)
    .join(' ')
}
