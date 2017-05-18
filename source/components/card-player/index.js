export default React => {
  const CardListItem = (card) => (<li class='card-list-item'>{ card.name }</li>);

  return ({ courseTitle, cardContent, isCompleted, cardList }) => (
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
          <button className='button' disabled={isCompleted ? '' : 'disabled'}>
            Continue
          </button>
        </div>
      </div>
      <div className='card-list'>
        <ul>
          {
          cardList.map(CardListItem)
          }
        </ul>
      </div>
    </div>
  );
};
