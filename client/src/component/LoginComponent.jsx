import React from 'react'

function LoginComponent(props) {
    return (
        <div className="w-screen h-screen bg-green-100 flex items-center justify-center">
            <div className="flex w-1/4 h-2/4 justify-center gap-7 items-center flex-col bg-white rounded-xl p-3 px-5 justify-items-end">
                <h1>Login</h1>
                <form onSubmit={props.onSubmitLogin} className="h-full w-full flex flex-col items-center justify-center">
                    <div className="mb-7 w-full">
                    <label >Username</label><br/>
                    <input type="text" placeholder="Username" name="username" className="bg-gray-100 w-full p-2 mb-3 rounded-xl"/><br/>
                    <label >Password</label><br/>
                    <input type="password" placeholder="Password" name="password" className="bg-gray-100 w-full p-2 rounded-xl"/><br/>
                    </div>
                    <input type="submit" className="flex py-2 px-5 rounded-md"/>
                </form>
            </div>
        </div>
    )
}

export default LoginComponent
