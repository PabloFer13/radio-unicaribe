import Reflux from 'reflux'
import Actions from './actions'

export default class AppStore extends Reflux.Store
{
	constructor()
	{
		super();
		this.state = {active: 0, title: ''};
		this.listenables = Actions; // <- would work equally well
	}
	
	onSetActive(active)
	{
		this.setState({active: active});
	}

	onSetTitle(title)
	{
		this.setState({title: title});
	}
}