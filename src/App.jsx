import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import PricingPage from './components/Pricing';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
<Footer />

    </div>
  );
}

export default App
