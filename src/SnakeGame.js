import React, { Component } from "react";
import Snake from "./Snake";
import Food from "./Food";
import GameOver from "./GameOver";
import "./Styles.css";



function getRandom(max, min) {
  return Math.floor((Math.random() * (max - min * 1) * min) / 2) * 2;
};

const getRandomCoordinates = () => {
  const min = 1;
  const max = 98;
  const x = getRandom(max, min);
  const y = getRandom(max, min);
  const position = [x, y];
  return position;
};

const initialState = {
  food: getRandomCoordinates(),
  direction:"RIGHT",
  speed: 200,
  snakeDots: [
    [0,0],
    [2,0],
  ],
  showGameArea: null,
  isGamePaused: false 
};



class SnakeGame extends Component {

  state = initialState;



  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.addEventListener("keydown", this.onKeyPressed);
  }

  componentWillUnmount () {
    document.removeEventListener("keydown", this.onKeyPressed);
  }


  componentDidUpdate() {
  
  }

  onKeyPressed = (e) => {
    switch (e.keyCode) {
      case 38:
        this.setState({ direction: "UP" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        break;
      default:
    }
  };

  toggleGamePlay = () => {
    this.setState({ isGamePaused: !this.state.isGamePaused });
    if (this.state.isGamePaused) {
      
    } else {
     
    }
  };

  moveSnake = () => {
    
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    const [x, y] = head;

    switch (this.state.direction) {
      case "RIGHT":
        head = [x + 2, y];
        break;
      case "LEFT":
        head = [x - 2, y];
        break;
      case "DOWN":
        head = [x, y + 2];
        break;
      case 'UP':
        head = [x, y - 2];
        break;
      default:
        head = dots[dots.length - 1];
    }

    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots
    });
    this.checkIfOutOfBorders(dots);
    this.checkIfCollapsed(dots);
    this.checkIfEat(dots);

  }

  checkIfOutOfBorders(snakeDots) {
    
    let head = snakeDots[snakeDots.length - 1];
    const [x, y] = head;
    if (x >= 100 || y >= 100 || x < 0 || y < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed(snakeDots) {
    
    let snake = [...snakeDots];
    let head = snake[snake.length - 1];
    const [x, y] = head;
    snake.pop();
    snake.forEach(dot => {
      if (x === dot[0] && y === dot[1]) {
        this.onGameOver();
      }
    });
  }

  checkIfEat(snakeDots) {
    
    let head = snakeDots[snakeDots.length - 1];
    let food = this.state.food;
    const [x, y] = head;
    if (x === food[0] && y === food[1]) {
      this.setState({
        food: getRandomCoordinates()
      });
      this.enlargeSnake();

    }
  }

  enlargeSnake() {
    
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake
    });
  }



  onGameOver() {
    alert(`Game Over. Snake length is ${this.state.snakeDots}`);
    this.setState(initialState);
  }

  onPlayAgainClicked = () => {
    this.setState(initialState);
  };


  render() {
    return (

      <div>

        
        
        <div className="game-area">  

          <div className="frame">
            <Snake snakeDots={this.state.snakeDots} />
            <Food dot={this.state.food} />
          </div>

          <GameOver  
            score={this.state.snakeDots.length - 2}
            highestScore={this.props.highestScore || 0}
            name={this.props.name || "Player 1"}
            clicked={this.onPlayAgainClicked}
          />

        </div>
 
      </div>
      
    );
  }
}

export default SnakeGame;
