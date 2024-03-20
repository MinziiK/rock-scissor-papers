import { useState } from 'react';
import './App.css';
import Box from "./component/Box"


// 1. box 2개 그리기 (title, img, result)
// 2. BUTTON rock scissor paper
// 3. 버튼 클릭하면 클릭한 값이 box에 뜸
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3, 4의 결과를 보고 승패 분석
// 6. 승패 결과에 따라 테두리 색 변경 (승리-red, 패배-green, 비김-black)

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

function App() {
  const [userSelect, setUserSelect] = useState(choice.default);
  const [computerSelect, setComputerSelect] = useState(choice.default);
  const [result, setResult] = useState("initial");
  const [comResult, setComResult] = useState("initial");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    setComResult(comJudgement(judgement(choice[userChoice], computerChoice)));
  };

  const judgement = (user, computer) => {
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

  const comJudgement = (result) => {
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

  const randomChoice =()=>{
    let itemArray = Object.keys(choice);  // 객체에 키 값만 뽑아서 어레이로 만들어주는 함수.
    let randomItem = Math.floor(Math.random()*(itemArray.length-1));
    let final = itemArray[randomItem]

    return choice[final];
  }

  return (
    <div>
      <div className="title">
        <h1>가위바위보 게임!</h1>
      </div>
      <div className="main">
        <Box title="YOU" item={userSelect} result={result}/>
        <Box title="COMPUTER" item={computerSelect} result={comResult}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
