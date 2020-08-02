import React from 'react';

import './Comment.sass';
import catImg from '../../static/images/cat.jpeg';

export default class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: Math.floor(Math.random() * Math.floor(500)),
			isLiked: false
		};
		this.handleClickLike = this.handleClickLike.bind(this);
	}

	handleClickLike() {
		this.setState((state, props) => ({ 
			likes: state.likes + (state.isLiked ? -1 : 1),
			isLiked: !state.isLiked
		}));
	}

	render() {
		return (
			<div className="flex comment">
				<p className="mr-3 comment__author-avatar">
					<img src={catImg} alt="Avatar" />
				</p>
				<div className="comment__content">
					<p className="comment__author">{this.props.comment.email}</p>
					<p className="comment__text">{this.props.comment.body}</p>
					<div className="flex justify-between comment__footer">
						<div className="flex">
							<span className="comment__date mr-2">3 hours ago</span>
						</div>
						<span 
							className={`flex items-center comment__likes ${this.state.isLiked ? 'comment__likes-active' : ''}`} 
							onClick={this.handleClickLike}
						>{this.state.likes}</span>
					</div>
				</div>
			</div>
		);
	}
}