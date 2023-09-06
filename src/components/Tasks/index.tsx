import * as C from "./styles";

import Task from "../Task";

import { Item } from "../../types/Item";

type Props = {
  tasks: Item[];
  deleteTask: (id: number) => void;
  taskLength: number;
};

const Tasks = ({ tasks, deleteTask, taskLength }: Props) => {
  return (
    <C.TasksContainer>
      <header>
        <div>
          <p>Tarefas pendentes</p>
          <span>{taskLength}</span>
        </div>
      </header>
      <C.ListContainer>
        {tasks.map((item, index) => (
          <Task key={index} item={item} deleteTask={deleteTask} />
        ))}
      </C.ListContainer>
    </C.TasksContainer>
  );
};

export default Tasks;
