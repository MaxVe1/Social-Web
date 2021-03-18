import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {setAuthUserData, SetAuthUserDataAT} from "../../redux/authReducer";

type HeaderContainerPropsT = {
    setAuthUserData: (id: number, email: string, login: string) => SetAuthUserDataAT
    isAuth: boolean
    login: string | null,
    photoPath: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsT> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                    return id;
                }
            })
            .then(id => {
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                    .then(response => {
                        console.log(response.data.photos.small)
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)

