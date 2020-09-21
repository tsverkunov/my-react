import React, {ComponentType, FC, Suspense} from 'react';
import './App.sass';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import PreloaderBall from "./common/PreloaderBall/PreloaderBall";
import MusicContainer from "./components/Music/MusicContainer";
import store, {AppStateType} from "./redux/redux-store";
import Preloader from "./common/Preloader/Preloader";
import Setting from "./components/Setting/Setting";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { UsersPage } from './components/Users/UsersContainer';
import {LoginPage} from "./components/Login/LoginPage"

//Lazy-Loading
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
// const Login = React.lazy(() => import("./components/Login/LoginFormik"));
// const News = React.lazy(() => import("./components/News/News"));
// const Setting = React.lazy(() => import("./components/Setting/Setting"));
// const MusicContainer = React.lazy(() => import("./components/Music/MusicContainer"));



type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
   initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {

   catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
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
                  <Route path='/login' render={() => <LoginPage/>}/>
                  <Route path='/music' render={() => <MusicContainer/>}/>
                  <Route path='/news' render={() => <News/>}/>
                  <Route path='/users' render={() => <UsersPage/>}/>
                  <Route path='/setting' render={() => <Setting/>}/>
                  <Redirect from="/" to="/profile"/>
                  {/*<Route path='*' render={() => <h3>404 - Not found</h3>}/>*/}
               </Switch>
            </Suspense>
            <Footer/>
         </div>
      )
   }
}

const mapStateToProps = (state: AppStateType) => ({
   initialized: state.appReducer.initialized
})

const AppContainer = compose<ComponentType>(
   withRouter,
   connect(mapStateToProps, {initializeApp})
)(App);

const MainJSApp: FC = () => {
   return (
      // <React.StrictMode>
      //    <BrowserRouter basename={process.env.PUBLIC_URL} >
         <BrowserRouter>
            <Provider store={store}>
               <AppContainer/>
            </Provider>
         </BrowserRouter>
      // </React.StrictMode>
   )
};

export default MainJSApp;
