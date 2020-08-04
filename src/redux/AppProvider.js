import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

export default function AppProvider(props) {
	return(
		<Provider store={store}>
			{props.children}
		</Provider>
	);
}