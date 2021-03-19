import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {setAuthUserData, SetAuthUserDataAT, setUserPhoto, SetUserPhotoAT} from "../../redux/authReducer";
import {authorization, getUserProfile} from "../../api/api";

type HeaderContainerPropsT = {
    setAuthUserData: (id: number, email: string, login: string) => SetAuthUserDataAT
    setUserPhoto: (photoPath: string) => SetUserPhotoAT
    isAuth: boolean
    login: string | null,
    photoPath: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsT> {
    componentDidMount() {
        authorization().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login)
                return id;
            }
        })
            .then(id => {
                getUserProfile(id).then(data => {
                    this.props.setUserPhoto(data.photos.large)
                })
            })

    }
    render() {
        const {login, isAuth, photoPath} = this.props
        return <Header login={login} isAuth={isAuth} photoPath={photoPath}/>;
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
        photoPath: state.auth.photoPath
    }
}

export default connect(mapStateToProps, {setAuthUserData, setUserPhoto})(HeaderContainer)

