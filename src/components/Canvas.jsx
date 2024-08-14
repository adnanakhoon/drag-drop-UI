import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Card from './Card';
import Xarrow from 'react-xarrows';
import './Canvas.css'; // Import the CSS file

const Canvas = () => {
  const [cards, setCards] = useState([
    {
      id: 'card-1',
      content: 'This is the first card. It contains some dummy text.',
      x: 0,
      y: 0,
    },
    {
      id: 'card-2',
      content: 'This is the second card. It also contains some dummy text.',
      x: 150,
      y: 100,
    },
    {
      id: 'card-3',
      content: 'This is the third card. It has more dummy text.',
      x: 300,
      y: 200,
    },
    {
      id: 'card-4',
      content: 'This is the fourth card. Yet more dummy text.',
      x: 450,
      y: 300,
    },
  ]);

  const handleAddCard = () => {
    const newCard = {
      id: `card-${cards.length + 1}`,
      content: 'This is some dummy text to demonstrate the card functionality in the drag-and-drop UI.',
      x: 0,
      y: 0,
    };
    setCards([...cards, newCard]);
  };

  const handleDrag = (e, data, index) => {
    const updatedCards = [...cards];
    updatedCards[index].x = data.x;
    updatedCards[index].y = data.y;
    setCards(updatedCards);
  };

  return (
    <div className="canvas-container">
      <button className="add-card-btn" onClick={handleAddCard}>Add Card</button>
      <div className="canvas">
        {cards.map((card, index) => (
          <Draggable
            key={card.id}
            position={{ x: card.x, y: card.y }}
            onDrag={(e, data) => handleDrag(e, data, index)}
          >
            <div id={card.id} className="card-wrapper">
              <Card content={card.content} />
            </div>
          </Draggable>
        ))}
        {cards.length > 1 && (
          <Xarrow start={cards[0].id} end={cards[cards.length - 1].id} />
        )}
      </div>
    </div>
  );
};

export default Canvas;
