import React from 'react';
import { Link } from 'react-router-dom';

import catImg from '../../static/images/cat.jpeg';

export default class UserAvatar extends React.Component {
	render() {
		return (
			<div className="set-avatar">
				<img className="mb-2" src={catImg} alt={this.props.user && this.props.user.name} />
				{
					this.props.isSelf
					? <div className="set-avatar__update-avatar">Edit</div>
					: (
						<React.Fragment>
							<Link to={`/dialogues/${this.props.user && this.props.user.id}`} className="set-avatar__update-avatar mb-2">Write a message</Link>
							<div className="set-avatar__update-avatar set-avatar__update-avatar_inactive">Remove from friend</div>
						</React.Fragment>
					)
				}
			</div>
		);
	}	
}