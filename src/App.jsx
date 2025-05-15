import { useState } from 'react';
import TodoItem from './components/TodoItem';
import AddTaskForm from './components/AddTaskForm';

function App({ tasks: initialTasks }) {
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = (name) => {
        const newTask = {
            id: `todo-${tasks.length}`,
            name: name,
            completed: false
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const taskList = tasks.map((task) => (
        <TodoItem
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            deleteTask={deleteTask}
        />
    ));

    return (
      <main className="m-4"> {/* Tailwind: margin level 4 on all sides */}
          <section>
              <h1 className="text-xl font-bold">To do</h1>
              <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                {taskList}
               </ul>
          </section>
      </main>
  );
}

export default App;