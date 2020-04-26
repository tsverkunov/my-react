import React from 'react';
import './App.sass';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state}/>
            <Route path='/profile'
                   render={() => <Profile
                       state={props.state}
                       dispatch={props.dispatch}/>}/>
            <Route path='/dialogs'
                   render={() => <Dialogs
                       state={props.state}
                       dispatch={props.dispatch}/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/setting' render={() => <Setting/>}/>
            <Footer/>
        </div>
    );
}


export default App;
