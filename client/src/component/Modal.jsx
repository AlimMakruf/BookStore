import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function Modal(props) {
    
    
    const openView = () => {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Approve',
            cancelButtonText: 'Reject',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Please Choose the date',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: `${props.res.confirmedDate.dateOne}`,
                    denyButtonText: `${props.res.confirmedDate.dateTwo}`,
                    cancelButtonText: `${props.res.confirmedDate.dateThree}`,
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      Swal.fire('The date has been set', '', 'success')
                    } else if (result.isDenied) {
                      Swal.fire('The date has been set', '', 'success')
                    } else {
                      Swal.fire('The date has been set', '', 'success')
                    }
                  })
            //   Swal.fire(
            //     'Approved',
            //     'This event has been approved',
            //     'success'
            //   )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire({
                    title: "Please give the reasson",
                    input: 'text',
                    inputPlaceholder: 'Reason'
                })
            }
          })
    }
    
    return (
        <div className="bg-blue-400 w-1/6 h-3/6 p-4 m-5 rounded-xl">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h1 className="font-bold text-xl">{props.res.eventName}</h1>
                    <p className="font-medium text-sm -mt-2">Vendor {props.res.user.username}</p>
                </div>
                <div className="w-full flex flex-col gap-3 items-center font-medium text-sm">
                    <p>Proposed Date</p>
                    <div>
                        <p>{props.res.confirmedDate.dateOne}</p>
                        <p>{props.res.confirmedDate.dateTwo}</p>
                        <p>{props.res.confirmedDate.dateThree}</p>
                    </div>
                </div>
                <p className="text-xs text-center">Created : 1 December 2021</p>
                <div>
                    <div className="flex justify-center">
                        <p className="text-center font-bold text-xs rounded-full p-1 w-2/3">{props.res.status}</p>
                    </div>
                    <button onClick={openView} className="bg-green-400 p-1 mt-2 rounded-lg w-full text-white font-bold text-center">View</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
