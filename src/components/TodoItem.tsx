import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface TodoItemProps {
  id: string;
  name: string;
  completed: boolean;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
}

function TodoItem(props: TodoItemProps) {
  return (
    <li className="p-1">
      <label htmlFor={props.id}>
        <input
          type="checkbox"
          id={props.id}
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />{" "}
        {props.name}
      </label>
      <button onClick={() => props.deleteTask(props.id)}>
        <FontAwesomeIcon icon={faTrash} className="ml-5 text-gray-600" />
      </button>
    </li>
  );
}

export default TodoItem;
