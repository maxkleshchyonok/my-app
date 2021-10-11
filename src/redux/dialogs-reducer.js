const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'user1' },
        { id: 2, name: 'user2' },
        { id: 3, name: 'user3' },
        { id: 4, name: 'user4' },
    ],
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hello' },
        { id: 3, message: 'privet' },
        { id: 4, message: 'poka' },
    ]
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: body }]
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer