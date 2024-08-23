//* TaskForm Component
/*
The TaskForm component is a functional React component that allows users to input and submit new tasks. It uses the useState hook to manage the text input and the useTaskStore hook from Zustand to add tasks to the global state. Here’s a brief overview of its functionality:

- useState Hook: Initializes and updates the input field’s text.
- useTaskStore: Accesses the addTask function from Zustand to handle adding new tasks.
- Form Handling: Uses handleSubmit to prevent default form behavior, add the task, and reset the input field on submission.
*/
import { useState } from 'react';
import useTaskStore from '../store/useTaskStore';

const TaskForm = () => {
    const [text, setText] = useState('');
    const addTask = useTaskStore(state => state.addTask);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ id: Date.now(), title: text, completed: false });
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter task..."
                className="p-2 mr-2 w-60 border rounded-md border-gray-300"
            />
            <button type="submit" className="p-2 rounded-md bg-green-500 text-white">
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;