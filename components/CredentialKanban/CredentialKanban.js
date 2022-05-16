import React from 'react';
import Board, { moveCard } from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import Card from "./Card.js";


const Credentialkanban = ({ board, setBoard, _handleShowCredentialDetail, enqueueSnackbar }) => {
    const _handleCardMove = (_card, source, destination) => {
        // if (!_card.verified) {
        //     enqueueSnackbar("Credential unverifed!", {
        //         variant: "error",
        //       });
        // } else {
            console.log("source: ", source)
            console.log("destination: ", destination)
            const updatedBoard = moveCard(board, source, destination);
            setBoard(updatedBoard)
            if (destination.toColumnId == 2) {
                _handleShowCredentialDetail(_card.id);
            }
        // }
    }

    return (
        <Board
            onCardDragEnd={_handleCardMove}
            disableColumnDrag
            renderCard={(content, { removeCard, dragging }) => (
                <Card 
                    content={content} 
                    dragging={dragging} 
                    _handleShowCredentialDetail={_handleShowCredentialDetail}
                />
            )}
        >
            {board}
        </Board>
    );
}

export default Credentialkanban;