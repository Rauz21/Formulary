import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formulario from './Formulario';
import Home from './Home';
import ErrorMessage from './ErrorMessage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ErrorMessage />} />
                <Route path="/formulario/:uuid" element={<Formulario />} />
                <Route path="/GBaJhMHwoAGMUdVcvuMhtNqmsfVqVTSKORyELkHJNcGmmbWRAyMuytSdvrSmEAxJ" element={<Home />} />

            </Routes>
        </Router>
    );
};

export default App;
