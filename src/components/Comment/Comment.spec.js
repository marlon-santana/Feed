import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Comment }  from '../Comment'


describe('Comment component ', () => {

    it('should render comment component', () => {
       render(<Comment />) 
    })


    it('should receive the comment and deleteComment props', () => {
        const mockDeleteComment = jest.fn();
        const testComment = 'Este é um comentário de teste';

        render(<Comment comment={testComment} deleteComment={mockDeleteComment} />);

        // Verifica se o comentário está sendo renderizado
        expect(screen.getByText(testComment)).toBeInTheDocument();

        // Verifica se o botão de deletar está presente
        const deleteButton = screen.getByTitle('Deletar comentário');
        expect(deleteButton).toBeInTheDocument();

        // Verifica se a função deleteComment foi passada corretamente
        deleteButton.click();
        expect(mockDeleteComment).toHaveBeenCalled();
    });


    it('deve aumentar os likes ao clicar no botão Aplaudir', () => {
        const mockDeleteComment = jest.fn();
        const testComment = 'Este é um comentário de teste';
    
        // Renderiza o componente Comment
        const { getByRole } = render(
            <Comment 
                comment={testComment} 
                deleteComment={mockDeleteComment} 
            />
        );
    
        const likeButton = getByRole('button', { name: /Aplaudir/i });
    
        fireEvent.click(likeButton); 
        fireEvent.click(likeButton); 
        fireEvent.click(likeButton); 
    
        // Verifica se o contador de likes foi incrementado
        const likeCountElement = likeButton.querySelector('span'); // Obtém o elemento que exibe o contador de likes
        expect(likeCountElement.textContent).toBe('3'); // Verifica se o contador de likes é 1 após o clique
    });

    })




/*

1- verificar se o componente renderizou ---ok
2- verificar se o componente possui todas as propriedades ---ok
3- verificar se o comment é deletado quando é clicado na lixeira --ok
4- verificar se o contador aplaudir aumenta quando o botão e clicado --ok
5- verificar se ta salvando comentário em vazio
 */