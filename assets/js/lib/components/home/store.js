import Reflux from 'reflux'
import Actions from './actions'

export default class HomeStore extends Reflux.Store {
  constructor () {
    super()
    this.state = {count: 0}
// this.listenToMany(Actions);
    this.listenables = Actions // <- would work equally well
  }

  onIncrement () {
    this.setState({count: this.state.count + 1})
  }

  onDecrement () {
    this.setState({count: this.state.count - 1})
  }
}
