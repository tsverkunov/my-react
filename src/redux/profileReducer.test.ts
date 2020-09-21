import profileReducer, {actionsProfile} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 912},
        {id: 2, message: 'My React.', likesCount: 777},
        {id: 3, message: 'It\'s my first experience!', likesCount: 7}
    ],
    profile: null,
    status: '',
    followed: null
};


test('length of postss should be incremented', () => {
    // 1. test data
    let action = actionsProfile.addPost("E-PARK");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

test('message of new posts should be correct', () => {
    // 1. test data
    let action = actionsProfile.addPost("E-PARK");

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[3].message).toBe("E-PARK");
});

test('after deleting length of message should be decrement', () => {
    // 1. test data
    let action = actionsProfile.deletePost(1);

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = actionsProfile.deletePost(10000);

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

