import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterAndLogin from './components/RegisterAndLogin';


function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<RegisterAndLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
