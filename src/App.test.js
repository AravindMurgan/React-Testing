import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button color is red', () => {
	render(<App />);

	const colorBtn = screen.getByRole('button', { name: 'Change to blue' });

	expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });

	fireEvent.click(colorBtn);

	expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' });

	expect(colorBtn.textContent).toBe('Change to red');
});

test('initial conditions', () => {
	render(<App />);
	//checking btn is enabled
	const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
	expect(colorBtn).toBeEnabled();

	//checking initial checkbox which is unchecked
	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
});

test('enable and disable button when checkbox is clicked', () => {
	render(<App />);

	const checkbox = screen.getByRole('checkbox');
	const colorBtn = screen.getByRole('button');

	///enable the checkbox and disable the button //
	fireEvent.click(checkbox);
	expect(colorBtn).toBeDisabled();

	///disable the checkbox and disable button //
	fireEvent.click(checkbox);
	expect(colorBtn).toBeEnabled();
});

test('button turns grey when disabled', () => {
	render(<App />);

	const checkbox = screen.getByRole('checkbox');
	const button = screen.getByRole('button');

	//button turns gray
	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'grey' });

	//enable button//
	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'red' });

	//change the button color,but when disabled button is gray//
	fireEvent.click(button);
	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'grey' });

	//enable button and color to be blue///
	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'blue' });
});
