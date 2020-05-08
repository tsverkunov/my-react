import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sideBarReducer from "./sideBarReducer";


let store = {
    _subscriber() {
        console.log('no subscribers (observers)')
    },
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hi, how are you?', likesCount: 912},
                {id: 2, message: 'It\'s my first post!', likesCount: 777},
                {id: 3, message: 'It\'s my first experience!', likesCount: 77}
            ],
            newPostText: ''
        },
        messagePage: {
            dialogs: [
                {id: 1, name: 'Ivan', ava: 'https://99px.ru/sstorage/53/2011/08/tmb_19584_3852.jpg'},
                {id: 2, name: 'Victoria', ava: 'https://i.redd.it/ahg5rdrp9vxz.jpg'},
                {id: 3, name: 'Valeria', ava: 'https://afisha.a42.ru/uploads/posters/0a/0a7dca20-54d9-11e7-b30e-5fa7d75e7775.jpg'},
                {id: 4, name: 'Donald', ava: 'https://100-faktov.ru/wp-content/uploads/2014/07/ed16391c6bd6c1cad1b5-618x486.jpg'},
                {id: 5, name: 'Kate', ava: 'https://i.ytimg.com/vi/MoNnIiwnwOM/maxresdefault.jpg'},
                {id: 6, name: 'Bill', ava: 'https://lifeglobe.net/x/entry/6503/1.jpg'}
            ],
            chats: [
                {id: 1, message: 'In half a year I will be a programmer!'},
                {id: 2, message: 'I learn Javascript!'},
                {id: 3, message: 'I will live in my house'},
            ],
            addNewMessage: ''
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Ivan', ava: 'https://99px.ru/sstorage/53/2011/08/tmb_19584_3852.jpg'},
                {id: 2, name: 'Victoria', ava: 'https://i.redd.it/ahg5rdrp9vxz.jpg'},
                {id: 3, name: 'Valeria', ava: 'https://afisha.a42.ru/uploads/posters/0a/0a7dca20-54d9-11e7-b30e-5fa7d75e7775.jpg'}
            ]
        }
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._subscriber(this._state);
        }
    }



export default store;
window.store = store;