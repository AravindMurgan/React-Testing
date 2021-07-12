import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../summary/SummaryForm';

test('initial conditions', () => {
	render(<SummaryForm />);

	const checkbox = screen.getByRole('checkbox');
	const button = screen.getByRole('button', { name: /confirm order/i });

	expect(checkbox).not.toBeChecked();

	expect(button).toBeDisabled();
});

test('enable disable checkbox and button', () => {
	render(<SummaryForm />);
	const checkbox = screen.getByRole('checkbox');
	const button = screen.getByRole('button', { name: /confirm order/i });
	//enable checkbox and button//
	userEvent.click(checkbox);
	expect(button).toBeEnabled();
	///disable checkbox and button//
	userEvent.click(checkbox);
	expect(button).toBeDisabled();
});

test('popover responds to hover', () => {
	//popover starts out hidden//
	const nullPopover = screen.queryByText(
		/no icecream will actually be delivered/i
	);
	expect(nullPopover).not.toBeInTheDocument();
	//popover appears when we hover//
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);
    const popover = screen.getByText(/no icecream will actually be delivered/i);
    expect(popover).toBeInTheDocument()
    //popover disappear when we hover out//
    userEvent.unhover(termsAndConditions);
    const nullPopOverAgain = screen.queryByText(/no icecream will actually be delivered/i);
    expect(nullPopOverAgain).not.toBeInTheDocument();
});
