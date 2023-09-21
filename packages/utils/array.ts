/**
 * get the first item of array
 */
export const first = <T>(array: T[]): T => {
  return array[0]
}

/**
 * get the last item of array
 */
export const last = <T>(array: T[]): T => {
  return array[array.length - 1]
}
