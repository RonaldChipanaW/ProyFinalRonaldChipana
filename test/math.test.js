import { expect, test, describe, it, vi } from 'vitest'
import * as math from '../src/math.js'

describe('doble random', () => {
  it('usar el valor mokeado', () => {
    vi.spyOn(math,'dobleRandom').mockReturnValue(0.5)

    const result = math.dobleRandom()*2
    console.log(result)
    expect (result).toBe(1)
  })
})