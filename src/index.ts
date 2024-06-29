import { ref, computed, effect, type Ref, UnwrapRef, ComputedRef } from '@vue/reactivity'

class State<T> {
  #state: Ref<UnwrapRef<T>>

  constructor(initialValue: T) {
    this.#state = ref(initialValue)
  }

  get() {
    return this.#state.value
  }

  set(updatedValue: T) {
    this.#state.value = updatedValue as any
  }
}

class Computed<T = unknown> {
  #computed: ComputedRef<T>

  constructor(fn: () => T) {
    this.#computed = computed(fn)
  }

  get() {
    return this.#computed.value
  }
}

export const Signal = {
  State,
  Computed,
}

export {
  effect
}
