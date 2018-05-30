import React from 'react'
import { AppRegistry } from 'react-native'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'

import dva from './utils/dva'
import Router  from './router/router'

import appModel from './models/app'
import routerModel from './models/router'

const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)

const app = dva({
  initialState: {},
  models: [appModel, routerModel],
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)
export default App

//AppRegistry.registerComponent('DvaStarter', () => App)
