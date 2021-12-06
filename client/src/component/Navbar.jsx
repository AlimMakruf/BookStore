import React from 'react'

function Navbar(props) {
    const data = localStorage.getItem('accesstoken')
    return (
        <navbar className="w-full flex flex-row bg-green-400 text-white font-bold justify-between items-center p-3">
            <span> </span>
            <span>Online Booking</span>
            {
                !data ? ( 
                    <button onClick={props.onClickLogin} className="bg-blue-400 text-white font-medium rounded-md py-1 px-5">Login</button>
                    ) : (
                    <button onClick={props.onClickLogout} className="bg-blue-400 text-white font-medium rounded-md py-1 px-5">logout</button>  
                )
            }
        </navbar>
    )
}

export default Navbar
