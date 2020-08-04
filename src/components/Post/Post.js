import React from 'react';
import { Link } from 'react-router-dom';

import './Post.sass';
import catImg from '../../static/images/cat.jpeg';
import commentIcon from '../../static/images/comment.svg';
import repostIcon from '../../static/images/repost.svg';
import viewsIcon from '../../static/images/watch.svg';
import CommentFull from '../CommentFull/CommentFull';

export default class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLiked: false,
			likes: (() => props.post.id * 13 + props.author.id)(),
			views: (() => props.author.id * 103 + props.post.id * 9)()
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
			<div className="post">
				<div className="post-inner">
					<div className="post__header mb-4">
						<Link className="flex items-center post__author" to={`/users/${this.props.author.id}`}>
							<img className="post__avatar mr-2" src={catImg} alt="Avatar" />
							{this.props.author.name}
						</Link>
					</div>
					<div className="post__content">
						<p className="post__text">{this.props.post.body}</p>
						{
							this.props.post.image 
							? <img className="post__image" src={catImg} alt="Img" data-testid="postImage"/>
							: null
						}
					</div>
					<div className="flex items-center justify-between post__footer mt-3">
						<div className="flex">
							<p 
								className={`flex items-center post__icon post__icon_like mr-3 ${this.state.isLiked ? 'post__icon_like-active' : ''}`}
								onClick={this.handleClickLike}
								data-testid="likeBtn"
							>
								<span className="post-like-count">{this.state.likes}</span>
							</p>
							<p className="post__icon mr-3">
								<img src={commentIcon} alt="Like" />
							</p>
							<p className="post__icon">
								<img src={repostIcon} alt="Like" />
							</p>
						</div>
						<div className="views">
							<img src={viewsIcon} alt="Views" className="mr-1"/>
							<span className="views-count">{this.state.views}</span>
						</div>
					</div>
				</div>
				<div className="post__comments">
					<CommentFull postId={this.props.post.id}/>
				</div>
			</div>
		);
	}
}