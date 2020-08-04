import '@testing-library/jest-dom';
import React from 'react';
import { render } from '../tests/custom-render'; 
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Post from './Post';

describe("Post component", () => {
	const props = {
		author: {
			id: 1,
			name: "Test name"
		},
		post: {
			id: 1,
			body: "Hello World!"
		}
	};

	it("should render props", () => {
		render(<Post { ...props }/>);
		expect(screen.getByText(props.author.name).textContent).toBe(props.author.name);
		expect(screen.getByText(props.post.body).textContent).toBe(props.post.body);
	});

	it('should change icon when like is clicked', () => {
		render(<Post { ...props }/>);
		const likeBtn = screen.getByTestId('likeBtn');
		userEvent.click(likeBtn);
		expect(likeBtn.classList).toContain('post__icon_like-active');
		userEvent.click(likeBtn);
		expect(likeBtn.classList).not.toContain('post__icon_like-active');
	});

	it('should display image if passed in props', () => {
		const propsWithImg = {
			...props, 
			post: {
				...props.post,
				image: 'test.jpg'
			}
		};
		render(<Post { ...propsWithImg }/>);
		expect(screen.getByTestId('postImage'));
	});
});