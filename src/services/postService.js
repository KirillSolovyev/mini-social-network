import { apiUrl } from "./apiConfig";

export const getUserPosts = (userId) => 
	fetch(`${apiUrl}posts/?userId=${userId}`)
	.then(response => response.json());

export const getPostComments = (postId) => 
	fetch(`${apiUrl}posts/${postId}/comments`)
	.then(response => response.json());