import React from 'react';
import { connect } from 'react-redux';

import './CommentFull.sass';
import Comment from '../Comment/Comment';
import MainInput from '../MainInput/MainInput';
import { getPostComments } from '../../services/postService';

class CommentFull extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
			toShowAll: false
		};
		this.showAllComments = this.showAllComments.bind(this);
		this.addComment = this.addComment.bind(this);
	}

	componentDidMount() {
		getPostComments(this.props.postId).then(res => this.setState({ comments: res }));
	}

	renderComments() {
		const num = this.state.toShowAll ? this.state.comments.length : 2;
		return this.state.comments.slice(0, num).map(comment => <Comment key={comment.id} comment={comment}/>);
	}

	showAllComments() {
		this.setState({ toShowAll: true });
	}

	addComment(value) {
		if(value === "") return;
		const comment = {
			email: this.props.user.email,
			body: value,
			id: this.state.comments.length ? this.state.comments[this.state.comments.length - 1].id + 1 : 100
		};
		this.setState({
			toShowAll: true,
			comments: [...this.state.comments, comment]
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className="comments-container">
					<div className="comment_outer">
						{this.renderComments()}
						{
							!this.state.toShowAll && this.state.comments.length > 2
							? <p className="bold-yellow"  style={{fontSize: '14px', marginBottom: '0'}} onClick={this.showAllComments}>Show more comments</p>
							: null 
						}
					</div>
				</div>
				<MainInput onSubmit={this.addComment} placeholder={"Reply..."}/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(CommentFull);