function Application(props){
  return(
    <div className="scoreboard">
      <div className="header">
      <h1>{props.title}</h1>
      </div>

      <div className="players">
        <div className="player">
          <div className="player-name">
          Peter Pess
          </div>
          <div className="player-score">
            <div className ="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 35 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
      </div>

      <div className="player">
        <div className="player-name">
        Heike Schrunz
        </div>
        <div className="player-score">
          <div className ="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score"> 564 </div>
            <button className="counter-action increment"> + </button>
          </div>
        </div>
    </div>
    </div>
  </div>
  );
}

ReactDOM.render(<Application title="My Scoreboard"/>, document.getElementById('container'));
