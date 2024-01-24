import './App.css';
import React, {Component} from 'react'
import Home from './Components/Home'
import Footer from './Components/Footer'

export default class App extends Component {
	state = {
		loading: true
	}
	componentDidMount = () => {
		this.setState({loading: false});
	}
	render = () => {
		return (<div className='app-container'>
			<Home/>
			<Footer/>
		</div>)
	}
}