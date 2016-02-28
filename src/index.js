import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './Containers/App'
import Home from './Containers/Home'

require('normalize.css')

const AppRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)

render(
  AppRouter,
  document.getElementById('root')
)

