import styled from "styled-components";

export const Btndiv = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? "skyblue" : "pink")};
  &:hover {
    cursor: pointer;
  }
`;

export const CustomBtn = styled.button`
  background-color: white;
  font-size: 24px;
  box-shadow: 3px 3px 5px 1px #d6d6d6;
  height: 60px;
  width: 200px;
  margin-top: 3vh;
  border-radius: 16px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #ffe6e9;
    transition: 1s;
  }
`;
