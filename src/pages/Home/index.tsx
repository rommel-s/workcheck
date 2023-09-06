import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Tasks from "../../components/Tasks";

import { Item } from "../../types/Item";
import { Main } from "./styles";

const LOCAL_STORAGE_KEY = "todo:workcheck";

const Home = () => {
  const [taskList, setTaskList] = useState<Item[]>([]);

  const loadSavedTasklist = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTaskList(JSON.parse(saved));
    }
  };

  useEffect(() => {
    loadSavedTasklist();
  }, []);

  const saveTasklist = (savedTasks: any) => {
    setTaskList(savedTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedTasks));
  };

  const addedTaskHandler = (addedTask: string) => {
    let newTaskList = [...taskList];

    const idRandom = (num: number) => Math.floor(Math.random() * num);

    newTaskList.push({
      id: idRandom(99999999),
      name: addedTask,
      done: false,
    });

    saveTasklist(newTaskList);
  };

  const deleteTask = (id: any) => {
    let filteredItems = taskList.filter((item) => item.id !== id);

    saveTasklist(filteredItems);
  };

  const taskLength = taskList.length;

  return (
    <Main>
      <Header createTask={addedTaskHandler} />
      <Tasks tasks={taskList} deleteTask={deleteTask} taskLength={taskLength} />
    </Main>
  );
};

export default Home;
