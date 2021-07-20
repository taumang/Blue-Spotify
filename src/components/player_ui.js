import React from 'react'
import Image from '../images/street_lights.jpg';

export default function player_ui() {
    return (
        <div className="bg-indigo-900">
            asdasd
            <div className="bg-gray-500">
                asdasd
                {/* Artist Album art */}
                <img src={Image} alt="street_lights" />
            {/* artist name and song */}
            <div>
                <div>
                <p>Closer</p>
                </div>
                <div>
                Azure
                </div>
            </div>
            
            <div 
            className="line -ml-4 relative w-24 h-2 rounded-lg">

            </div>

            <div>
                <button
                className="btn-Play_Pause">Play</button>
                <button
                 className="btn-Next">Next</button>
                <button
                 className="btn-Previous">Previous</button>
            </div>
            </div>

        </div>
    )
}
