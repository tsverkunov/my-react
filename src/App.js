import React from 'react';
import './App.sass';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import PreloaderBall from "./common/PreloaderBall/PreloaderBall";
import MusicContainer from "./components/Music/MusicContainer";
import LoginFormik from "./components/Login/LoginFormik";
import store from "./redux/redux-store";


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
                <Route path='/login' render={() => <Login/>}/>
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

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const MainJSApp = (props) => {
    return( //<React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <AppContainer/>
         </Provider>
      </BrowserRouter>
   // </React.StrictMode>
    )
};

export default MainJSApp;
