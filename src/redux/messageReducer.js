const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Ivan', ava: 'https://99px.ru/sstorage/53/2011/08/tmb_19584_3852.jpg'},
        {id: 2, name: 'Victoria', ava: 'https://i.redd.it/ahg5rdrp9vxz.jpg'},
        {
            id: 3,
            name: 'Valeria',
            ava: 'https://afisha.a42.ru/uploads/posters/0a/0a7dca20-54d9-11e7-b30e-5fa7d75e7775.jpg'
        },
        {
            id: 4,
            name: 'Donald',
            ava: 'https://100-faktov.ru/wp-content/uploads/2014/07/ed16391c6bd6c1cad1b5-618x486.jpg'
        },
        {id: 5, name: 'Kate', ava: 'https://i.ytimg.com/vi/MoNnIiwnwOM/maxresdefault.jpg'},
        {id: 6, name: 'Bill', ava: 'https://lifeglobe.net/x/entry/6503/1.jpg'}
    ],
    chats: [
        {id: 1, message: 'In half a year I will be a programmer!'}
    ],
    addNewMessage: ''
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.addNewMessage,
            };
            return {
                ...state,
                addNewMessage: '',
                chats: [...state.chats, newMessage]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                addNewMessage: action.newText
            };
        default:
            return state;
    }
}

export const addMessageCreator = () =>
    ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})


export default messageReducer;