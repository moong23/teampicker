import styled from "styled-components";

export const LineDiv = styled.div`
  margin-bottom: 2vh;
  /* background-color: green; */
  border-radius: 12px;

  box-shadow: 3px 3px 5px 1px #d6d6d6;
  padding: 1vh 2vw;
`;
export const LineTopDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

export const LineH1 = styled.h2`
  margin: 1vh 0;
`;
export const LineFixBtn = styled.button`
  background-color: white;
  border: none;
  box-shadow: 3px 3px 5px 1px #d6d6d6;
  height: 20px;
  width: 60px;
  font-size: 8px;
  border-radius: 8px;
  position: absolute;
  left: 0;

  &:hover {
    cursor: pointer;
  }
`;
export const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 45vw;
  justify-content: space-between;
  color: #e90783;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 2vh;
`;

export const LineInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  font-size: 16px;
  font-weight: ${(props) => (props.value ? "bold" : "normal")};
  &:focus {
    outline: none;
  }
`;

export const RandomBtn = styled.button`
  background-color: white;
  font-size: 16px;
  box-shadow: 3px 3px 5px 1px #d6d6d6;
  height: 30px;
  width: 100px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
