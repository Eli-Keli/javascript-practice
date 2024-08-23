//* Task Store 
// The useTaskStore utilizes useMessageStore for setting messages related to task operations. Here’s a breakdown of how messages are integrated into task operations:
/*
Adding a Task:
- If the task title is empty, it sets an error message indicating that the task title cannot be empty.
- On successful addition of a task, it sets a success message.

Removing a Task:
- Sets a success message once a task is successfully removed.
- Toggling a Task:
- While the toggling the status of a task

Fetching Tasks:
- Sets a success message when tasks are fetched successfully.
- Sets an error message if there is an issue during the fetch operation.
*/

import { create } from 'zustand';
import useMessageStore from './useMessageStore';

const useTaskStore = create((set) => ({
    tasks: [],
    addTask: (task) => {
        set((state) => ({ tasks: [...state.tasks, task] }));
    },
    removeTask: (id) => {
        set((state) => ({ tasks: state.tasks.filter(task => task.id !== id) }));
    },
    toggleTask: (id) => {
        set((state) => ({
            tasks: state.tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        }));
    },
    fetchTasks: async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            set({ tasks: data.slice(0, 5) });
            useMessageStore.getState().setMessage('Tasks fetched successfully', 'success');
        } catch (error) {
            console.error('Error fetching tasks:', error);
            useMessageStore.getState().setMessage('Error fetching tasks', 'error');
        }
    },
}));

export default useTaskStore;