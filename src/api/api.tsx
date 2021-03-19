import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "28ba0792-3a26-4118-bfdb-e7b65046fc4e"
    }
});


export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
};

export const getUserProfile = (userId: number) => {
    return instance.get(`profile/${userId}`).then((response) => response.data);
};

export const followUser = (userId: number) => {
    return instance.post(`follow/${userId}`).then((response) => response.data);
};

export const unfollowUser = (userId: number) => {
    return instance.delete(`follow/${userId}`).then((response) => response.data);
};

export const authorization = () => {
    return instance.get(`auth/me`).then((response) => response.data);
};