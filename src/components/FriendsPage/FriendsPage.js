import React from 'react';

import './FriendsPage.sass';
import catImg from '../../static/images/cat.jpeg';

class FriendsPage extends React.Component {
	render() {
		return (
			<div className="col-sm-8 flex flex-column grow-1-1">
				<div className="block-bg friend-requests">
					<h3 className="friend-requests__header">Friends requests <span className="ml-1">3</span></h3>
					<div className="friend-requests__request flex items-center mb-3">
						<a href="#" className="mr-2">
							<img src={catImg} alt="Avatar" className="circle-avatar" />
						</a>
						<div className="friend-requests__content flex flex-column">
							<a href="#" className="friend-name">Kir Ill</a>
							<div>
								<a href="#" className="btn btn_main">Accept</a>
								<a href="#" className="btn btn_secondary">Reject</a>
							</div>
						</div>
					</div>
					<div className="friend-requests__request flex items-center mb-3">
						<a href="#" className="mr-2">
							<img src={catImg} alt="Avatar" className="circle-avatar" />
						</a>
						<div className="friend-requests__content flex flex-column">
							<a href="#" className="friend-name">Kir Ill</a>
							<div>
								<a href="#" className="btn btn_main">Accept</a>
								<a href="#" className="btn btn_secondary">Reject</a>
							</div>
						</div>
					</div>
					<div className="friend-requests__request flex items-center mb-3">
						<a href="#" className="mr-2">
							<img src={catImg} alt="Avatar" className="circle-avatar" />
						</a>
						<div className="friend-requests__content flex flex-column">
							<a href="#" className="friend-name">Kir Ill</a>
							<div>
								<a href="#" className="btn btn_main">Accept</a>
								<a href="#" className="btn btn_secondary">Reject</a>
							</div>
						</div>
					</div>
				</div>
				<div className="block-bg friend-requests">
					<h3 className="friend-requests__header">Friends<span className="ml-1">10</span></h3>
					<div className="friend-requests__request flex items-center mb-3">
						<a href="#" className="mr-2">
							<img src={catImg} alt="Avatar" className="circle-avatar" />
						</a>
						<div className="friend-requests__content flex flex-column">
							<a href="#" className="friend-name">Kir Ill</a>
							<div>
								<a href="#" className="btn btn_main">Write a message</a>
							</div>
						</div>
					</div>
					<div className="friend-requests__request flex items-center mb-3">
						<a href="#" className="mr-2">
							<img src={catImg} alt="Avatar" className="circle-avatar" />
						</a>
						<div className="friend-requests__content flex flex-column">
							<a href="#" className="friend-name">Kir Ill</a>
							<div>
								<a href="#" className="btn btn_main">Write a message</a>
							</div>
						</div>
					</div>
					<div className="friend-requests__request flex items-center mb-3">
						<a href="#" className="mr-2">
							<img src={catImg} alt="Avatar" className="circle-avatar" />
						</a>
						<div className="friend-requests__content flex flex-column">
							<a href="#" className="friend-name">Kir Ill</a>
							<div>
								<a href="#" className="btn btn_main">Write a message</a>
							</div>
						</div>
					</div>
					<div className="friend-requests__request flex items-center mb-3">
						<a href="#" className="mr-2">
							<img src={catImg} alt="Avatar" className="circle-avatar" />
						</a>
						<div className="friend-requests__content flex flex-column">
							<a href="#" className="friend-name">Kir Ill</a>
							<div>
								<a href="#" className="btn btn_main">Write a message</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FriendsPage;