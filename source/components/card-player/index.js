const makeClasses = (...classes) => {
  return classes.join(' ').trim();
};

export default React => {
  const CardListItem = ({ card, currentCardId }) => (
    <li key={card.id}
      className={
        makeClasses('card-list-item',
        card.id === currentCardId ? 'current-card' : ''
          )
        }
      >{ card.name }</li>
  );

  return ({ courseTitle, cardContent, isCompleted, cardList, currentCardId }) => (
    <div className='card-player'>
      <div className='nav-bar'>
        <h1 className='course-title'>{ courseTitle }</h1>
        <nav className='nav'>
          <select defaultValue='Card 1'>
            <option value='Card 1'>Card 1</option>
            <option value='Card 2'>Card 2</option>
            <option value='Card 3'>Card 3</option>
          </select>
        </nav>
      </div>
      <div className='card-container'>
        <div className='card-content'>{ cardContent }</div>
        <div className='next-card'>
          <div className='spacer' />
          <button className={makeClasses(
              'button btn',
              isCompleted ? 'btn-success' : ''
            )}
            disabled={isCompleted ? '' : 'disabled'}>Continue</button>
        </div>
      </div>
      <ul className='card-list'>
        {
          cardList.map(card => CardListItem({ card, currentCardId }))
          }
      </ul>
    </div>
  );
};
