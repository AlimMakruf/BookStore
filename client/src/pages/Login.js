import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Logins from '../component/LoginComponent'

function Login() {
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmitLogin = e => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        console.log(username)
        console.log(password)
        let user = {
            username,
            password
        }
        console.log(user)
        login(user)
        // e.target.reset()
    }

    const login = async (data) => {
        try {
            let response = await axios.post(
                "http://localhost:4000/login",
                data
            )
            const accesstoken = response.data.accesstoken  
            localStorage.setItem('accesstoken', accesstoken)
            history.push('/')
        } catch (error) {
            
        }
    }
    
    return (
        <div>
            <Logins onSubmitLogin={onSubmitLogin}/>
        </div>
    )
}

export default Login

    // const history = useHistory()
    // const getAccess = () => {
    //     localStorage.setItem('access', true)
    //     history.push('/mainmenu')
    // }
