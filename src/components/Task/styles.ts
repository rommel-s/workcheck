import styled from "styled-components";

export const TaskContainer = styled("div")<{ done: boolean }>`
  width: 100%;
  background: ${(props) => (props.done ? "#D2D2D2" : "#ececec")};
  padding: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  input[type="checkbox"] {
    width: 15px;
    height: 15px;
    accent-color: #1f6000;
    background: none;
  }

  p {
    font-size: 16px;
    line-height: 20px;
    color: #262626;
    margin-right: auto;
    text-decoration: ${(props) => (props.done ? "line-through" : "initial")};
  }

  &:hover {
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25);
  }

  button {
    background: none;
    outline: none;
    border: none;
    color: #1f6000;
  }
`;
