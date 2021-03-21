import React from "react";
import { UserType } from "../../redux/entities";
import axios from "axios";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unfollow
} from "../../redux/usersReducer";
import { getUsers } from "../../api/api";

type MapStateToPropsT = {
    users: Array<UserType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingUsers: Array<number>

};

type MapDispatchToPropsT = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
    setCurrentPage: (pageNumber: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
    setIsFetching: (isFetching: boolean) => void;
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
};

class UsersContainer extends React.Component<MapStateToPropsT & MapDispatchToPropsT> {
    componentDidMount() {
        this.props.setIsFetching(true);
        const { currentPage, pageSize } = this.props;
        getUsers(currentPage, pageSize).then((data) => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    componentDidUpdate() {
        // console.log("Did Update");
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);

        getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
        });
    };

    render() {
        const {
            users,
            pageSize,
            currentPage,
            totalUsersCount,
            follow,
            unfollow,
            setUsers,
            setCurrentPage,
            setTotalUsersCount,
            isFetching,
            toggleFollowingProgress,
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
                        setUsers={setUsers}
                        setCurrentPage={setCurrentPage}
                        setTotalUsersCount={setTotalUsersCount}
                        onPageChanged={this.onPageChanged}
                        toggleFollowingProgress={toggleFollowingProgress}
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

export default connect<MapStateToPropsT, MapDispatchToPropsT, {}, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    toggleFollowingProgress
})(UsersContainer);

