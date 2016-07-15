var VerticalLine = function(props) {
	var divStyle = { marginLeft: props.left + 'px' };
	return (
  	<div className="vertical-line" style={divStyle} />
  )
};

var HorizontalLine = function(props) {
	var divStyle = { marginTop: props.top + 'px' };
  return (
  	<div className="horizontal-line" style={divStyle} />
  );
}

var WhiteCircle = function(props) {
  var divStyle = {
  	marginTop: props.top + 'px',
    marginLeft: props.left + 'px'
  };
  return (
  	<div className="white-circle" style={divStyle}>
    	{ props.isActive ?
      	<div 
        	className="black-circle"
          onClick={() => props.onClick(props.id)} /> : ''}
    </div>
  );
}

class Game extends React.Component {
	constructor(props) {
  	super(props);
    
    this.state = {
    	score: 0,
    	circleId: 5,
    };
    
    this.clickCircle = this.clickCircle.bind(this);
  }
  
  clickCircle(id) {
  	let nextCircleId = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
  	let nextState = {
    	score: this.state.score + 1,
      circleId: nextCircleId,
    };
    console.log(nextState.score);
  	this.setState(nextState);
  }
  
	render() {
    var verticalLines = [];
    var horizontalLines = [];
    var whiteCircles = [];

    for(let i = 1; i < 5; i++) {
      var left = i * (80);
      verticalLines.push(<VerticalLine left={left} />);
    }

    for(let i = 1; i < 5; i++) {
      var top = i * (80);
      horizontalLines.push(<HorizontalLine top={top} />);
    }
		
    let id = 0;
    for(let i = 1; i < 5; i++) {
      let left = i * (80) - 2;
      for(let j = 1; j < 5; j++) {
      	id++;
        let top = j * (80) - 2;
      
        whiteCircles.push(
          <WhiteCircle
          	id={id}
          	left={left}
            top={top}
            isActive={this.state.circleId === id}
            onClick={this.clickCircle}
           />);
      }
    }

    return (
      <div className="game-background">
        { verticalLines }
        { horizontalLines }
        { whiteCircles }
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);
