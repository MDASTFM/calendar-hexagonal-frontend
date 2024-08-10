import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventCalendar from '../components/EventCalendar/EventCalendar';
import Login from './Login/Login';
import Register from './Register/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<EventCalendar />} />
      </Routes>
    </Router>
  );
};

export default App;
