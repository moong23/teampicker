import { useState } from "react";

import { LineContainer, LineDiv, LineInput, RandomBtn } from "./Line.element";

const Line = () => {
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
      <RandomBtn
        onClick={RandomClicked}
        disabled={randombtnvalue === "random" ? "" : "disabled"}
      >
        {randombtnvalue}
      </RandomBtn>
    </LineDiv>
  );
};

export default Line;
