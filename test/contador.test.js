import { expect, test, it, describe, beforeEach, beforeAll, afterEach, afterAll } from 'vitest'
import { incrementar, resetear } from '../src/contador.js'

describe('pruebas contador', () => {
    beforeAll(()=>{
        console.log('INICIANDO LAS PRUEBAS ')
    })
    beforeEach(()=>{
        resetear()
    })
    afterEach(()=>{
        console.log('TERMINANDO UNA PRUEBA',incrementar())
    })
    afterAll(()=>{
        console.log('TERMINANDO LAS PRUEBAS')
    })
    it('iniciar en 1 al icrementar', ()=>{
        expect(incrementar()).toBe(1)
    })
    it('incrementar correctamente',()=>{
        incrementar()
        expect(incrementar()).toBe(2)
    })
})
