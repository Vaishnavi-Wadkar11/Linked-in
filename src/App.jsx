// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux'; // Import connect from react-redux
import Login from './components/Login'; // Adjust the path if needed
import Home from './components/Home'; // Adjust the path if needed


const App = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, [props]); // Add props as a dependency to useEffect

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};



export default App;
