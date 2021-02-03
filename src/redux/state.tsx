export type stateType = {
  profilePageData: {
    postsData: Array<PostsDataType>

  }
  messagesPageData: {
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

export const state: stateType = {
  profilePageData: {
    postsData: [
      {id:1, message: 'it is my first post',likes: 11},
      {id:2, message:'hi how are you',likes: 12}
    ]
  },
  messagesPageData: {
    messagesData: [
      {id:1, message: 'Hi'},
      {id:2 ,message: 'How it-kams'},
      {id:3 ,message: 'Yo'},
      {id:4 ,message: 'You are welcome'}
    ],
    dialogsData: [
      {id:1, name: 'Dimych'},
      {id:2 ,name: 'Andrei'},
      {id:3 ,name: 'Sveta'},
      {id:4 ,name: 'Sasha'},
      {id:5 ,name: 'Viktor'},
      {id:6 ,name: 'Valera'}
    ]
  }

};


