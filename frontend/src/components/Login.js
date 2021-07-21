import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=637a3bbbcc30400e897ce9e8a7dacf83&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-emial%20user-read-private%20user-library-read%20user-library-moidfy%20user-read-playback-state%20user-modify-playback-state"

function Login() {
    return (
        <div className="space-y-6 grid justify-items-center">
            
            <p>Click button to login into blue sounds</p>
                <div >
                <a className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
                href={AUTH_URL}>Login</a>
                </div>
            
        </div>
    )
}

export default Login


//