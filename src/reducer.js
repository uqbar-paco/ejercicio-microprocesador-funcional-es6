import { always, pipe, applySpec, assocPath, identity } from 'ramda'
import { EXEC, LOAD_PROGRAM } from './actions'
import initialState from './state'
import { deriveProp } from './utils'
import Instructions from './instructions'
import { incrementPC } from './instructions-logic'

const handlers = {

  [LOAD_PROGRAM]: action => assocPath(['memorias', 'programa'], action.program),

  [EXEC]: () => pipe(
    applySpec({ instruction: nextInstruction, state: identity }),
    deriveProp('params', readParams),
    execute
  )

}

// reducer
export const reducer = (state = initialState, action) => (handlers[action.type] || always(identity))(action)(state)

// queries
const nextInstruction = state => Instructions[state.memorias.programa[state.pc]]
export const readParams = ({ instruction: { nrBytes }, state: { pc, memorias: { programa } } }) => programa.slice(pc + 1, pc + nrBytes)

export const execute = ({ instruction, params, state }) => pipe(
  () => instruction.logic(state, params),
  incrementPC(instruction.nrBytes)
)()

