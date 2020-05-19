const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Ivan', ava: 'https://99px.ru/sstorage/53/2011/08/tmb_19584_3852.jpg'},
        {id: 2, name: 'Victoria', ava: 'https://i.redd.it/ahg5rdrp9vxz.jpg'},
        {id: 5, name: 'Kate', ava: 'https://i.ytimg.com/vi/MoNnIiwnwOM/maxresdefault.jpg'},
        {id: 6, name: 'Bill', ava: 'https://lifeglobe.net/x/entry/6503/1.jpg'}
    ],
    chats: [
        {id: 1, message: 'In half a year I will be a programmer!'}
    ],
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 2,
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

export const addMessageCreator = (newMessageBody) =>
    ({type: SEND_MESSAGE, newMessageBody})


export default messageReducer;