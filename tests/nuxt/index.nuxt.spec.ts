// @vitest-environment nuxt
import { describe, expect, it } from 'vitest'

describe('test utils', () => {
  it('window object exists', () => {
    expect(typeof window).toBe('object')
  })

  it.todo('handles nuxt routing')
})
