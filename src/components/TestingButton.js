import React, { useState } from 'react';

function TestingButton() {
	const [buttonColor, setButtonColor] = useState('red');
	const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
	return (
		<div>
			<button style={{ backgroundColor: buttonColor }}
            onClick={()=>setButtonColor(newButtonColor) }
            >
				Change to {newButtonColor}
			</button>
		</div>
	);
}

export default TestingButton;
