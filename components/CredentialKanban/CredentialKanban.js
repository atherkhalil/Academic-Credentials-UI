import React from 'react';
import Board, { moveCard } from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import Card from "./Card.js";


const Credentialkanban = ({ board, setBoard }) => {
    const _handleCardMove = (_card, source, destination) => {
        const updatedBoard = moveCard(board, source, destination);
        setBoard(updatedBoard)
    }

    return (
        <Board
            onCardDragEnd={_handleCardMove}
            disableColumnDrag
            renderCard={(content, { removeCard, dragging }) => (
                <Card content={content} dragging={dragging} />
            )}
        >
            {board}
        </Board>
    );
}

export default Credentialkanban;