import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import App from '../App';


const NestedRoutesExample = () => (
    <Router>
        <div>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
            </nav>

            <Routes>
                {/* Route to Dashboard component */}
                <Route path="/dashboard" component={<Dashboard />} />
                {/* Default route to Home component */}
                <Route path="/" component={<App />}/>
            </Routes>

        </div>
    </Router>
);

export default NestedRoutesExample;