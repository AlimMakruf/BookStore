import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import RegisterComponent from '../component/RegisterComponent'

function Register() {
    const onSubmitRegister = e => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        const role = e.target.role.value
        console.log(username)
        console.log(password)
        let user = {
            username,
            password,
            role
        }
        console.log(user)
        login(user)
        e.target.reset()
    }

    const login = async (data) => {
        try {
            let response = await axios.post(
                "http://localhost:4000/register",
                data
            )
            const accesstoken = response.data.accesstoken  
            localStorage.setItem('accesstoken', accesstoken)
        } catch (error) {
            
        }
    }
    return (
        <div>
            <RegisterComponent onSubmitRegister={onSubmitRegister}/>
        </div>
    )
}

export default Register
