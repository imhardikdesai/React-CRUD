import { DELETE_DATA, UPDATE_DATA } from "./userTypes"

const initialData = {
    totalUser: [],
    updatedData: [],
}


const userReducer = (state = initialData, action) => {
    switch (action.type) {

        case UPDATE_DATA:
            return {
                state
            }

        case DELETE_DATA:
            return {
                state
            }
        default:
            return {
                state
            }
    }
}

export default userReducer