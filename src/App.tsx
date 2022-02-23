import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Sidebar} from './components/Sidebar/Sidebar';
import {Body} from './components/Body/Body';
import {Footer} from './components/Footer/Footer';


function App() {
    return (
        <div className='App'>
            <Header/>
            <Sidebar/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
