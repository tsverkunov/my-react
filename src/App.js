import React, {Suspense} from 'react';
import './App.sass';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import PreloaderBall from "./common/PreloaderBall/PreloaderBall";
import MusicContainer from "./components/Music/MusicContainer";
import store from "./redux/redux-store";
import Preloader from "./common/Preloader/Preloader";
import LoginFormik from "./components/Login/LoginFormik";

//Lazy-Loading
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const Login = React.lazy(() => import("./components/Login/Login"));

class App extends React.Component {

   catchAllUnhandledErrors = (promiseRejectionEvent) => {
      console.log("Some common error!");
   }

   componentDidMount() {
      this.props.initializeApp();
      window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
   }

   componentWillUnmount() {
      window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
   }

   render() {
      if (!this.props.initialized) {
         return <PreloaderBall/>
      }

      return (
         <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <Suspense fallback={<Preloader/>}>
               <Switch>
                  <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                  <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                  <Route path='/login' render={() => <LoginFormik/>}/>
                  <Route path='/music' render={() => <MusicContainer/>}/>
                  <Route path='/news' render={() => <News/>}/>
                  <Route path='/users' render={() => <UsersContainer/>}/>
                  <Route path='/setting' render={() => <Setting/>}/>
                  <Redirect from="/" to="/profile"/>
                  {/*<Route path='*' render={() => <h3>404 - Not found</h3>}/>*/}
               </Switch>
            </Suspense>
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
   return (
      // <React.StrictMode>
      //  <BrowserRouter basename={process.env.PUBLIC_URL} >
      <BrowserRouter>
         <Provider store={store}>
            <AppContainer/>
         </Provider>
      </BrowserRouter>
      // </React.StrictMode>
   )
};

export default MainJSApp;
