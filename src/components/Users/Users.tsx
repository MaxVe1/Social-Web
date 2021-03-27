import React from "react";
import { UserType } from "../../redux/entities";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/userpng.png";
import { NavLink } from "react-router-dom";

type UsersPropsType = {
    users: Array<UserType>;
    pageSize: number;
    currentPage: number;
    totalUsersCount: number;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
    onPageChanged: (pageNumber: number) => void;
    followingUsers: Array<number>;
};

export const Users: React.FC<UsersPropsType> = (props) => {
    const calcPagination = (pages: Array<number>, current: number) => {
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

    const renderPagination = (pagesArr: Array<number | string>) => {
        return pagesArr.map((p) => {
            return (
                <>
                    <span
                        onClick={() => {
                            typeof p === "number" && props.onPageChanged(p);
                        }}
                        className={props.currentPage === p ? s.selectedPage : ""}
                    >
                        {p}
                    </span>
                </>
            );
        });
    };

    const renderUsers = (usersArr: Array<UserType>) => {
        return usersArr.map((u) => {
            return (
                <div key={u.id}>
                    <span>
                        <div className={s.userLogo}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small ? u.photos.small : userPhoto} alt="UserLogo" />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    disabled={props.followingUsers.some((id) => id === u.id)}
                                    onPointerDown={() => {
                                        props.unfollow(u.id);
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={props.followingUsers.some((id) => id === u.id)}
                                    onPointerDown={() => {
                                        props.follow(u.id);
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

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const visiblePages = calcPagination(pages, props.currentPage);

    return (
        <div>
            <div className={s.pagesWrapper}>{renderPagination(visiblePages)}</div>
            {renderUsers(props.users)}
            <div className={s.pagesWrapper}>{renderPagination(visiblePages)}</div>
        </div>
    );
};
