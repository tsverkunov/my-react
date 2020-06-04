import profileReducer, {addPost, deletePost} from "./profileReducer";
import React from 'react';

let state = {
    post: [
        {id: 1, message: 'Hi, how are you?', likesCount: 912},
        {id: 2, message: 'My React.', likesCount: 777},
        {id: 3, message: 'It\'s my first experience!', likesCount: 7}
    ],
};


test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPost("EXAH-PARK");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.post.length).toBe(4);
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPost("EXAH-PARK");

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.post[3].message).toBe("EXAH-PARK");
});

test('after deleting length of message should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.post.length).toBe(2);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(10000);

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.post.length).toBe(3);
});

