import { Route, Routes } from 'react-router-dom';
import './App.css'
import PricingPage from './components/Pricing';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import AITools from './components/AITools/Tools';
import AIChat from './components/AIChat/AIChat';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/all-tools" element={<AITools />} />
        <Route path="/tool/:service" element={<AIChat />} />
      </Routes>

    </div>
  );
}

export default App
