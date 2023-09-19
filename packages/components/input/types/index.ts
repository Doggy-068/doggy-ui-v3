import type { Size } from '../../../types'

export type Props = {
  modelValue: string | number
  modelModifiers?: Record<string, boolean>
  size?: Exclude<Size, 'large'>
  clearable?: boolean
}
