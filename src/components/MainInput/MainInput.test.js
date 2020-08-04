import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainInput from './MainInput';

describe('MainInput components', () => {
	it('should call onSubmit func', () => {
		const props = {
			onSubmit: jest.fn(),
		};
		render(<MainInput {...props}/>);
		const form = screen.getByTestId('inputForm');
		fireEvent.submit(form);
		expect(props.onSubmit).toHaveBeenCalled();
	});

	it('should clear input after submission', () => {
		const props = {
			onSubmit: jest.fn(),
		};
		render(<MainInput {...props}/>);
		const form = screen.getByTestId('inputForm');
		const input = screen.getByTestId('input');
		userEvent.type(input, 'test value');
		fireEvent.submit(form);
		expect(input.nodeValue).toBe(null);
	});

	it('should set placeholder from props', () => {
		const placeholder = 'test';
		render(<MainInput placeholder={placeholder} />);
		const input = screen.getByTestId('input');
		expect(input.placeholder).toBe(placeholder);
	});
});