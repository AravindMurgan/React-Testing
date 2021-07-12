import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import SummaryForm from '../summary/SummaryForm';

describe('summary-form-testing', () => {
	render(<SummaryForm />);

	test('checkbox and button', () => {
		const checkbox = screen.getByRole('checkbox');
		const button = screen.getByRole('button');
        //checkbox default//
        expect(checkbox).not.toBeChecked();

		///click checkbox and enable button//
        fireEvent.click(checkbox)
        expect(button).toBeEnabled();

        //uncheck and disable button//
        fireEvent.click(checkbox);
        expect(button).toBeDisabled();
	});


});
