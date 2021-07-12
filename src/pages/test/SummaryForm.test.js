import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../summary/SummaryForm';

test('initial conditions', () => {
	render(<SummaryForm />);

	const checkbox = screen.getByRole('checkbox', {
		name: /terms and conditions/i,
	});
	const button = screen.getByRole('button', { name: /confirm order/i });

	expect(checkbox).not.toBeChecked();

	expect(button).toBeDisabled();
});

test('enable disable checkbox and button', () => {
	render(<SummaryForm />);
	const checkbox = screen.getByRole('checkbox', {
		name: /terms and conditions/i,
	});
	const button = screen.getByRole('button', { name: /confirm order/i });
    //enable checkbox and button//
	fireEvent.click(checkbox);
	expect(button).toBeEnabled();
    ///disable checkbox and button//
	fireEvent.click(checkbox);
	expect(button).toBeDisabled();
});
