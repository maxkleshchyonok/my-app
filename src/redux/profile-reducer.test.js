import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer'

let state = {
    posts: [
        { id: 1, message: "Hi, what's up?", likecounter: 15 },
        { id: 2, message: "It's my first post", likecounter: 20 },
    ]
}

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('maximka')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3) 
})

it('message of new post should be maximka', () => {
    let action = addPostActionCreator('maximka')
    let newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe('maximka') 
})

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1) 
})

