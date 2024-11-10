
// // Unit tests for: Comment

// import React from 'react'
// import { fireEvent, render, screen } from '@testing-library/react';
// import { Comment } from '../index';
// import "@testing-library/jest-dom";

// // Mocking the Avatar component
// jest.mock("../../Avatar", () => ({
//   Avatar: ({ hasBorder, src }) => <img alt="avatar" src={src} data-has-border={hasBorder} />
// }));

// // Mocking the styles
// jest.mock("../Comment.module.css", () => ({
//   comment: 'comment',
//   commentBox: 'commentBox',
//   commentContent: 'commentContent',
//   authorAndTime: 'authorAndTime',
// }));

// describe('Comment() Comment method', () => {
//   const mockDeleteComment = jest.fn();

//   // Happy path tests
//   describe('Happy Path', () => {
//     it('should render the comment with the provided text', () => {
//       render(<Comment comment="This is a test comment" deleteComment={mockDeleteComment} />);
//       expect(screen.getByText('This is a test comment')).toBeInTheDocument();
//     });

//     it('should increment like count when like button is clicked', () => {
//       render(<Comment comment="Another test comment" deleteComment={mockDeleteComment} />);
//       const likeButton = screen.getByRole('button', { name: /aplaudir/i });
//       fireEvent.click(likeButton);
//       expect(screen.getByText('1')).toBeInTheDocument();
//     });

//     it('should call deleteComment when delete button is clicked', () => {
//       render(<Comment comment="Yet another test comment" deleteComment={mockDeleteComment} />);
//       const deleteButton = screen.getByTitle('Deletar comentário');
//       fireEvent.click(deleteButton);
//       expect(mockDeleteComment).toHaveBeenCalled();
//     });
//   });

//   // Edge case tests
//   describe('Edge Cases', () => {
//     it('should not render a paragraph if the comment is an empty string', () => {
//       render(<Comment comment="" deleteComment={mockDeleteComment} />);
//       expect(screen.queryByText('')).not.toBeInTheDocument();
//     });

//     it('should handle multiple like button clicks correctly', () => {
//       render(<Comment comment="Test comment for multiple likes" deleteComment={mockDeleteComment} />);
//       const likeButton = screen.getByRole('button', { name: /aplaudir/i });
//       fireEvent.click(likeButton);
//       fireEvent.click(likeButton);
//       fireEvent.click(likeButton);
//       expect(screen.getByText('3')).toBeInTheDocument();
//     });
//   });
// });

// // End of unit tests for: Comment
