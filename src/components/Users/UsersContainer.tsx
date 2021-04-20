import React from "react";
import { UserType } from "../../redux/entities";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import { follow, requestUsers, setTotalUsersCount, unfollow } from "../../redux/usersReducer";
import { AuthRedirect } from "../HOC/AuthRedirect";
import { compose } from "redux";
import {
    getCurrentPage,
    getFollowingUsers,
    getIsFetching,
    getPageSize,
    getTotalUsersCounte,
    getUsers
} from "../../redux/selectors/usersSelector";

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
    requestUsers: (currentPage: number, pageSize: number) => void;
};

class UsersContainer extends React.Component<MapStateToPropsT & MapDispatchToPropsT> {
    componentDidMount() {
        const { currentPage, pageSize, requestUsers } = this.props;

        requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
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

/*const mapStateToProps = (state: AppStateType): MapStateToPropsT => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingUsers: state.usersPage.followingUsers
    };
};*/

const mapStateToProps = (state: AppStateType): MapStateToPropsT => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCounte(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingUsers: getFollowingUsers(state)
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        requestUsers
    }),
    AuthRedirect
)(UsersContainer);