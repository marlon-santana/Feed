
// Unit tests for: Post

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import { formatPublishedDate, formatPublishedDateRelativeToNow } from '../../Utils';
import { Post } from '../index';
import "@testing-library/jest-dom";

// Mocking the necessary modules
jest.mock("../../Utils", () => {
  const originalModule = jest.requireActual("../../Utils");
  return {
    __esModule: true,
    ...originalModule,
    formatPublishedDate: jest.fn(),
    formatPublishedDateRelativeToNow: jest.fn(),
  };
});

jest.mock("../../Avatar", () => ({
  Avatar: () => <div>Mocked Avatar</div>,
}));

jest.mock("../../Comment/index", () => ({
  Comment: ({ deleteComment, comment }) => (
    <div>
      <span>{comment}</span>
      <button onClick={deleteComment}>Delete</button>
    </div>
  ),
}));

jest.mock("../Post.module.css", () => ({
  wrapper: 'wrapper',
  post: 'post',
  authorInfo: 'authorInfo',
  content: 'content',
  formComent: 'formComent',
  commentList: 'commentList',
}));

describe('Post() Post method', () => {
  const mockAuthor = {
    name: 'John Doe',
    role: 'Developer',
    avatarUrl: 'avatar.png',
  };

  const mockContent = [
    { type: 'paragraph', content: 'This is a paragraph.' },
    { type: 'link', content: 'This is a link.' },
  ];

  const mockPublishedAt = new Date();

  beforeEach(() => {
    formatPublishedDate.mockReturnValue('October 22, 2024');
    formatPublishedDateRelativeToNow.mockReturnValue('2 days ago');
  });

  describe('Happy Path', () => {
    it('should render the post with author information and content', () => {
      render(<Post author={mockAuthor} content={mockContent} publishedAt={mockPublishedAt} />);

      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Developer')).toBeInTheDocument();
      expect(screen.getByText('This is a paragraph.')).toBeInTheDocument();
      expect(screen.getByText('This is a link.')).toBeInTheDocument();
      expect(screen.getByText('2 days ago')).toBeInTheDocument();
    });

    it('should allow users to add a new comment', () => {
      render(<Post author={mockAuthor} content={mockContent} publishedAt={mockPublishedAt} />);

      const textarea = screen.getByPlaceholderText('Deixe um comentário');
      fireEvent.change(textarea, { target: { value: 'New Comment' } });
      fireEvent.click(screen.getByRole('button', { name: /publicar/i }));

      expect(screen.getByText('New Comment')).toBeInTheDocument();
    });

    it('should allow users to delete a comment', () => {
      render(<Post author={mockAuthor} content={mockContent} publishedAt={mockPublishedAt} />);

      const textarea = screen.getByPlaceholderText('Deixe um comentário');
      fireEvent.change(textarea, { target: { value: 'Comment to delete' } });
      fireEvent.click(screen.getByRole('button', { name: /publicar/i }));

      const deleteButton = screen.getByText('Delete');
      fireEvent.click(deleteButton);

      expect(screen.queryByText('Comment to delete')).not.toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('should not allow submission of an empty comment', () => {
      render(<Post author={mockAuthor} content={mockContent} publishedAt={mockPublishedAt} />);

      const button = screen.getByRole('button', { name: /publicar/i });
      expect(button).toBeDisabled();
    });

    it('should display custom validity message when comment is invalid', () => {
      render(<Post author={mockAuthor} content={mockContent} publishedAt={mockPublishedAt} />);

      const textarea = screen.getByPlaceholderText('Deixe um comentário');
      fireEvent.invalid(textarea);

      expect(textarea.validationMessage).toBe('Esse campo é obrigatorio');
    });
  });
});

// End of unit tests for: Post
