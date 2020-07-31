import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Sidebar.sass';

class Sidebar extends React.Component {
	render() {
		return (
			<div className="sidebar col-sm-3">
				<ul className="sidebar__ul">
					<li className="sidebar__li"><Link to={`/users/${this.props.user.id}`}>Моя страница</Link></li>
					<li className="sidebar__li"><Link to="/dialogues">Сообщения</Link></li>
					<li className="sidebar__li"><Link to="/friends">Друзья</Link></li>
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps)(Sidebar);