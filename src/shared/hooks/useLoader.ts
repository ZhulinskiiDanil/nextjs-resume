import { uuid } from '@/common/funcs/uuid'

type PreLodearListener = {
  fn: Function,
  options: { once?: boolean },
  id: string
}
type PreLoaderListenerType = 'end'

const onPreloaderEndListeners: PreLodearListener[] = []

export function usePreLoader() {
  return {
    onPreloader(
      type: PreLoaderListenerType,
      fn: PreLodearListener['fn'],
      options?: PreLodearListener['options']
    ) {
      const id = uuid()
      
      if (fn instanceof Function) {
        if (type === 'end') {
          onPreloaderEndListeners.push({
            fn, id, options: options ? options : {}
          })
        }
      }
      
      return id
    },
    removeListener,
    emit(type: PreLoaderListenerType) {
      if (type === 'end') {
        callListeners(onPreloaderEndListeners)
      }
    }
  }
}

function removeListener(id: string) {
  ([onPreloaderEndListeners]).forEach(listeners => {
    
    const listenerIndex = listeners.findIndex(elm => elm.id === id)
    
    if (listenerIndex >= 0) {
      listeners.splice(listenerIndex, 1)
    }
  })
}

function callListeners(listeners: PreLodearListener[]) {
  const listenersToRemove: string[] = []

  listeners.forEach(listener => {
    listener.fn()
    
    if (listener.options?.once) {
      listenersToRemove.push(listener.id)
    }
  })

  listenersToRemove.forEach(listenerId => removeListener(listenerId))
}