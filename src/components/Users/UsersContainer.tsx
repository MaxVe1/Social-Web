import React from "react";
import { UserType } from "../../redux/entities";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import { follow, getUsers, setTotalUsersCount, toggleFollowingProgress, unfollow } from "../../redux/usersReducer";
import { AuthRedirect } from "../HOC/AuthRedirect";
import { compose } from "redux";

type MapStateToPropsT = {
    users: Array<UserType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingUsers: Array<number>;
};

type MapDispatchToPropsT = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    getUsers: (currentPage: number, pageSize: number) => void;
};

class UsersContainer extends React.Component<MapStateToPropsT & MapDispatchToPropsT> {
    componentDidMount() {
        const { currentPage, pageSize, getUsers } = this.props;

        getUsers(currentPage, pageSize);
    }

    componentDidUpdate() {
        // console.log("Did Update");
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        const {
            users,
            pageSize,
            currentPage,
            totalUsersCount,
            follow,
            unfollow,
            isFetching,
            followingUsers
        } = this.props;

        return (
            <>
                {isFetching ? (
                    <Preloader />
                ) : (
                    <Users
                        users={users}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        totalUsersCount={totalUsersCount}
                        follow={follow}
                        unfollow={unfollow}
                        setTotalUsersCount={setTotalUsersCount}
                        onPageChanged={this.onPageChanged}
                        followingUsers={followingUsers}
                    />
                )}
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsT => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingUsers: state.usersPage.followingUsers
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        getUsers
    }),
    //AuthRedirect
)(UsersContainer)

/*
export default connect<MapStateToPropsT, MapDispatchToPropsT, {}, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    getUsers
})(AuthRedirect(UsersContainer));*/
