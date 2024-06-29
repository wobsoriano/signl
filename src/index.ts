import { ref, computed, effect, type Ref, UnwrapRef, ComputedRef } from '@vue/reactivity'

interface Signal<T> {
  get(): T
  set?(value: T): void
}

namespace Signal {
  export class State<T> implements Signal<UnwrapRef<T>> {
    #state: Ref<UnwrapRef<T>>

    constructor(initialValue: T) {
      this.#state = ref(initialValue)
    }

    get(): UnwrapRef<T> {
      return this.#state.value
    }

    set(updatedValue: UnwrapRef<T>): void {
      this.#state.value = updatedValue
    }
  }

  export class Computed<T = unknown> implements Signal<T> {
    #computed: ComputedRef<T>

    constructor(fn: () => T) {
      this.#computed = computed(fn)
    }

    get(): T {
      return this.#computed.value
    }
  }
}

export {
  Signal,
  effect
}
