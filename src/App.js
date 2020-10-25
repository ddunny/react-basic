import React, { useState } from "react";
import "./App.css";

function App() {
  // 하나의 컴포넌트
  let [글제목, 글제목변경] = useState([
    "제목을 만들어낼 수 이따",
    "test",
    "사랑니뺌",
    "장마",
  ]);

  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false); // 모달창을 켜고 닫는 스튀지 (사이트 첫로드시 모달창 안보임)
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState("");

  function 제목변경() {
    var newArray = [...글제목]; // deep copy
    newArray[0] = "여자코트 추천";
    글제목변경(newArray);
  }

  function 글추가(data) {
    var newArray = [...글제목];
    newArray.unshift(data);
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목변경}>버튼</button>

      {글제목.map((글, 인덱스) => {
        return (
          <div className="list" key={인덱스}>
            <h3
              onClick={() => {
                누른제목변경(인덱스);
              }}
            >
              {글}
              <span
                role="img"
                onClick={() => {
                  따봉변경(따봉 + 1);
                }}
                aria-label="good"
              >👍
              </span>{" "}
              {따봉}{" "}
            </h3>
            <p>2월 18일 발행</p>
            <hr />
          </div>
        );
      })}

      {/* <div className="publish">
        <input id="newWrite" />
        <button onClick = { () => 글추가(document.getElementById('newWrite').value) }>저장</button>
      </div> */}
      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            var newArray = [...글제목];
            newArray.unshift(입력값);
            글제목변경(newArray);
          }}
        >
          저장
        </button>
      </div>

      <button onClick={() => modal변경(!modal)}>열고닫기</button>

      {modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null}
    </div>
  );
}

function Modal({ 글제목, 누른제목 }) {
  return (
    <div className="modal">
      <h2>{글제목[누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
