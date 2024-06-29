import { describe, expect, test } from 'vitest'
import { Signal } from '../src'

describe('basic', () => {
  const state = new Signal.State<number>(0)
  const computed = new Signal.Computed<number>(() => state.get() * 2)

  test('increment', () => {
    state.set(state.get() + 1)
    state.set(state.get() + 1)
    state.set(state.get() + 1)
    expect(state.get()).toEqual(3)
  })

  test('doubled', () => {
    expect(computed.get()).toEqual(6)
  })
})
