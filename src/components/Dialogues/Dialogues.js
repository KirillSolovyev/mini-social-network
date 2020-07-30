import React from 'react';
import PropTypes from "prop-types";
import { Route, Switch, Link, withRouter } from 'react-router-dom';

import './Dialogues.sass';
import Chat from '../Chat/Chat';
import catImg from '../../static/images/cat.jpeg';

class Dialogues extends React.Component {
	static propTypes = {
	    match: PropTypes.object.isRequired
	};

	render() {
		const { match } = this.props;
		return (
			<Switch>
				<Route exact path={match.path}>
					<div className="block-bg content col-sm-8 grow-1-1">
						<Link to={`${match.url}/23`}>
							<div className="dialog-preview flex items-center mb-3">
								<div className="dialog-preview__user-avatar mr-3">
									<img className="circle-avatar" src={catImg} alt="Avatar" />
								</div>
								<div className="dialog-preview__content">
									<div className="flex justify-between">
										<p className="dialog-preview__user-name">Kir Ill</p>
										<span className="dialog-preview__date">Jul 25</span>
									</div>
									<div className="dialog-preview__text flex justify-between">
										<p>Hello World!</p>
										<span className="dialog-preview__unread-msg flex items-center">10</span>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</Route>
				<Route path={`${match.url}/:id`}>
					<Chat />
				</Route>
			</Switch>
		);
	}
}

export default withRouter(Dialogues);