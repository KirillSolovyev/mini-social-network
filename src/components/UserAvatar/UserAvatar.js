import React from 'react';

import catImg from '../../static/images/cat.jpeg';

export default function UserAvatar(user, isSelf) {
	return (
		<div className="set-avatar">
			<img className="mb-2" src={catImg} alt={user.name} />
			<div className="set-avatar__update-avatar">Edit</div>
		</div>
	);	
}