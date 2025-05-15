import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem(props) {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button 
                    className="btn btn__danger text-gray-500"
                    onClick={() => props.deleteTask(props.id)}
                >
                    <FontAwesomeIcon icon={faTrash} title="Delete task" />
                </button>
            </div>
        </li>
    );
}

export default TodoItem;