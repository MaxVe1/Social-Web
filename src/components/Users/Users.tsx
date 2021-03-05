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


export const Users = (props: UsersPropsType) => {

let getUsers = () => {
    if (!props.users.length) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }
}
        /*props.setUsers([
        {
            id: 1,
            userLogo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
            followed: false,
            fullName: "Yehor",
            status: "I am a BOSS!!",
            location: {
                city: "Zaporozhye",
                country: "Ukraine"
            }
        },
        {
            id: 2,
            userLogo: "https://pbs.twimg.com/profile_images/684655178553819136/F_XaeU8d_400x400.jpg",
            followed: true,
            fullName: "Maxim",
            status: "I am a BOSS!!",
            location: {
                city: "Brest",
                country: "Belarus"
            }
        },
        {
            id: 3,
            userLogo: "https://pbs.twimg.com/profile_images/684655178553819136/F_XaeU8d_400x400.jpg",
            followed: false,
            fullName: "Tania",
            status: "I am a BOSS!!",
            location: {
                city: "Moscow",
                country: "Russia"
            }
        }
    ]);*/
    return   <div>
        <button onClick={getUsers}>Get Users</button>
        {props.users.map((u) => {

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
                                            props.unfollow(u.id);
                                        }}
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
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
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                </div>
            );
        })}
    </div>
}

export default Users;




