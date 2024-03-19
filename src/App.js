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
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className="main">
        <Box title="YOU" item={userSelect}/>
        {/* <Box title="COMPUTER"/> */}
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
