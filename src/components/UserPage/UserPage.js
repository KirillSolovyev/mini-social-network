import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './UserPage.sass';
import catImg from '../../static/images/cat.jpeg';
import CreatePost from '../CreatePost/CreatePost';
import Post from '../Post/Post';
import { getUserPosts } from '../../redux/actions/actions';

class UserPage extends React.Component {
	componentDidMount() {
		if(this.props.user){
			this.props.getUserPosts(this.props.user.id);
		}
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		if(!prevProps.user || prevProps.user.id !== this.props.user.id){
			this.props.getUserPosts(this.props.user.id);
		}
	}

	render() {
		return (
			<div className="content col-sm-8">
				<div className="row">
					<div className="user-left col-sm-4">
						<div className="set-avatar">
							<img className="mb-2" src={catImg} alt="Avatar" />
							<div className="set-avatar__update-avatar">Edit</div>
						</div>
						<div className="block-bg friends-list">
							<Link className="friends-list__title" to="/friends">Friends 3</Link>
							<div className="flex wrap mt-2">
								<div className="flex flex-column friend-icon">
									<a href="#">
										<img src={catImg} alt="Avatar" className="circle-avatar mb-1" />
									</a>
									<a href="#" className="friend-icon__name">Kir Ill</a>
								</div>
								<div className="flex flex-column friend-icon">
									<a href="#">
										<img src={catImg} alt="Avatar" className="circle-avatar mb-1" />
									</a>
									<a href="#" className="friend-icon__name">Kir Ill</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-8">
						<div className="block-bg user-data">
							<div className="user-data__block mb-2">
								<h3 className="user-data__name">Kir Ill</h3>
							</div>
							<div>
								<p className="user-data__item">
									Address:
									<span className="user-data__span ml-1">
										{this.props.user.address && `${this.props.user.address.city} ${this.props.user.address.street}`}
									</span>
								</p>
								<p className="user-data__item">
									Phone number:
									<span className="user-data__span ml-1">
										{this.props.user.phone}
									</span>
								</p>
								<p className="user-data__item">
									Company:
									<span className="user-data__span ml-1">
										{this.props.user.company && this.props.user.company.name}
									</span>
								</p>
							</div>
						</div>
						<CreatePost />
						{ 
							this.props.user && this.props.user.posts
							? this.props.user.posts.map(post => <Post key={post.id} post={post} author={this.props.user} />)
							: <div>Loading...</div>
						}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps, { getUserPosts })(UserPage);