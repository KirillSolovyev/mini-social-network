import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.sass';

export default class Sidebar extends React.Component {
	render() {
		return (
			<div className="sidebar col-sm-3">
				<ul className="sidebar__ul">
					<li className="sidebar__li"><Link to="/user">Моя страница</Link></li>
					<li className="sidebar__li"><Link to="/dialogues">Сообщения</Link></li>
					<li className="sidebar__li"><Link to="/friends">Друзья</Link></li>
				</ul>
			</div>
		);
	}
}