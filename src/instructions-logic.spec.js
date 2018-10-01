import { ADD, SWAP, LODV } from './instructions-logic'

describe('Microprocesador / instructions / logic', () => {

  describe('ADD', () => {
    it('should add 1 + 2', () => {
      expect(ADD({ acumuladores: { a: 1, b: 2 } })).toEqual({
        acumuladores: { a: 0, b: 3 }
      })
    })
    it('should add 8 + 8', () => {
      expect(ADD({ acumuladores: { a: 8, b: 8 } })).toEqual({
        acumuladores: { a: 16, b: 16 } // ???
      })
    })
    it('should add 255 + 2', () => {
      expect(ADD({ acumuladores: { a: 255, b: 2 } })).toEqual({
        acumuladores: { a: 256, b: 1 } // ?? swapped ?
      })
    })
  })

  describe('SWAP', () => {
    it('should add 1 + 2', () => {
      expect(SWAP({ acumuladores: { a: 1, b: 2 } })).toEqual({
        acumuladores: { a: 2, b: 1 }
      })
    })
  })

  describe('LODV', () => {
    it('LODV([23]) should set "a" to 23, and keep "b" dirty (?)', () => {
      expect(LODV({ acumuladores: { a: 1, b: 2 } }, [23])).toEqual({
        acumuladores: { a: 23, b: 2 }
      })
    })
  })

})