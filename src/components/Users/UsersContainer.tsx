import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import { UserType } from "../../redux/entities";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setUsers,
    setTotalUsersCount,
    unfollow
} from "../../redux/usersReducer";
import { UsersAPIComponent } from "./UsersAPIComponent";

type MapStateToPropsT = {
    users: Array<UserType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
};

type MapDispatchToPropsT = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
    setCurrentPage: (pageNumber: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
    setIsFetching: (isFetching: boolean) => void;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsT => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setUsersTotalCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     };
// };

export const UsersContainer = connect<MapStateToPropsT, MapDispatchToPropsT, {}, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
})(UsersAPIComponent);



