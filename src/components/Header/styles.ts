import styled from "styled-components";

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9em;
  position: relative;
  background-color: #00943b;
`;

export const FormHeader = styled.div`
  position: absolute;
  bottom: -6.25em;
  height: 15.6em;
  width: 100%;
  max-width: 736px;
  border-radius: 0px 0px 22px 22px;
  background-color: #1f6000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  span {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5em;
  }

  img {
    width: 200px;
    margin-top: 20px;
    margin-left: 20px;
  }
`;

export const TaskForm = styled.div`
  height: 3.8em;
  width: 100%;
  max-width: 736px;
  display: flex;
  gap: 8px;
  padding: 0 1rem;
  margin-bottom: 18px;

  input {
    flex: 1;
    padding: 0 16px;
    font-size: 16px;
    margin-bottom: 10px;
    height: 100%;
    color: #0c0c0c;

    border-radius: 8px;
    border: 1px solid #bcbcbc;
    background-color: #f0f0f0;
    outline: none;
  }
`;

export const TaskInput = styled.input`
  color: #0c0c0c;
`;

export const CreateButton = styled.button`
  padding: 0 16px;
  background: #0096f0;
  color: #fff;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 14px;
`;
