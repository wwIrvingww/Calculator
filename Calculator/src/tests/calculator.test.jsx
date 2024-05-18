// Calculator.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import Calculator from '../Views/Calculator';

describe('Calculator component', () => {
  it('renders Calculator component', () => {
    render(<Calculator />);
    const displayElement = screen.getByTestId('result');
    expect(displayElement).toBeInTheDocument();
    expect(displayElement.textContent).toBe('');
  });

  it('displays number when a button is clicked', () => {
    render(<Calculator />);
    const button1 = screen.getByText('1');
    fireEvent.click(button1);
    const displayElement = screen.getByTestId('result');
    expect(displayElement.textContent).toBe('1');
  });

  it('displays multiple numbers when buttons are clicked', () => {
    render(<Calculator />);
    const button1 = screen.getByText('1');
    const button2 = screen.getByText('2');
    fireEvent.click(button1);
    fireEvent.click(button2);
    const displayElement = screen.getByTestId('result');
    expect(displayElement.textContent).toBe('12');
  });

  it('clears the display when the clear button is clicked', () => {
    render(<Calculator />);
    const button1 = screen.getByText('1');
    const clearButton = screen.getByText('Clear');
    fireEvent.click(button1);
    fireEvent.click(clearButton);
    const displayElement = screen.getByTestId('result');
    expect(displayElement.textContent).toBe('');
  });

  it('performs addition operation', () => {
    render(<Calculator />);
    const button1 = screen.getByText('1');
    const buttonPlus = screen.getByText('+');
    const button2 = screen.getByText('2');
    const equalsButton = screen.getByText('=');
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button2);
    fireEvent.click(equalsButton);
    const displayElement = screen.getByTestId('result');
    expect(displayElement.textContent).toBe('3');
  });

  it('handles invalid operations gracefully', () => {
    render(<Calculator />);
    const button1 = screen.getByText('1');
    const buttonPlus = screen.getByText('+');
    const equalsButton = screen.getByText('=');
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonPlus);
    fireEvent.click(equalsButton);
    const displayElement = screen.getByTestId('result');
    expect(displayElement.textContent).toBe('Error');
  });

  it('performs subtraction operation', () => {
    render(<Calculator />);
    const button5 = screen.getByText('5');
    const buttonMinus = screen.getByText('-');
    const button2 = screen.getByText('2');
    const equalsButton = screen.getByText('=');
    fireEvent.click(button5);
    fireEvent.click(buttonMinus);
    fireEvent.click(button2);
    fireEvent.click(equalsButton);
    const displayElement = screen.getByTestId('result');
    expect(displayElement.textContent).toBe('3');
  });

  it('limits the input to 9 digits', () => {
    render(<Calculator />);
    const button1 = screen.getByText('1');
    for (let i = 0; i < 10; i++) {
      fireEvent.click(button1);
    }
    const displayElement = screen.getByTestId('result');
    expect(displayElement.textContent).toBe('111111111');
  });

  it('allows input from the keyboard', () => {
    render(<Calculator />);
    const displayElement = screen.getByTestId('result');
    fireEvent.keyDown(window, { key: '1' });
    fireEvent.keyDown(window, { key: '2' });
    fireEvent.keyDown(window, { key: '3' });
    expect(displayElement.textContent).toBe('123');
  });
});
