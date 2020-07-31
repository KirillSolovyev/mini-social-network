import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './UserPage.sass';
import catImg from '../../static/images/cat.jpeg';
import CreatePost from '../CreatePost/CreatePost';
import Post from '../Post/Post';
import UserAvatar from '../UserAvatar/UserAvatar';
import { getUsers } from '../../services/userService';

class UserPageInner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: []
		};
	}

	componentDidUpdate(prevProps) {
		if(this.props.user && (!prevProps.user || prevProps.user.id !== this.props.user.id)) {
			if(this.props.user.friends) this.getFriends();
		}
	}

	getFriends() {
		getUsers(this.props.user.friends)
		.then(res => this.setState({ friends: res }));
	}

	renderFriends() {
		const { match: { url: urlWithParams } } = this.props;
		const url = urlWithParams.slice(0, urlWithParams.lastIndexOf('/'));
		return (
			this.state.friends.length
			? this.state.friends.map(friend => (
				<div key={friend.id} className="flex flex-column friend-icon">
					<Link to={`${url}/${friend.id}`}>
						<img src={catImg} alt={friend.name} className="circle-avatar mb-1" />
					</Link>
					<Link to={`${url}/${friend.id}`} className="friend-icon__name">
						{friend.name}
					</Link>
				</div>
			))
			: <div>Loading...</div>
		);
	}

	render() {
		return (
			<div className="content col-sm-8">
				<div className="row">
					<div className="user-left col-sm-4">
						<UserAvatar user={this.props.user} isSelf={this.props.isSelf}/>
						{
							this.props.isSelf
							? (
								<div className="block-bg friends-list">
									<Link className="friends-list__title" to="/friends">
										Friends 
										{ this.props.user.friends.length }
									</Link>
									<div className="flex wrap mt-2">
										{ this.renderFriends() }
									</div>
								</div>
							)
							: null
						}
					</div>
					<div className="col-sm-8">
						<div className="block-bg user-data">
							<div className="user-data__block mb-2">
								<h3 className="user-data__name">{ this.props.user && this.props.user.name }</h3>
							</div>
							<div>
								<p className="user-data__item">
									Address:
									<span className="user-data__span ml-1">
										{ this.props.user && `${this.props.user.address.city} ${this.props.user.address.street}` }
									</span>
								</p>
								<p className="user-data__item">
									Phone number:
									<span className="user-data__span ml-1">
										{ this.props.user && this.props.user.phone }
									</span>
								</p>
								<p className="user-data__item">
									Company:
									<span className="user-data__span ml-1">
										{ this.props.user && this.props.user.company.name }
									</span>
								</p>
							</div>
						</div>
						{ this.props.isSelf ? <CreatePost /> : null }
						{ this.props.posts && this.props.posts.map(post => <Post key={post.id} post={post} author={this.props.user} />) }
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(UserPageInner);