let initialState = {
   friends: [
      {id: 1, name: 'Ivan', ava: null},
      {id: 2, name: 'Victoria', ava: 'https://i.redd.it/ahg5rdrp9vxz.jpg'},
      {
         id: 3,
         name: 'Valeria',
         ava: 'https://afisha.a42.ru/uploads/posters/0a/0a7dca20-54d9-11e7-b30e-5fa7d75e7775.jpg'
      }
   ]
};

const sideBarReducer = (state = initialState, action) => {
   return state;
}


export default sideBarReducer;