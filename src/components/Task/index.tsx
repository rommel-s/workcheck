import { useState } from "react";

import * as C from "./styles";

import { TbTrash } from "react-icons/tb";

import { Item } from "../../types/Item";

type Props = {
  item: Item;
  deleteTask: (id: number) => void;
};

const Task = ({ item, deleteTask }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.TaskContainer done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <p>{item.name}</p>
      <button onClick={() => deleteTask(item.id)}>
        <TbTrash size={20} />
      </button>
    </C.TaskContainer>
  );
};

export default Task;
