import { over, identity, assoc, lens } from 'ramda'

// general utilities
export const deriveProp = (propName, fn) => over(lens(identity, assoc(propName)), fn)