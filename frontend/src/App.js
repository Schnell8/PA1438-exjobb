import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedView from "./components/ProtectedView";
import StartView from './views/01-Start';
import RegisterView from './views/02-Register';
import DashboardView from './views/03-Dashboard';
import './App.css';

const App = () => {
    const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

    return (
        <Router>
            <Routes>
                <Route path='/' element={<StartView />} />
                <Route path='/register' element={<RegisterView />} />
                <Route element={<ProtectedView isAuthenticated={isAuthenticated} />}>
                    <Route path='/dashboard' element={<DashboardView />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
