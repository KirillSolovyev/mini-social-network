import '@testing-library/jest-dom';
import React from 'react';
import { render } from '../tests/custom-render';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Comment from './Comment';

describe('Comment component', () => {
	const props = {
		comment: {
			id: 1,
			body: 'test',
			email: 'test'
		}
	};

	it('should render props', () => {
		render(<Comment { ...props }/>);
		expect(screen.getByTestId('commentAuthor').textContent).toBe(props.comment.email);
		expect(screen.getByTestId('commentBody').textContent).toBe(props.comment.body);
	});

	it('should change icon when clicked on like', () => {
		render(<Comment { ...props }/>);
		const likeBtn = screen.getByTestId('likeBtn');
		userEvent.click(likeBtn);
		expect(likeBtn.classList).toContain('comment__likes-active');
		userEvent.click(likeBtn);
		expect(likeBtn.classList).not.toContain('comment__likes-active');
	});
});