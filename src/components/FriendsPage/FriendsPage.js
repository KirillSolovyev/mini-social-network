import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './FriendsPage.sass';
import catImg from '../../static/images/cat.jpeg';
import { getUsers } from '../../services/userService';

class FriendsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: []
		};
	}

	componentDidMount() {
		if(this.props.user) {
			getUsers(this.props.user.friends)
			.then(res => this.setState({ friends: res }));
		}
	}

	render() {
		return (
			<div className="col-sm-8 flex flex-column grow-1-1">
				<div className="block-bg friend-requests">
					<h3 className="friend-requests__header">Friends<span className="ml-1">{this.state.friends.length}</span></h3>
					{ 
						this.state.friends.map(friend => (
							<div key={friend.id} className="friend-requests__request flex items-center mb-3">
								<Link to={`/users/${friend.id}`} className="mr-2">
									<img src={catImg} alt={friend.name} className="circle-avatar" />
								</Link>
								<div className="friend-requests__content flex flex-column">
									<Link to={`/users/${friend.id}`} className="friend-name">{friend.name}</Link>
									<div>
										<Link to={`/dialogues/${friend.id}`} className="btn btn_main">Write a message</Link>
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps)(FriendsPage);