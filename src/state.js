import { repeat } from 'ramda'

const initialState = {
  memorias: {
    programa: [],
    datos: repeat(0, 1024)
  },
  pc: 0,
  acumuladores: { a: 0, b: 0 }
}

export default Object.freeze(initialState)