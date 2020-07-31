import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.sass';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Sidebar from './components/Sidebar/Sidebar';
import { getUser } from './redux/actions/actions';

import Home from './components/Home/Home';
import UserPage from './components/UserPage/UserPage';
import Dialogues from './components/Dialogues/Dialogues';
import FriendsPage from './components/FriendsPage/FriendsPage';

class App extends React.Component {
	componentDidMount() {
		this.props.getUser(1);
	}

	renderContent() {
		return (
			<BrowserRouter>
				<Header />
				<MainSection>
					<Sidebar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path={`/users/:userId`}>
							<UserPage />
						</Route>
						<Route path="/dialogues">
							<Dialogues />
						</Route>
						<Route path="/friends">
							<FriendsPage />
						</Route>
						<Route path="*">
							<Redirect to="/" />
						</Route>
					</Switch>
				</MainSection>
			</BrowserRouter>
		);
	}

	renderLoader() {
		return <div>Loading...</div>;
	}

	render() {
		return this.props.user ? this.renderContent() : this.renderLoader();
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps, { getUser })(App);