import React from 'react';
import { connect } from 'react-redux';

import MainInput from '../MainInput/MainInput';
import { createPost } from '../../redux/actions/actions';

class CreatePost extends React.Component {
	createPost(value) {
		if(value === "") return;
		this.props.createPost(this.props.user.id, { body: value, id: this.props.user.posts[this.props.user.posts.length - 1].id + 100 });
	}

	render() {
		return (
			<div className="block-bg create-post">
				<MainInput onSubmit={(e) => this.createPost(e)} placeholder={"Publish..."}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps, { createPost })(CreatePost);