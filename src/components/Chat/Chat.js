import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import './Chat.sass';
import MainInput from '../MainInput/MainInput';
import catImg from '../../static/images/cat.jpeg';
import { getUsers } from '../../services/userService';

class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			messages: []
		};
		this.addMessage = this.addMessage.bind(this);
	}

	componentDidMount() {
		if(this.props.user) {
			const { match: { params } } = this.props;
			getUsers([params.userId])
			.then(res => {
				this.setState({ 
					users: [this.props.user, ...res],
					messages: [
						{
							id: 1,
							user: this.props.user.id,
							text: 'Hello World!'
						},
						{
							id: 2,
							user: res[0].id,
							text: 'Hi World!'
						}
					]
				});
			});
		}
	}

	renderMessages() {
		return (
			this.state.messages.map(msg => {
				const user = this.state.users.filter(user => user.id === msg.user)[0];
				return (
					<div key={msg.id} className="chat__message message flex mb-3">
						<Link to={`/users/${user.id}`} className="mr-2">
							<img src={catImg} alt={user.name} className="circle-avatar" />
						</Link>
						<div className="message__content">
							<div className="message__header">
								<Link to={`/users/${user.id}`} className="message__author-name mr-1">{user.name}</Link>
								<span className="message__time">11:54</span>
							</div>
							<p>{msg.text}</p>
						</div>
					</div>
				);
			})
		);
	}

	addMessage(value) {
		if(value !== '') {
			const msgId = this.state.messages[this.state.messages.length - 1].id + 1;
			this.setState({
				messages: [...this.state.messages, { id: msgId, user: this.props.user.id, text: value }]
			});
		}
	}

	render() {
		return (
			<div className="chat col-sm-8 flex flex-column grow-1-1">
				<div className="block-bg chat__header flex justify-between items-center">
					<button onClick={this.props.history.goBack} className="btn-back">Back</button>
					<Link to={`/users/${this.props.user.id}`} className="chat__user-name">{this.props.user.name}</Link>
					<Link to={`/users/${this.props.user.id}`} className="chat__user-avatar">
						<img src={catImg} alt={this.props.user.name} className="circle-avatar" />
					</Link>
				</div>
				<div className="chat__box block-bg flex grow-1-1">
					<div className="chat__content flex flex-column grow-1-1">
						<div className="chat__messages-date">Jul 27</div>
						{ this.renderMessages() }
					</div>
				</div>
				<div className="block-bg chat__footer">
					<MainInput placeholder={'Write...'} onSubmit={this.addMessage} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps)(withRouter(Chat));