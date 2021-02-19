export type StateType = {
    profilePageData: profilePageDataType;
    dialogsPageData: dialogsPageDataType;

};

//Main Types
export type profilePageDataType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
};
export type dialogsPageDataType = {
    dialogsData: Array<DialogItemType>;
    messagesData: Array<MessageDataType>;
    newMessageText: string;
};

// /Main Types

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

export type ActionType = {
    type: string;
    newText?: string;
}; 