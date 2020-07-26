const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogsType = {
   id: number
   name: string
   ava: string
}
type ChatsType = {
   id: number
   message: string
}
let initialState = {
   dialogs: [
      {id: 1, name: 'John', ava: 'https://kipmu.ru/wp-content/uploads/sredizem-1024x640.jpg'},
      {id: 2, name: 'Kate', ava: 'https://i.ytimg.com/vi/MoNnIiwnwOM/maxresdefault.jpg'},
      {id: 3, name: 'Bill', ava: 'https://lifeglobe.net/x/entry/6503/1.jpg'}
   ] as Array<DialogsType>,
   chats: [
      {id: 1, message: 'Hello! How are you?'}
   ] as Array<ChatsType>,
};

export type InitialStateType = typeof initialState;


const messageReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case SEND_MESSAGE:
         let newMessage = {
            id: state.chats.length + 1,
            message: action.newMessageBody,
         };
         return {
            ...state,
            chats: [...state.chats, newMessage]
         };
      default:
         return state;
   }
}
//Dispatches
type AddMessageCreatorActionType = {
   type: typeof SEND_MESSAGE
   newMessageBody: string
}
export const addMessageCreator = (newMessageBody: string): AddMessageCreatorActionType => ({
   type: SEND_MESSAGE, newMessageBody
})


export default messageReducer;