import React, { Component } from 'react'
import './App.css';
import BoxClass from './component/BoxClass';

const choice = {
    rock: {
      name: "Rock",
      img: "https://static.vecteezy.com/system/resources/thumbnails/002/111/895/small/a-stone-meteorite-isolated-on-white-background-free-vector.jpg"
    },
    scissors: {
      name: "Scissors",
      img: "https://images.vexels.com/media/users/3/141161/isolated/preview/c3f445b9a9811b8f634f8616b9f9a61b-scissors-icon.png"
    },
    paper: {
      name: "Paper",
      img: "https://cdn-icons-png.flaticon.com/256/2541/2541988.png"
    },
    default: {
      name: "Default",
      img: "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/symbol_questionmark.png"
    }
  }

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userSelect: choice.default,
          computerSelect: choice.default,
          result: "initial",
          comResult: "initial"
        };
      }
    
      play = (userChoice) => {
        this.setState({ userSelect: choice[userChoice] });
        const computerChoice = this.randomChoice();
        this.setState({ computerSelect: computerChoice });
        const result = this.judgement(choice[userChoice], computerChoice);
        this.setState({ result: result });
        const comResult = this.comJudgement(result);
        this.setState({ comResult: comResult });
      };
    
      judgement = (user, computer) => {
        if(user.name === computer.name){
          return "tie"
        }
        else if(user.name === "Rock"){
          return computer.name === "Scissors"? "win":"lose"
        }
        else if(user.name === "Scissors"){
          return computer.name === "Paper"? "win":"lose"
        }
        else if(user.name === "Paper"){
          return computer.name === "Rock"? "win":"lose"
        }
      }
    
      comJudgement = (result) => {
        if (result === "tie") {
          return "tie"
        }
        else if (result === "win"){
          return "lose"
        }
        else if (result === "lose") {
          return "win"
        }
      }
    
      randomChoice =()=>{
        const itemArray = Object.keys(choice);
        const randomItem = Math.floor(Math.random()*(itemArray.length-1));
        const final = itemArray[randomItem];
        return choice[final];
      }
    
      render() {
        return (
          <div>
            <div className="title">
              <h1>가위바위보 게임!</h1>
            </div>
            <div className="main">
              <BoxClass title="YOU" item={this.state.userSelect} result={this.state.result}/>
              <BoxClass title="COMPUTER" item={this.state.computerSelect} result={this.state.comResult}/>
            </div>
            <div className="main">
              <button onClick={() => this.play("scissors")}>가위</button>
              <button onClick={() => this.play("rock")}>바위</button>
              <button onClick={() => this.play("paper")}>보</button>
            </div>
          </div>
        );
      }
    }