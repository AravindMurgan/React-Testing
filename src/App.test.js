import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button color is red', () => {
    render(<App />);

    const colorBtn = screen.getByRole('button',{name: 'Change to blue'});

    expect(colorBtn).toHaveStyle({backgroundColor:'red'})

    fireEvent.click(colorBtn)

    expect(colorBtn).toHaveStyle({backgroundColor:'blue'})

    expect(colorBtn.textContent).toBe('Change to red')
});

test('button color changes to blue when clicked',()=>{



})
