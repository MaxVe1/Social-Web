import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {StoreType} from "./redux/reduxStore";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";
import {UsersContainer} from "./components/Users/UsersContainer";

/*type AppPropsType = {
    store: StoreType
};*/

const App: React.FC  = () => {

    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Route
                    path="/dialogs"
                    render={() => <DialogsContainer/>}
                />
                <Route
                    path="/profile"
                    render={() => <Profile  />}
                />
                <Route
                    path="/users"
                    render={() => <UsersContainer  />}
                />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
};

export default App;