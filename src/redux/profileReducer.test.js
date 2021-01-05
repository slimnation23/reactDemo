import profileReducer, { addPostActionCreator } from "./profileReducer";

let state = {
    posts: [
        { id: 1, message: 'Hi! How are you?', likesCount: 12 },
        { id: 2, message: 'What are you doing?', likesCount: 25 }
    ]
}

test('new post should be added', () => {
    let action = addPostActionCreator('Slimnation')
    let newState = profileReducer( state, action )

    expect(newState.posts.length).toBe(3)
  });

  test('message of new post', () => {
    let action = addPostActionCreator('Slimnation')
    let newState = profileReducer( state, action )
    expect(newState.posts[0].message).toBe('Slimnation')
  });