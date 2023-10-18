import type { ComponentInternalInstance } from 'vue'

export const getInstanceBySearchParent = (instance: ComponentInternalInstance | null, name: string): ComponentInternalInstance | null => {
  if (instance === null) return null
  if (instance.proxy?.$options.name === name) return instance
  return getInstanceBySearchParent(instance.parent, name)
}
