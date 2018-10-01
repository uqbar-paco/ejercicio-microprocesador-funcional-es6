import { NOP, ADD, SUB, MUL, DIV, SWAP, LODV } from './instructions-logic'

const Instructions = {
  '00': { logic: NOP, nrBytes: 1 },
  '01': { logic: ADD, nrBytes: 1 },
  '02': { logic: SUB, nrBytes: 1 },
  '03': { logic: MUL, nrBytes: 1 },
  '04': { logic: DIV, nrBytes: 1 },
  '05': { logic: SWAP, nrBytes: 1 },
  //
  '07': { logic: LODV, nrBytes: 2 }
}

export default Instructions