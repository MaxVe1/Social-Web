export type StateType = {
    profilePageData: ProfilePageDataType;
    dialogsPageData: DialogsPageDataType;

};

//! MAIN TYPES
export type ProfilePageDataType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
    profile: UserProfileItemT;
    defaultUserId: number
};
export type DialogsPageDataType = {
    dialogsData: Array<DialogItemType>;
    messagesData: Array<MessageDataType>;
    newMessageText: string;
};

export type UsersPageDataType = {
    users: Array<UserType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: boolean;
    followingUsers: Array<number>
};
//! / MAIN TYPES

export type PostsDataType = {
    id: number;
    message: string;
    likes: number;
};
export type MessageDataType = {
    id: number;
    message: string;
};
export type DialogItemType = {
    name: string;
    id: number;

};


//! HTTP Request Data types
export type UserType = {
    name: string;
    id: number;
    photos: {
        small: string | null;
        large: string | null;
    };
    status: null;
    followed: boolean;
};
type UserLocationType = {
    city: string;
    country: string;
};
export type UserProfileItemT = {
    aboutMe: string | null;
    contacts: {
        facebook: string | null;
        website: string | null;
        vk: string | null;
        twitter: string | null;
        instagram: string | null;
        youtube: string | null;
        github: string | null;
        mainLink: string | null;
    };
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string | null;
    userId: number;
    photos: {
        small: string;
        large: string;
    };
};

export type AuthT = {
    "data": {
        id?: number | null,
        login?: string | null,
        email?: string | null
    },
    "messages": Array<any>,
    "fieldsErrors": Array<any>,
    "resultCode": number,
    isAuth: boolean
}
//! //HTTP Request Data types
