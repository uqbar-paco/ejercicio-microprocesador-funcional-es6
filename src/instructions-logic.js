import { over, pipe, applySpec, nth, lensProp, add, multiply, subtract, divide, __, assocPath } from 'ramda'
/* eslint no-bitwise: 0, no-mixed-operators: 0 */

// general utilities
export const incrementPC = n => over(lensProp('pc'), add(n))

const splitBytes = n => [toShort(n & 0xFF00 >> 4), toShort(n & 0x00FF)]
const toShort = n => (n << 16) >> 16

// function utils
const mutateAccumulators = over(lensProp('acumuladores'), __)
const applyOverAccumulators = operacion => mutateAccumulators(({ a, b }) => pipe(
  splitBytes,
  applySpec({ a: nth(0), b: nth(1) })
)(operacion(a, b)))

// impl de instrucciones
export const NOP = incrementPC(1)
export const ADD = applyOverAccumulators(add)
export const SUB = applyOverAccumulators(subtract)
export const MUL = applyOverAccumulators(multiply)
export const DIV = applyOverAccumulators(divide)
export const SWAP = mutateAccumulators(({ a: b, b: a }) => ({ a, b }))

// 
export const LODV = (state, [val]) => assocPath(['acumuladores', 'a'], val)(state)