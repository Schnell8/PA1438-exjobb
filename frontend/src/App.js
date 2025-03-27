import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StartView from './views/01-Start';
import RegisterView from './views/02-Register';
import DashboardView from './views/03-Dashboard';

import './App.css';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<StartView />} />
          <Route path='/register' element={<RegisterView />} />
          <Route path='/dashboard' element={<DashboardView />} />
        </Routes>
      </Router>
  );
};

export default App;
