import React, { useState } from 'react';
import { Form,Button,FormGroup,FormCheck} from 'react-bootstrap';



function SummaryForm() {
	const [toChecked, setToChecked] = useState(false);

	const checkboxLabel = (
		<span>
			I agree to <span style={{ color: 'blue' }}>Terms and Conditions</span>
		</span>
	);

	return (
		<Form>
			<FormGroup>
				<FormCheck
					type='checkbox'
					checked={toChecked}
					onChange={(e) => setToChecked(e.target.checked)}
					label={checkboxLabel}
				/>
			</FormGroup>
			<Button variant='primary' type='submit' disabled={!toChecked}>Confirm Order</Button>
		</Form>
	);
}

export default SummaryForm;
