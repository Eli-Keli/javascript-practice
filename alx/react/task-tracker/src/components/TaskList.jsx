//* TaskList Component
/*
The TaskList component is a React component that uses the Zustand store to display and manage a list of tasks. It allows users to toggle completion status and remove tasks via interactive elements:

- Integration with Zustand: Accesses tasks, removeTask, and toggleTask from the Zustand store to manage the tasks list.
- List Rendering: Tasks are listed with checkboxes to toggle completion and buttons to remove them.
- Styling: Uses Tailwind CSS for styling, applying a line-through decoration for completed tasks.
*/

import useTaskStore from "../store/useTaskStore";

const TaskList = () => {
    const { tasks, removeTask, toggleTask } = useTaskStore();

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Task List</h2>
            <ul className="list-none p-0">
                {tasks.map(task => (
                    <li key={task.id} className={`flex items-center mb-2 p-2 rounded-md bg-gray-100`}>
                        <span className={`flex-grow mr-4 ${task.completed ? 'line-through' : ''}`}>
                            {task.title}
                        </span>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                            className="mr-2 h-4 w-4 text-green-500 cursor-pointer"
                        />
                        <button
                            onClick={() => removeTask(task.id)}
                            className="bg-red-500 text-white rounded-md py-1 px-2 cursor-pointer"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;