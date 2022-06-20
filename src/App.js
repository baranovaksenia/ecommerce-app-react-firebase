import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navigation/Navbar';
import SignIn from './components/SingIn/SignIn';
const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
