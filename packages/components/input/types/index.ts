import type { Size } from '../../../types'

export type Props = {
  modelValue: string | number
  modelModifiers?: any
  size?: Exclude<Size, 'large'>
  clearable?: boolean
}
