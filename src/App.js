import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/Authentification/SignIn';
import SignUp from './components/Authentification/SignUp';
import ForgotPassword from './components/ForgotPassword';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
