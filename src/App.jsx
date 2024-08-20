import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import PricingPage from './components/Pricing';
import Login from './components/Login';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </div>
  );
}

export default App
