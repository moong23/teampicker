import styled from "styled-components";

export const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60vw;
  justify-content: space-between;
  color: #e90783;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 4vh;
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
