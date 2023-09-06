import { useState, KeyboardEvent } from "react";

import * as C from "./styles";

import Clock from "../Clock";

import logo from "../../assets/logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";

type Props = {
  createTask: (addedTask: string) => void;
};

const Header = ({ createTask }: Props) => {
  const [inputTask, setInputTask] = useState("");

  const addNewTask = () => {
    if (inputTask !== "") {
      createTask(inputTask);
      setInputTask("");
    } else {
      console.log("nao tem nada nessa porra");
    }
  };

  const handleEnterKey = (e: KeyboardEvent) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      addNewTask();
    }
  };

  return (
    <C.MainHeader>
      <C.FormHeader>
        <span>
          <img src={logo} alt="workCheck" />
          <Clock />
        </span>

        <C.TaskForm>
          <input
            placeholder="Nova tarefa"
            type="text"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
            onKeyUp={handleEnterKey}
          />

          <C.CreateButton onClick={addNewTask}>
            Criar
            <AiOutlinePlusCircle size={20} />
          </C.CreateButton>
        </C.TaskForm>
      </C.FormHeader>
    </C.MainHeader>
  );
};

export default Header;
