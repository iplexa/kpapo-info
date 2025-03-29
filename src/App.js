import React from 'react';
import './components/Header.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

const App = () => {
    return ( 
        <div> 
            <Header />
            <MainContent />
        </div>
    );
};

export default App;
