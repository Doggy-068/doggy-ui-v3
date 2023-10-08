import type { Size } from '../../../types'

export type Props = {
  modelValue: string | number
  modelModifiers?: Record<string, boolean>
  size?: Size
  clearable?: boolean
  outline?: boolean
}
