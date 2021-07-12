import React, { useState } from 'react';
import { Button, Form, FormCheck, FormGroup,OverlayTrigger,Popover } from 'react-bootstrap';

function SummaryForm() {
	const [toChecked, setToChecked] = useState(false);

	const popover = (
		<Popover id='popover-basic'>
			<Popover.Content>no icecream will actually be delivered</Popover.Content>
		</Popover>
	);

	const checkboxLabel = (
		<OverlayTrigger placement='right' overlay={popover}>
			<span>
				I agree to <span style={{ color: 'blue' }}>Terms and Conditions</span>
			</span>
		</OverlayTrigger>
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
			<Button variant='primary' type='submit' disabled={!toChecked}>
				Confirm Order
			</Button>
		</Form>
	);
}

export default SummaryForm;
