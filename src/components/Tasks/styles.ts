import styled from "styled-components";

export const TasksContainer = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 120px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  header {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    border-bottom: 2px solid #1f6000;
  }

  header div {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }

  header p {
    color: #4ea8de;
    font-size: 14px;
    font-weight: 700;
  }

  header span {
    background: #333333;
    color: #d9d9d9;
    padding: 3px 9px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
  }
`;

export const ListContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;
