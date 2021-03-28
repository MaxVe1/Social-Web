import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App: React.FC = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/profile/:userId?" exact render={() => <ProfileContainer />} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
                <Route path="/users" render={() => <UsersContainer/>} />
            </div>
        </div>
    );
};

export default App;