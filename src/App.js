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
import {updateNewMessageText} from "./redux/state";


const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sideBar}/>
                    <Route path='/profile'
                           render={ () => <Profile
                               profilePage={props.state.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText} /> } />
                    <Route path='/dialogs'
                           render={ () => <Dialogs
                               messagePage={props.state.messagePage}
                               addMessage={props.addMessage}
                               updateNewMessageText={updateNewMessageText}/> } />
                    <Route path='/music' render={ () => <Music/> } />
                    <Route path='/news' render={ () => <News/> } />
                    <Route path='/setting' render={ () => <Setting/> } />
                <Footer/>
            </div>
    );
}


export default App;
