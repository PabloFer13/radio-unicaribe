import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Home from './lib/components/layoutBase/index.jsx'

const history = createBrowserHistory()

ReactDOM.render(<Router history={history}>
  <Route path='/' component={Home} />
</Router>, document.getElementById('mainContainer'))
