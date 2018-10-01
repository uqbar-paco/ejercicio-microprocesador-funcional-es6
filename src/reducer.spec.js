import { readParams, reducer } from './reducer'
import { LOAD_PROGRAM, EXEC } from './actions'

describe('Microprocesador / reducer', () => {

  describe('execution utilities', () => {
    describe('readParams()', () => {

      it('should give an empty array for nrBytes = 1 instructions', () => {
        const state = {
          pc: 0, 
          memorias: { programa: ['00', '01'] }
        }
        expect(readParams({ instruction: { nrBytes: 1 }, state })).toEqual([])
      })

      it('should give the next element for nrBytes = 2', () => {
        const state = {
          pc: 0, 
          memorias: { programa: ['00', '01'] }
        }
        expect(readParams({ instruction: { nrBytes: 2 }, state })).toEqual(['01'])
      })

      it('should give the next 2 elements for nrBytes = 3', () => {
        const state = {
          pc: 0, 
          memorias: { programa: ['00', 'a', 'b'] }
        }
        expect(readParams({ instruction: { nrBytes: 3 }, state })).toEqual(['a', 'b'])
      })
      
    })
  })

  describe('reducer', () => {

    describe('LOAD_PROGRAM', () => {
      it('should set the program into an uninitialized state', () => {
        // LODV(23)
        const program = ['07', 23]
        expect(reducer(undefined, { type: LOAD_PROGRAM, program })).toMatchObject({
          memorias: {
            programa: program
          }
        })
      })
    })
    
    describe('EXEC', () => {
    
      it('should LODV(23)', () => {
        // LODV
        const program = ['07', 23]
        let s = reducer(undefined, { type: LOAD_PROGRAM, program })
        s = reducer(s, { type: EXEC })
        expect(s).toMatchObject({
          pc: 2,
          acumuladores: { a: 23 }
        })
      })

    })

  })

})