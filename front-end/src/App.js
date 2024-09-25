import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Layout from './components/layout';
import Login from './pages/login';
import Signup from './pages/singup';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
