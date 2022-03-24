import React from 'react';
import Body from '../Body/Body';
import Header from '../Header/Header';
import './Container.css';

const Container = () => {
    return (
        <div className='container'>
            <Header/>
            <Body/>
        </div>
    );
};

export default Container;