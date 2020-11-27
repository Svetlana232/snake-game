import React from "react";
import './Styles.css';


const GameOver = props => {

    let ui = (
        <div>
            <h1> Game Over: {props.name}</h1>
            <h2> Your scored: {props.score || 0}</h2>
            <h3> Your highest score: {props.highestScore || 0}</h3>
            <button
                onClick={props.Clicked}
                style={{
                    alignSelf: "center",
                    width: "20%",
                    transition: "all 0.3 ease",
                    textTransform: "uppercase",
                    outline: 0
                    // background: "#4caf50"
                  }}
              
            >
                {" "}
                Play again 
            </button>
        </div>
    );


    if (props.isPoused) {
        ui = (
            <div>
                <h1> GAME PAUSED</h1>
                <h2> Tap spacebar or button below to resume</h2>
                <button onClick={props.resumeGame}>Resume</button>
            </div>
        );
    }
    return <div style={styleMedia.scoreStyle}>{ui}</div>;
} 

export default GameOver