import invariant from 'invariant'
import has from 'lodash.has'
import isObject from 'is-object'
import clone from 'clone'

export default (args) => {
  // Copy inputs to avoid modifying the original.
  args = clone(args)
  // TODO warn if keys aren't unique.
  invariant(args.length === 1, 'At least one argument needs to be passed.')
  invariant(typeof args[0] === 'object', 'An object needs to be passed as the first argument.')

  const input = args[0]

  invariant(has(input, 'state'), 'A state property is required on the first argument.')

  const state = input.state

  invariant(isObject(state), 'state needs to be an object.')

  const methods = input.methods || {}

  invariant(isObject(methods), 'methods needs to be an object.')

  const selectors = input.selectors || {}

  invariant(isObject(selectors), 'selectors needs to be an object.')

  const middleware = input.middleware || {}

  invariant(isObject(middleware), 'middleware needs to be an object.')

  return {
    state,
    methods,
    selectors,
    middleware
  }
}
