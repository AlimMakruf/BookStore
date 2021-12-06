import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Modal from '../component/Modal'
import { fetchApiDate, fetchApiEvent } from '../redux/action'
import AddModal from '../component/AddModal'
import Swal from 'sweetalert2'

function Homepage() {
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector(state => state.event.state.state)

    const onClickLogin = () => {
        history.push('/login')
    }

    const onClickLogout = () => {
        history.push('/login')
        localStorage.clear()
    }

    const onClickAddEvent = () => {
        history.push('/event')
    }

    useEffect(() => {
        dispatch(fetchApiEvent())
        dispatch(fetchApiDate())
    }, [])
    
    return (
        <div className="h-screen">
            <Navbar onClickLogin={onClickLogin} onClickLogout={onClickLogout}/>
            <div className="flex flex-row h-screen">
                {state && state.map((res, index) => 
                <Modal res={res} key={index}/>
                )}
                <AddModal onClickAddEvent={onClickAddEvent}/>
            </div>
        </div>
    )
}

export default Homepage
