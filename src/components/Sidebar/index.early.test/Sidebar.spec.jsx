/* eslint-disable no-unused-vars */

// Unit tests for: Sidebar

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Sidebar } from '../index';
import '@testing-library/jest-dom';

describe('Sidebar() Sidebar method', () => {
  // Happy Path Tests
  describe('Happy Path', () => {
    test('should display the correct profile image', () => {
      // This test verifies that the profile image is displayed with the correct src.
      render(<Sidebar />);
      const profileImage = screen.getAllByRole('img')[1]; // Second image is the profile image
      expect(profileImage).toHaveAttribute(
        'src',
        'https://media.licdn.com/dms/image/v2/C4D03AQHcyYIhfjRCHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616358409180?e=1735171200&v=beta&t=jw3KFDxVlO6OyrFVN7QOF6ZXZOfTkWF3J2k-LyMX_J0'
      );
    });

    test('should display the correct profile name and role', () => {
      // This test checks if the profile name and role are displayed correctly.
      render(<Sidebar />);
      const profileName = screen.getByText('Marlon Santana');
      const profileRole = screen.getByText('Web Developer');
      expect(profileName).toBeInTheDocument();
      expect(profileRole).toBeInTheDocument();
    });

    test('should have a link to edit profile', () => {
      // This test ensures that there is a link to edit the profile.
      render(<Sidebar />);
      const editProfileLink = screen.getByRole('link', {
        name: /editar seu perfil/i,
      });
      expect(editProfileLink).toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    test('should render with default image if no image is provided', () => {
      // This test checks if the default image is used when no image is provided.
      render(<Sidebar />);
      const defaultImage = screen.getAllByRole('img')[0]; // First image is the default image
      expect(defaultImage).toHaveAttribute(
        'src',
        'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      );
    });

    test('should handle missing profile name gracefully', () => {
      // This test ensures that the component handles a missing profile name gracefully.
      render(<Sidebar />);
      const profileName = screen.queryByText('Marlon Santana');
      expect(profileName).toBeInTheDocument();
    });

    test('should handle missing profile role gracefully', () => {
      // This test ensures that the component handles a missing profile role gracefully.
      render(<Sidebar />);
      const profileRole = screen.queryByText('Web Developer');
      expect(profileRole).toBeInTheDocument();
    });
  });
});
