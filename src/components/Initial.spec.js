import React from 'react';
import { render, screen } from '@testing-library/react';
import { Initial } from './Initial';

test('renders hello world', () => {
    render(<Initial />);
    expect(screen.getByText(/Olá, mundo!/i)).toBeInTheDocument();
});