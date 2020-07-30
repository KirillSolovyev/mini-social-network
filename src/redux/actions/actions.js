import { USER } from './actionTypes';

const apiUrl = "https://jsonplaceholder.typicode.com/";

export const getUser = (userId) => dispatch => 
	fetch(`${apiUrl}users/${userId}`)
	.then(response => response.json())
	.then(json => {
		dispatch({ type: USER.RETRIEVE, payload: json });
	});

export const getUserPosts = (userId) => dispatch =>
	fetch(`${apiUrl}posts?userId=${userId}`)
	.then(response => response.json())
	.then(json => {
		dispatch({ type: USER.POSTS, payload: json });
	});

export const createPost = (userId, data) => ({ type: USER.CREATE_POST, payload: { ...data, userId: userId } });