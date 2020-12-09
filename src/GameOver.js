import React from "react";
import "./Styles.css";



const GameOver = props => {

    let ui = (
        <div>
            <h1> Game Over: {props.name}</h1>
            <h2> Your sored: {props.score || 0}</h2>
            <h3> Yuor highest score: {props.highestScore || 0}</h3>
            <button
                onClick={props.clicked}
                style={{
                    alignSelf: "center",
                    width: "40%",
                    transition: "all 0.3 ease",
                    textTransform: "uppercase",
                    outline: 0   
                }}>

                {" "}
                Play again 
            </button>
        </div>
    );
    

    return <div className="gameover-frame">{ui}</div>;
}; 

export default GameOver