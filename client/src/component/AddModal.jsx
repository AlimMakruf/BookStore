import React from 'react'

function AddModal(props) {
    return (
        <div onClick={props.onClickAddEvent} className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 cursor-pointer w-1/6 h-3/6 p-4 m-5 shadow-inner rounded-xl">
            <p className="text-4xl text-gray-500">+</p>
        </div>
    )
}

export default AddModal
