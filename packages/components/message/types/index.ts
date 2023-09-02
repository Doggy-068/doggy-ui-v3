type Type = 'success' | 'error' | 'info'

export type Props = {
  text: string
  type?: Type
  duration?: number
}
