import React from 'react'
import { create } from './../..'
import { counter } from './../stores'
import createBasicComponent from './components/BasicComponent'
import renderApp from './utils/render-app'

beforeEach(() => {
  // Hide missing prop warnings.
  console.error = () => {}
  console.warn = () => {}
})

test('App with an empty store will render.', () => {
  renderApp(undefined, <p>Hello</p>)
})

test('App with an empty store and a component will render the component once.', () => {
  const BasicComponent = createBasicComponent()
  const Component = BasicComponent.Component
  const renderMock = BasicComponent.renderMock

  renderApp(undefined, <Component />)

  expect(renderMock.mock.calls.length).toBe(1)
})

test('App with a store will render.', () => {
  const store = create(counter)

  renderApp(store, <p>Hello</p>)
})

test('App with a store will render the component.', () => {
  const store = create(counter)

  renderApp(store, <p>Hello</p>)
})
