import React from "react";
import { UserType } from "../../redux/entities";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/userpng.png";
import axios from "axios";
import { log } from "util";

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
};

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    componentDidUpdate() {
        console.log("Did Update");
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    };

    calcPagination = (pages: Array<number>, current: number) => {
        let last = pages.length,
            delta = 2,
            left = current - delta,
            right = current + delta,
            range = [],
            rangeWithDots = [],
            l;

        range.push(1);
        for (let i = left; i <= right; i++) {
            if (i >= left && i < right && i < last && i > 1) {
                range.push(i);
            }
        }
        range.push(last);
        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push("...");
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    };

    renderPagination = (pagesArr: Array<number | string>) => {
        return pagesArr.map((p) => {
            return (
                <>
                    <span
                        onClick={() => {
                            typeof p === 'number' && this.onPageChanged(p);
                        }}
                        className={this.props.currentPage === p ? s.selectedPage : ""}
                    >
                        {p}
                    </span>
                </>
            );
        });
    };

    renderUsers = (usersArr: Array<UserType>) => {
        return usersArr.map((u) => {
            return (
                <div key={u.id}>
                    <span>
                        <div className={s.userLogo}>
                            <img src={u.photos.small ? u.photos.small : userPhoto} alt="UserLogo" />
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    onPointerDown={() => {
                                        this.props.unfollow(u.id);
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onPointerDown={() => {
                                        this.props.follow(u.id);
                                    }}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
            );
        });
    };

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages: Array<number> = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        const visiblePages = this.calcPagination(pages, this.props.currentPage);

        return (
            <div>
                <div className={s.pagesWrapper}>
                    {this.renderPagination(visiblePages)}
                </div>
                {this.renderUsers(this.props.users)}
                <div className={s.pagesWrapper}>
                    {this.renderPagination(visiblePages)}
                </div>
            </div>
        );
    }
}