export default function searchTerm(state = {}, action) {
    console.log(action.type)
    switch (action.type) {
        case 'SEARCH':
            console.log(action.payload)
            console.log(JSON.parse(action.payload[1]), JSON.parse(action.payload[0]))
            return action.payload[0]
        default:
            return state
    }

}