import { DELETE_DATA, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, UPDATE_DATA } from "./userTypes"
import axios from "axios"

export const updateUserData = (user) => {
    return {
        type: UPDATE_DATA,
        payLoad: user
    }
}

export const deleteUserData = (id) => {
    return {
        type: DELETE_DATA,
        payLoad: id
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payLoad: users,
    }
}
export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payLoad: error
    }
}

export const fetchGame = () => {
    const URL = 'https://jsonplaceholder.typicode.com/users';
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get(URL)
            .then(response => {
                const userData = response.data
                dispatch(fetchUsersSuccess(userData))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }

}