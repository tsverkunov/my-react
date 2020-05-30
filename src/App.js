import React from 'react';
import './App.sass';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import PreloaderBall from "./common/preloaderBall/PreloaderBall";
import MusicContainer from "./components/Music/MusicContainer";
import LoginFormik from "./components/Login/LoginFormik";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <PreloaderBall/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/login' render={() => <LoginFormik/>}/>
                <Route path='/music' render={() => <MusicContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
