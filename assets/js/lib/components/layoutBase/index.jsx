import React from 'react'
import Reflux from 'reflux'
import { Route, Link } from 'react-router-dom'

import Store from './store'
import Actions from './actions'

import Home from '../home/index.jsx'
import About from '../home/index.jsx'
import Contact from '../home/index.jsx'

export default class APP extends Reflux.Component {
  constructor (props)	{
    super(props)
    this.store = Store
  }
  isActive (pos) {
    return pos === this.state.active ? 'active' : ''
  }
  render () {
    return (
      <div className='site-wrapper'>
        <div className='site-wrapper-inner'>
          <div className='cover-container'>
            <div className='masthead clearfix'>
              <div className='inner'>
                <h3 className='masthead-brand'>{this.state.title}</h3>
                <nav>
                  <ul className='nav masthead-nav'>
                    <li className={this.isActive(0)}><Link to='/'>Home</Link></li>
                    <li className={this.isActive(1)}><Link to='/features'>About</Link></li>
                    <li className={this.isActive(2)}><Link to='/contact'>Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>

            <div>
              <Route path='/' component={Home} />
              <Route path='/features' component={About} />
              <Route path='/contact' component={Contact} />
            </div>

            <div className='mastfoot'>
              <div className='inner'>
                <p>Cover template for <a href='http://getbootstrap.com'>Bootstrap</a>, by <a href='https://twitter.com/mdo'>@mdo</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
