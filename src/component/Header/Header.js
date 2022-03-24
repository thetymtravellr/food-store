import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <a href="app.js">Food-Store</a>

            <div className='search-bar'>
            <input 
            type="text" 
            placeholder='search food'/>
            <button>Search</button>
            </div>

            <nav>
                <a 
                href="app.js" className='nav-link'
                >Add Recipe</a>
                    
                <a 
                href="app.js"
                className='nav-link'
                >Bookmarks</a>
            </nav>
        </header>
    );
};

export default Header;