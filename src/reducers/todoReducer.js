let count = 0

const todoReducer = (state = [ ], action ) => {

    console.log("todoReducer................start")
    console.log(state)

    if(action.type === 'REMOVE'){
        console.log("remove...........")
        state.splice(action.data, 1)
        console.log(state)
        return [...state]
    }

    return [...state,'AAA' + count++]
}

export default todoReducer