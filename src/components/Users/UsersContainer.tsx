import React from "react";
import { UserType } from "../../redux/entities";
import axios from "axios";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollow} from "../../redux/usersReducer";

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


export class UsersContainer extends React.Component<MapStateToPropsT & MapDispatchToPropsT> {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                {
                    withCredentials: true
                }
            )
            .then((response) => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    componentDidUpdate() {
        // console.log("Did Update");
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then((response) => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
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
            isFetching
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
        isFetching: state.usersPage.isFetching
    };
};

export default connect<MapStateToPropsT, MapDispatchToPropsT, {}, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
})(UsersContainer);


