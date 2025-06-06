import { useState } from "react";
import { nanoid } from "nanoid";
import TodoItem from "./components/TodoItem";
import AddTaskForm from "./components/AddTaskForm";
import AddTaskModal from "./components/AddTaskModal";

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

interface AppProps {
  tasks: Task[];
}

function App(props: AppProps) {
  const [taskList, setTaskList] = useState<Task[]>(props.tasks);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function addTask(taskName: string): void {
    const newTask: Task = {
      id: `todo-${nanoid()}`,
      name: taskName,
      completed: true,
    };
    setTaskList([...taskList, newTask]);
    setIsModalOpen(false);
  }

  function toggleTaskCompleted(id: string): void {
    const updatedTasks = taskList.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTasks);
  }

  function deleteTask(id: string): void {
    let updatedTasks: Task[] = [];
    taskList?.map((task) => {
      if (id !== task.id) {
        updatedTasks.push(task);
      }
    });
    setTaskList(updatedTasks);
  }

  function onCloseRequested(): void {
    setIsModalOpen(false);
  }

  return (
    <>
      <AddTaskModal
        isOpen={isModalOpen}
        onCloseRequested={onCloseRequested}
      >
        <AddTaskForm onNewTask={addTask} />
      </AddTaskModal>

      <main className="ml-4 mr-4">
        {" "}
        {/* Tailwind: margin level 4 on all sides */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 mt-4 p-1 pr-2 pl-2 rounded-md text-white"
        >
          New Task
        </button>
        <section className="">
          <h1 className="text-xl font-bold pt-1">To do</h1>
          <ul>
            {[
              taskList?.map((task) => (
                <TodoItem
                  id={task.id}
                  name={task.name}
                  completed={task.completed}
                  key={task.id}
                  toggleTaskCompleted={toggleTaskCompleted}
                  deleteTask={deleteTask}
                />
              )),
            ]}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
