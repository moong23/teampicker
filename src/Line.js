import { useState } from "react";

import { LineContainer, LineInput, RandomBtn } from "./Line.element";

const Line = () => {
  const [leftname, setLeftName] = useState("");
  const [rightname, setRightName] = useState("");
  const LeftNameChanged = (e) => {
    setLeftName(e.target.value);
    console.log(e.target.value);
  };
  const RightNameChanged = (e) => {
    setRightName(e.target.value);
    console.log(e.target.value);
  };
  const NameChange = () => {
    setLeftName(rightname);
    setRightName(leftname);
  };

  const RandomClicked = () => {
    alert("랜덤 버튼이 눌렸습니다.");
    console.log("random clicked");
    Math.random() > 0.5 ? NameChange() : console.log("no change");
  };
  return (
    <>
      <LineContainer>
        <LineInput
          type="text"
          placeholder="이름을 입력해주세요"
          value={leftname || ""}
          onChange={LeftNameChanged}
        />
        VS
        <LineInput
          type="text"
          placeholder="이름을 입력해주세요"
          value={rightname || ""}
          onChange={RightNameChanged}
        />
      </LineContainer>
      <RandomBtn onClick={RandomClicked}>random</RandomBtn>
    </>
  );
};

export default Line;
