import React from 'react';
import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import Card from "./Card.js";


const Credentialkanban = ({ board }) => {
    return (
        // <Board initialBoard={board} />
        <Board
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