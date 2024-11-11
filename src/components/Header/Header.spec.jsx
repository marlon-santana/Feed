import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './index'; 



describe(
    'Component Header', () => {
        it('should render Header component', () => {
            render(<Header />)
        })

        it('should render Header component with Logo', () => {
            const { getByRole } = render(<Header />)

           const imgElement =  getByRole('img');
           expect(imgElement).toBeInTheDocument()

           expect(imgElement).toHaveAttribute('src')

        })
    }
)