import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

import './Dialogues.sass';
import Chat from '../Chat/Chat';
import catImg from '../../static/images/cat.jpeg';
import { getUsers } from '../../services/userService';

class Dialogues extends React.Component {
	constructor(state) {
		super(state);
		this.state = {
			friends: []
		};
	}

	static propTypes = {
	    match: PropTypes.object.isRequired
	};

	componentDidMount() {
		if(this.props.user) {
			getUsers(this.props.user.friends)
			.then(res => this.setState({ friends: res }));
		}
	}

	renderDialogues(match) {
		return (
			this.state.friends.map(friend => (
				<Link to={`${match.url}/${friend.id}`} key={friend.id}>
					<div className="dialog-preview flex items-center mb-3">
						<div className="dialog-preview__user-avatar mr-3">
							<img className="circle-avatar" src={catImg} alt={friend.name} />
						</div>
						<div className="dialog-preview__content">
							<div className="flex justify-between">
								<p className="dialog-preview__user-name">{friend.name}</p>
								<span className="dialog-preview__date">Jul 25</span>
							</div>
							<div className="dialog-preview__text flex justify-between">
								<p>Hello World!</p>
								<span className="dialog-preview__unread-msg flex items-center">10</span>
							</div>
						</div>
					</div>
				</Link>
			))
		);
	}

	render() {
		const { match } = this.props;
		return (
			<Switch>
				<Route exact path={match.path}>
					<div className="block-bg content col-sm-8 grow-1-1">
						{ this.renderDialogues(match) }
					</div>
				</Route>
				<Route path={`${match.url}/:userId`}>
					<Chat />
				</Route>
			</Switch>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps)(withRouter(Dialogues));