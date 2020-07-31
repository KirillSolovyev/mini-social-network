import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.sass';
import img from '../../static/images/cat.jpeg';

class Header extends React.Component {
	render() {
		return (
			<header className="header p-2">
				<div className="container">
					<div className="row">
						<div className="col-sm-3">
							<Link to="/" className="header__logo">Tedarium</Link>
						</div>
						<div className="user-info flex justify-end user-info_mini col-sm-3 offset-sm-6">
							<Link to={`/users/${this.props.user.id}`} className="user-info__text flex items-center">
								{this.props.user.name}
								<img className="user-info__avatar ml-2" src={img} alt={this.props.user.name} />
							</Link>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(Header);