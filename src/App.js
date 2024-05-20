import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './components/Authentification/SignIn';
import SignUp from './components/Authentification/SignUp';
import ForgotPassword from './components/ForgotPassword';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignIn" Component={SignIn} />
        <Route path='/SignUp' Component={SignUp} />
        <Route path='/ForgotPassword' Component={ForgotPassword} />
      </Routes>
    </Router>
  );
}

export default App;
