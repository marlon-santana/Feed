import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Post } from './index'; 



describe("Post Component", () => {

   const PostMock =  {
        id:1,
        author: {
          avatarUrl: "https://media.licdn.com/dms/image/v2/C4D03AQHcyYIhfjRCHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616358409180?e=1735171200&v=beta&t=jw3KFDxVlO6OyrFVN7QOF6ZXZOfTkWF3J2k-LyMX_J0",
          name: 'Marlon Santana',
          role: 'Desenvolvedor Front-end'
        },
        content: [
          { type: 'paragraph', content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam maxime alias ullam nam animi beatae quos repudiandae sunt. Consequuntur at temporibus expedita natus modi placeat tempora nam similique voluptatibus cumque."},
          { type: 'paragraph', content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam maxime alias ullam nam animi beatae quos repudiandae sunt. Consequuntur at temporibus expedita natus modi placeat tempora nam similique "},
          {type:  'link', content: 'https://www.google.com'}
        ],
        publishedAt: new Date('2024-10-25 06:00:00'),
      }
    
        it("should render component", () => {
            render(
            <Post 
                key={PostMock.id}
                author={PostMock.author}  
                publishedAt={PostMock.publishedAt}  
                content={PostMock.content} 
                />
            );
        })

    
        it(`should button be disabled if comment is empty`, () => {
            const { getByRole, container } = render(
                <Post 
                    key={PostMock.id}
                    author={PostMock.author}  
                    publishedAt={PostMock.publishedAt}  
                    content={PostMock.content}
                />
            );
        
            const publishButton = getByRole('button', { name: /Publicar/i });
            const textArea = getByRole("textbox");
        
            // Verifica se o botão está desabilitado inicialmente
            expect(publishButton).toBeDisabled();
        
            // Simula a digitação no textarea
            fireEvent.change(textArea, { target: { value: 'Algum comentário' } });

            // verifica se o comentário que  foi criado existe em tela
            expect(screen.getByText("Algum comentário")).toBeInTheDocument();

            // Verifica se o botão está habilitado após digitar
            expect(publishButton).not.toBeDisabled();
        
            // Limpa o textarea
            fireEvent.change(textArea, { target: { value: '' } });
        
            // Verifica se o botão volta a estar desabilitado
            expect(publishButton).toBeDisabled();
        });
})

/*
1- renderização componente --ok
2- verificar se o botão publicar fica desable quando nao  houver texto no campo --ok
3- tentar publicar sem texto --ok
4- publicar com texto e verificar se o texto apareceu em tela ---ok
 */