export default React => ({ courseTitle, cardContent, isCompleted }) => (
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
        <li className='card-list-item currrent-card'>Card 1</li>
        <li className='card-list-item'>Card 2</li>
        <li className='card-list-item'>Card 3</li>
      </ul>
    </div>
  </div>
);
