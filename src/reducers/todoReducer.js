const todoReducer = (state = [ ], action ) => {

    console.log("todoReducer................start")

    switch (action.type) {

        case "ADD" :
            return [...state,action.data]

        case 'REMOVE' :
            state.splice(action.data, 1)

            return [...state]

        case 'UPDATE' :
            console.log(action.data)

            return state.map((item, index) => index == action.data ? {...item, updating: !item.updating} : item)

        case 'UPDATEINPUT' :
            console.log("inputupdate")

            return state.map((item) => item.input == action.id ? {...item, input: action.data.input, updating: !item.updating} : item)
        default :

            return [...state]
    }

}

export default todoReducer