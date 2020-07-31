import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import UserPageInner from './UserPageInner';
import { getUsers } from '../../services/userService';
import { getUserPosts as getOtherUserPosts } from '../../services/postService';
import { getUserPosts } from '../../redux/actions/actions';

class UserPage extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			user: null,
			posts: null,
			isSelf: false
		};
	}

	componentDidMount() {
		this.setUser();
	}

	componentDidUpdate(prevProps) {
		const { match: { params: prevParams } } = prevProps;
		const { match: { params } } = this.props;
		if(prevParams.userId !== params.userId) {
			this.setUser();
		}
	}

	setUser() {
		const { match: { params } } = this.props;
		if(this.props.user) {
			if(parseInt(params.userId) === this.props.user.id) {
				this.setState({ isSelf: true });
				this.props.getUserPosts(this.props.user.id);
			} else {
				getUsers([parseInt(params.userId)])
				.then(users => {
					return getOtherUserPosts(users[0].id).then(res => ({ user: users[0], posts: res }));
				})
				.then(res => this.setState({ user: res.user, posts: res.posts, isSelf: false }));
			}
		}
	}

	render() {
		return this.state.isSelf
				? <UserPageInner user={this.props.user} posts={this.props.user.posts} isSelf={this.state.isSelf}/>
				: <UserPageInner user={this.state.user} posts={this.state.posts} isSelf={this.state.isSelf}/>;
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps, { getUserPosts })(withRouter(UserPage));