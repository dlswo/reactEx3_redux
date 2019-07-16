const todoReducer = (state = [ ], action ) => {

    console.log("todoReducer................start")
    console.log(state);

    switch (action.type) {

        case "ADD" :
            return [...state,action.data]

        case 'REMOVE' :
            console.log("remove...........")

            state.splice(action.data, 1)

            return [...state]

        case 'UPDATE' :
            console.log("reducer update....")

            console.log(state.updating);

            return [...state]
    }
    return [...state]

}

export default todoReducer