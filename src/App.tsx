import React from "react";
import "./App.css";
import {Route, RouteComponentProps, withRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import  Navbar  from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import {AppStateType} from "./redux/reduxStore";
import {Preloader} from "./components/common/Preloader/Preloader";

type AppPropsT = MapStateToPropsT & {
    initializeApp: () => void;
}

type MapStateToPropsT = ReturnType<typeof mapStateToProps>

class App extends React.Component<AppPropsT & RouteComponentProps> {

    componentDidMount() {

        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
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
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/login" render={() => <Login />} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.appReducer.initialized
    } as const;
}

export default withRouter(connect(mapStateToProps, {initializeApp})(App));