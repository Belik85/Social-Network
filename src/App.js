import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";

import state from "./redux/state";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Route exact path='/dialogs' component={Dialogs}/> */}
                {/*<Route exact path='/profile' component={Profile}/>*/}

                <Route exact path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route exact path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                    addPost={props.addPost}
                                                                    updateNewPostText = {props.updateNewPostText}
                />}/>

            </div>

        </div>

    );
}

export default App;
