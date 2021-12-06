import axios from 'axios'

const url_user = "http://localhost:4000/users"
const url_date = "http://localhost:4000/proposedDate"
const accesstoken = localStorage.getItem('accesstoken')
console.log(accesstoken)
export const fetchApiEvent = () => {
    return async (dispatch) => {
        try {
            const response = await axios({
                method: "GET",
                url: url_user,
                headers: {
                    accesstoken: accesstoken
                }
            })
            console.log(response)
            return dispatch({
                type: "FETCH_EVENT",
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchApiDate = () => {
    return async (dispatch) => {
        try {
            const response = await axios({
                method: "GET",
                url: url_date,
                headers: {
                    accesstoken: accesstoken
                }
            })
            console.log(response)
            return dispatch({
                type: "FETCH_DATE",
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}