import React from 'react';
import './Main.css'
import MainCardTask from './MainCardTask';
import MainCardThoughts from './MainCardThoughts';



const Main = () => {
    return (
        <div className="row d-flex justify-content-evenly p-1">
            <div className="card">
                <MainCardThoughts />
            </div>

            <div className="card">
                <MainCardTask />
            </div>
        </div>
    )
}

export default Main;
