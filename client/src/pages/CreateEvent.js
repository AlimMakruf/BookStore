import axios from 'axios'
import { useHistory } from 'react-router'
import { useState } from 'react'
import React from 'react'
import CreateComponent from '../component/CreateComponent'
import Navbar from '../component/Navbar'

function CreateEvent() {
    const history = useHistory()
    const [id, setId] = useState()
    const accesstoken = localStorage.getItem('accesstoken')
    const onSubmitRegister = e => {
        e.preventDefault()
        const eventName = e.target.event.value
        const vendorName = e.target.vendor.value
        const location = e.target.location.value
        const dateOne = e.target.dateOne.value
        const dateTwo = e.target.dateTwo.value
        const dateThree = e.target.dateThree.value
        const event = {
            eventName,
            vendorName,
            location
        }
        const date = {
            dateOne,
            dateTwo,
            dateThree
        }
        postEvent(event)
        postDate(date)
        history.push('/')

        e.target.reset()
    }

    const postEvent = async (data) => {
        try {
            let response = await axios({
                method: "POST",
                url: "http://localhost:4000/events",
                headers: {
                    accesstoken: accesstoken
                },
                data
            })
            setId(response)
            console.log(id)
        } catch (error) {
            console.log(error)
        }
    }

    const postDate = async (data) => {
        try {
            const response = await axios({
                method: "POST",
                url: "http://localhost:4000/dates",
                data
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar />
            <CreateComponent onSubmitRegister={onSubmitRegister}/>
        </div>
    )
}

export default CreateEvent
