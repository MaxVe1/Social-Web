import axios from 'axios';
import React from 'react';
import { UserType } from "../../redux/entities";
import s from "./Users.module.css";
import userPhoto from '../../assets/images/userpng.png'

type UsersPropsType = {
    users: Array<UserType>;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
};

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
            this.props.setUsers(response.data.items);
        });
    }
    componentDidUpdate() {
        console.log("Did Update")
    }
    render() {
        return (
            <div>
                {this.props.users.map((u) => {
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
                })}
            </div>
        );
    }
}