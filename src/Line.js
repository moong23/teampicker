import { useState } from "react";

import {
  LineContainer,
  LineDiv,
  LineFixBtn,
  LineH1,
  LineInput,
  LineTopDiv,
  RandomBtn,
} from "./Line.element";

const Line = ({ name }) => {
  const [leftname, setLeftName] = useState("");
  const [rightname, setRightName] = useState("");
  const [randombtnvalue, setRandomBtnValue] = useState("random");

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
    Math.random() > 0.5 ? NameChange() : console.log("no change");
    setTimeout(() => {
      setRandomBtnValue("3");
    }, 0);
    setTimeout(() => {
      setRandomBtnValue("2");
    }, 1000);
    setTimeout(() => {
      setRandomBtnValue("1");
    }, 2000);
    setTimeout(() => {
      setRandomBtnValue("random");
    }, 3000);
    console.log("random clicked");
  };
  return (
    <LineDiv>
      <LineTopDiv>
        <LineFixBtn>라인고정</LineFixBtn>
        <LineH1>{name}</LineH1>
      </LineTopDiv>
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
    </LineDiv>
  );
};

export default Line;
