import { DELETE_DATA, UPDATE_DATA, FETCH_USERS_REQUEST, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./userTypes"

const initialData = {
    loading: false,
    error: '',
    userData: [],
    updatedData: [],
}



const userReducer = (state = initialData, action) => {
    switch (action.type) {

        case UPDATE_DATA:
            return {
                ...state,
                userData: action.payLoad
            }

        case DELETE_DATA:
            const currentPosition = state.userData.findIndex(item => item.id === action.payLoad)
            const newData = [...state.userData]
            newData.splice(currentPosition, 1)
            return {
                ...state,
                userData: newData
            }

        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                userData: action.payLoad,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                userData: [],
                error: action.payLoad
            }
        default:
            return {
                ...state
            }
    }
}

export default userReducer