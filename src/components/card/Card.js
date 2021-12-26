import React, { useState, useEffect } from 'react';
import Email from '../svg/Email';
import Location from '../svg/Location';
import Phone from '../svg/Phone';
import './Card.css';
import axios from 'axios';

const Card = () => {
    const [randomUser, setRandomUser] = useState(false);

    const getRandomUser = () => {
        axios.get('https://randomuser.me/api/').then((response) => {
            setRandomUser(response.data.results[0])
            /* console.log(response.data.results[0]) */

        })
    };

    useEffect(() => {
        getRandomUser()
    }, [])

    return (
        <div className='container'>
            <div className='card'>
                <div className='header-container'>
                    <img src={randomUser.picture?.large} alt='user' />
                    <p className='header'>{randomUser.name?.title} {randomUser.name?.first} {randomUser.name?.last}</p>
                </div>
                <div className='par-container'>
                    <Email className='icon' />
                    <p className='par'>{randomUser.email}</p>
                </div>
                <div className='par-container'>
                    <Phone className='icon' />
                    <p className='par'>{randomUser.phone}</p>
                </div>
                <div className='par-container'>
                    <Location className='icon' />
                    <p className='par'>{randomUser.location?.city} / {randomUser.location?.country} </p>
                </div>
                <p>Age : {randomUser.dob?.age} </p>
                <p>Register Date : {randomUser.registered?.date.slice(0, 10)}</p>
            </div>
            <div>
                <button className='button' onClick={getRandomUser}>Random User</button>
            </div>
        </div>
    )
};

export default Card;