import React from 'react'
import Reflux from 'reflux'
import Store from './store'
import Actions from './actions'

import LayoutBaseAction from '../layoutBase/actions.js'

export default class HOME extends Reflux.Component {
  constructor (props)	{
    super(props)
    this.store = Store
  }
  componentDidMount () {
    LayoutBaseAction.setActive(0)
    LayoutBaseAction.setTitle('HOME')
  }
  render ()	{
    return (
      <div className='inner cover'>
        <h1 className='cover-heading'>Count <span>{this.state.count}</span>.</h1>
        <p className='lead'>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p className='lead'>
          <button href='#' className='btn btn-lg btn-primary' onClick={Actions.increment}>Increment</button>
        </p>
        <p className='lead'>
          <a href='#' className='btn btn-lg btn-primary' onClick={Actions.decrement}>Decrement</a>
        </p>
      </div>
    )
  }
}
