import { apiUrl } from "./apiConfig";

export const getPostComments = (postId) => 
	fetch(`${apiUrl}posts/${postId}/comments`)
	.then(response => response.json());