import React from 'react';
import { connect } from 'react-redux';

import CreatePost from '../CreatePost/CreatePost';
import Post from '../Post/Post';
import { getUserPosts } from '../../redux/actions/actions';

class Home extends React.Component {
	componentDidMount() {
		if(this.props.user){
			this.props.getUserPosts(this.props.user.id);
		}
	}

	render() {
		return (
			<div className="content col-sm-6">
				<CreatePost />
				{ 
					this.props.user && this.props.user.posts
					? this.props.user.posts.map(post => <Post key={post.id} post={post} author={this.props.user} />)
					: <div>Loading...</div>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, { getUserPosts })(Home);