type PreLodearListener = Function
type PreLoaderListenerType = 'end'

const onPreloaderEndListeners: PreLodearListener[] = []

export function usePreLoader() {
  return {
    onPreloader(type: PreLoaderListenerType, fn: PreLodearListener) {
      if (fn instanceof Function) {
        if (type === 'end') {
          onPreloaderEndListeners.push(fn)
        }
      }
    },
    emit(type: PreLoaderListenerType) {
      if (type === 'end') {
        callListeners(onPreloaderEndListeners)
      }
    }
  }
}

function callListeners(listeners: PreLodearListener[]) {
  listeners.forEach(listener => listener())
}