//* Main App Component
/*
The App component in the code provided acts as the main container for a Task Tracker application built using React. Here’s a brief overview of its structure and functionality:

1. Structure:

a. The App component organizes the user interface into a centralized container, using CSS classes from Tailwind CSS for layout and styling. This ensures the app is visually centered on the screen and has a clean, modern look.

2. Components Included:

a. TaskForm: A component where users can input and submit new tasks.

b. TaskList: A component that displays the current list of tasks with options to toggle their completion status and delete them.

c. Snackbar: A component used for displaying notifications or messages to the user, enhancing the interactivity and responsiveness of the application.
*/
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Snackbar from './components/snackbar';

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 rounded-lg shadow-md bg-white text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Task Tracker</h1>
        </div>
        <div className="mb-4">
          <TaskForm />
          <TaskList />
        </div>
        <Snackbar />
      </div>
    </div>
  );
}

export default App;
