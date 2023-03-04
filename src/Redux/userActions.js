import { DELETE_DATA, UPDATE_DATA } from "./userTypes"

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