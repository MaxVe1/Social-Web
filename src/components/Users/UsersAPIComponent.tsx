import React from "react";
import { UserType } from "../../redux/entities";
import axios from "axios";
import { Users } from "./Users";
import preloader from "../../assets/images/preloader.gif";
import {Preloader} from "../common/Preloader/Preloader";

type UsersPropsType = {
    users: Array<UserType>;
    pageSize: number;
    currentPage: number;
    totalUsersCount: number;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
    setCurrentPage: (pageNumber: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
    setIsFetching: (isFetching: boolean) => void;
    isFetching: boolean;
};

export class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
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
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
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