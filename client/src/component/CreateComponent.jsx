import React from 'react'

function CreateComponent(props) {
    return (
        <div className="bg-red-100 py-5 flex justify-center h-screen">
            <div className="flex flex-col p-12 w-2/3 h-full justify-between items-center justify-center bg-white rounded-xl">
                <p>Create Event</p>
                <form className="flex flex-col w-full gap-5" onSubmit={props.onSubmitRegister}>
                    <label>EventName</label>
                    <select name="event" className="bg-gray-100 p-2 rounded-xl">
                        <option value="Health Talks">Health Talks</option>
                        <option value="Onsite Screening">Onsite Screening</option>
                        <option value="Heatlh Screening">Heatlh Screening</option>
                    </select>
                    <label>Vendor Name</label>
                    <select name="vendor" className="bg-gray-100 p-2 rounded-xl">
                        <option value={2}>vendor 1</option>
                    </select>
                    <labe>Location</labe>
                    <input type="text" placeholder="Set Location" name="location" className="bg-gray-100 p-2 rounded-xl"/>
                    <label>Proposed Date</label>
                    <input type="text" placeholder="Set Date1" name="dateOne" className="bg-gray-100 p-2 rounded-xl"/> 
                    <input type="text" placeholder="Set Date2" name="dateTwo" className="bg-gray-100 p-2 rounded-xl"/>
                    <input type="text" placeholder="Set Date3" name="dateThree" className="bg-gray-100 p-2 rounded-xl"/>
                    <input type="submit" value="Create Event" className="p-2 rounded-xl cursor-pointer"/>
                </form>
            </div>
        </div>
    )
}

export default CreateComponent
