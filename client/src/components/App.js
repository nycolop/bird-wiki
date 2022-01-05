import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import Login from './Login.js'
import Register from './Register.js';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
