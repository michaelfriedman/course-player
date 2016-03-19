export default React => ({ courseTitle, cardContent, isCompleted }) => (
  <div className="card-player">
    <div className="nav-bar">
      <h1 className="course-title">{ courseTitle }</h1>
      <nav className="nav">
        <select>
          <option>Card 1</option>
          <option>Card 2</option>
          <option>Card 3</option>
        </select>
      </nav>
    </div>
    <div className="card-content">{ cardContent }</div>
    <div className="next-card">
      <div className="spacer"></div>
      <button className="button"
        disabled={ isCompleted ? '' : 'disabled' }>Continue</button>
    </div>
  </div>
);
