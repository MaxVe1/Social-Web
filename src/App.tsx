import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import { stateType } from './redux/state';

type AppPropsType = {
  appState: stateType
}


const App = (props: AppPropsType) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs"
                 render={() => <Dialogs
                   dialogsData={props.appState.messagesPageData.dialogsData}
                   messagesData={props.appState.messagesPageData.messagesData} />}
          />
          <Route path="/profile" render={() => <Profile posts={props.appState.profilePageData.postsData} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>

  );
};


export default App;
