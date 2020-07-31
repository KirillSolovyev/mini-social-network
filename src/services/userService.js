import { apiUrl } from "./apiConfig";

export const getUsers = (userIds) => 
	fetch(`${apiUrl}users?id=${userIds.join('&id=')}`)
	.then(response => response.json());