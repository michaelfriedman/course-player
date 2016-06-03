import React from 'react';
import ReactDOM from 'react-dom';

import cardPlayer from 'components/card-player';
const CardPlayer = cardPlayer(React);

const store = {
  courseTitle: 'My Course',
  cardContent: 'Contents...',
  isCompleted: false,
  cardList: [
    {
      id: '1',
      name: 'Card 1'
    },
    {
      id: '2',
      name: 'Card 2'
    },
    {
      id: '3',
      name: 'Card 3'
    }
  ],
  currentCardId: '1'
};

ReactDOM.render(
  <CardPlayer { ...store } />,
  document.getElementById('root')
);
