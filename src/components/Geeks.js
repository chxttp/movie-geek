import React from 'react';
import Navbar from './Navbar';
import './Geeks.css'


function Geeks(){
    return(
        <div className='Geek'>
            <Navbar />
            <div className='top-container'>
                <h1>
                    GEEKS
                </h1>
                <p>
                    Make friends, find popular movie geeks in this community!
                </p>
            </div>

            <div className='popular-this-week-container'>
                <div className='popular-list'>
                    <div className='popular-list-title'>
                        POPULAR THIS WEEK
                    </div>
                </div>

            </div>




        </div>
    );
}




export default Geeks;