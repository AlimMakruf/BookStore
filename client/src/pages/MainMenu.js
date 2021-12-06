import axios from 'axios'
import React, { useState } from 'react'

function MainMenu() {
    const accesstoken  = localStorage.getItem('accesstoken')
    const [user, setUser] = useState()
    const onClickFetchApi = e => {
        e.preventDefault()
        const token = {
            accesstoken: accesstoken
        }
        fetchAPI_()
        console.log(typeof accesstoken)
        console.log(user)
    }
    const fetchAPI_ = () => {
        axios.get("http://localhost:4000/users", {
            headers: {
                accesstoken: accesstoken
            }
        })
        .then(responses => responses.data)
        .then(json => setUser(json))
    }
    return (
        <div>
            <h1>Main Menu Page</h1>
            <button onClick={onClickFetchApi}>fetchAPI</button>
        </div>
    )
}

export default MainMenu
