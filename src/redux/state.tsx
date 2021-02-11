//import { rerenderEntireTree } from '../renders';

export type stateType = {
  profilePageData: {
    postsData: Array<PostsDataType>
    newPostText: string

  }
  dialogsPageData: {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageDataType>
  }
}
export type PostsDataType = {
  id: number
  message: string
  likes: number
}
export type MessageDataType = {
  id: number
  message: string
}
export type DialogItemType = {
  name: string
  id: number
}

export const store = {
  _state: {
    profilePageData: {
      postsData: [
        {id: 1, message: 'it is my first post', likes: 11},
        {id: 2, message: 'hi how are you', likes: 12}
      ],
      newPostText: 'it-kamasutra.com'
    },
    dialogsPageData: {
      messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How it-kams'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'You are welcome'}
      ],
      dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrei'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
      ]
    }
  },
   //rerenderEntireTree(state: stateType){
 //   console.log('State changed');
 // },
   addPost(): void {
    const newPost = {
      id: 4,
      message: this._state.profilePageData.newPostText,
      likes: 0
    };
    this._state.profilePageData.postsData.push(newPost);
    //state.profilePageData.newPostText = "";
    //rerenderEntireTree( state );
  },
  updateNewPostText (newText: string): void  {
    const newPost = {
      id: 4,
      message: postMessage,
      likes: 0
    };
    this._state.profilePageData.newPostText = newText;
    //rerenderEntireTree(state);
  },
  _callSubscriber (state: stateType) {
    console.log("State render")
  },
  subscribe(observer: (state: stateType) => void) {
    this._callSubscriber = observer;
  },
  getState(): stateType {
    return this._state;
  },
}

export default store;



