import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import { Comment }  from '../Comment'
import { Post } from '../components/Post';



describe("integration between Post and Comment components", () => {

  const Mock = [
    {
      id:1,
      author: {
        avatarUrl: "https://media.licdn.com/dms/image/v2/C4D03AQHcyYIhfjRCHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616358409180?e=1735171200&v=beta&t=jw3KFDxVlO6OyrFVN7QOF6ZXZOfTkWF3J2k-LyMX_J0",
        name: 'Marlon Santana',
        role: 'Desenvolvedor Front-end'
      },
      content: [
        { type: 'paragraph', content: "este é um paragrafo."},
        { type: 'paragraph', content: "este é o segundo paragrafo "},
        {type:  'link', content: 'https://www.google.com'}
      ],
      publishedAt: new Date('2024-11-14 06:00:00'),
    },
    {
      id:2,
      author: {
        avatarUrl: "https://media.licdn.com/dms/image/v2/C4D03AQHcyYIhfjRCHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616358409180?e=1735171200&v=beta&t=jw3KFDxVlO6OyrFVN7QOF6ZXZOfTkWF3J2k-LyMX_J0",
        name: 'Diego Fernandes',
        role: 'CTO Rocketseat'
      },
      content: [
        { type: 'paragraph', content: "Lorem ipsum, dolor sit expedita natus modi placeat tempora nam similique voluptatibus cumque."},
        { type: 'paragraph', content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam maxime alias ullam nam animi beatae quos repudiandae sunt. Consequuntur at temporibus expedita natus modi placeat tempora nam similique amet consectetur adipisicing elit. Quibusdam maxime alias ullam nam animi beatae quos repudiandae sunt. Consequuntur at temporibus  "},
        {type:  'link', content: 'https://www.google.com'},
        {type:  'link', content: '#Rocketseat'}
      ],
      publishedAt: new Date('2024-10-25 08:00:00'),
    },
     
     
  ]
  

  test('renders Post and its Comments', () => {
    render(<Post {...Mock[0]} />);

    expect(screen.getByText("este é um paragrafo.")).toBeInTheDocument()
  
     // Adiciona um novo comentário
  const textarea = screen.getByPlaceholderText('Deixe um comentário');
  fireEvent.change(textarea, { target: { value: 'Novo Comentário' } });
  fireEvent.click(screen.getByRole('button', { name: /Publicar/i }));

  // Verifica se o novo comentário é exibido no componente Comment
  expect(screen.getByText('Novo Comentário')).toBeInTheDocument();
  });
  
})