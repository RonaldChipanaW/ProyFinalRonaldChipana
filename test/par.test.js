import { expect, test } from 'vitest'
import { parVerification } from '../src/par.js'

test('Prueba Par TRUE', () => {
  expect(parVerification(6)).toBe(true)
})

test('Prueba Impar FALSE', () => {
  expect(parVerification(5)).toBe(false)
})

test('Prueba Par CERO', () => {
  expect(parVerification(0)).toBe(true)
})

test('Prueba Par NEGATIVO', () => {
  expect(parVerification(-4)).toBe(true)
})

test('Prueba Impar NEGATIVO', () => {
  expect(parVerification(-3)).toBe(false)
})

test('Prueba par decimal', () => {
  expect(parVerification(2,2)).toBe(true)
})