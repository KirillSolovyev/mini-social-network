import React from 'react';

import './MainInput.sass';
import cat from '../../static/images/cat.jpeg';
import sendImg from '../../static/images/send.svg';

export default class MainInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.value);
		this.setState({ value: '' });
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	render() {
		return (
			<form className="flex items-center reply" onSubmit={this.handleClick}>
				<p className="reply__avatar mr-3">
					<img src={cat} alt="Avatar" />
				</p>
				<div className="input-with-icons flex grow-1-1">
					<input 
						className="reply__input" 
						type="text"
						value={this.state.value}
						placeholder={this.props.placeholder} 
						onChange={this.handleChange}
					/>
					<span className="input-camera" style={{right: '5px'}}></span>									
				</div>
				<button className="reply__send ml-2" type="submit">
					<img src={sendImg} alt="Send" />
				</button>
			</form>
		);
	}
}