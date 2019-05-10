import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick={()=>alert('click')}>
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i}/>;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  // ReactDOM.render(
  //   // <Game />,
  //   document.getElementById('root')
  // );


function TimeLable (props) {
  return <h2>Current Time: {props.timeString}</h2>;
}

class Welcome extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({date:new Date()});
    }, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  render () {
    return (
    <div>
      <h1>
        First blood!
      </h1>
      <TimeLable timeString={this.state.date.toLocaleTimeString()} />
    </div>)
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));


  // function tick() {
  //   const tickDiv = (
  //     <div>
  //       <h1>
  //         First blood!
  //       </h1>
  //       <h2>Current Time: {new Date().toLocaleTimeString()}</h2>
  //     </div>
  //   );
  //   ReactDOM.render(tickDiv, document.getElementById('root'));
  // }
  
  // setInterval(tick,1000);
  //"/System/Library/Automator/Combine PDF Pages.action/Contents/Resources/join.py" -o PATH/TO/YOUR/MERGED/FILE.pdf /PATH/TO/ORIGINAL/1.pdf /PATH/TO/ANOTHER/2.pdf /PATH/TO/A/WHOLE/DIR/*.pdf
