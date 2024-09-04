import { Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';

const Dashboard = () => {

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>

            {/* Nested routes within the Dashboard component */}
            <Routes>

                {/* Nested route for Profile */}
                <Route path="/profile" element={<Profile />} />
                {/* Nested route for Settings */}
                <Route path="/settings" element={<Settings />} />
            </Routes>

        </div>
    );
};

export default Dashboard