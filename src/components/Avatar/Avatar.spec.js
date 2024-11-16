/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from '../Avatar/index.jsx';


describe('Avatar component ', () => {
     it('should render component', () => {
        render(<Avatar src="https://media.licdn.com/dms/image/v2/C4D03AQHcyYIhfjRCHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616358409180?e=1735171200&v=beta&t=jw3KFDxVlO6OyrFVN7QOF6ZXZOfTkWF3J2k-LyMX_J0" />)
        
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', 'https://media.licdn.com/dms/image/v2/C4D03AQHcyYIhfjRCHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616358409180?e=1735171200&v=beta&t=jw3KFDxVlO6OyrFVN7QOF6ZXZOfTkWF3J2k-LyMX_J0');
     })

     it('should render component without border', () => {
      render(<Avatar src='https://media.licdn.com/dms/image/v2/C4D03AQHcyYIhfjRCHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616358409180?e=1735171200&v=beta&t=jw3KFDxVlO6OyrFVN7QOF6ZXZOfTkWF3J2k-LyMX_J0'
      border={false}/>)
      
      const img = screen.getByRole('img');
      expect(img).not.toHaveClass('hasNotBorder');
     })

     it('should render component with border', () => {

      render(<Avatar src='https://media.licdn.com/dms/image/v2/C4D03AQHcyYIhfjRCHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616358409180?e=1735171200&v=beta&t=jw3KFDxVlO6OyrFVN7QOF6ZXZOfTkWF3J2k-LyMX_J0'/>)
         const img = screen.getByRole('img');
         expect(img).not.toHaveAttribute('img', 'border');
     })

     it('should render component without src', () => {
      render(<Avatar />)
      const img = screen.getByRole('img');
      expect(img).toHaveAttribute('src', 'https://as2.ftcdn.net/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg');

     })
      
})


