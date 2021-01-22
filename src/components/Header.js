import React from 'react'

function Header(props){
    console.log('home', props.Data);
    return(
        <div>
            <h1 className="oder_count">{props.Data.length}</h1>
            <div className="add-to-cart">
                <img src="https://www.phoca.cz/images/projects/phoca-cart-r.svg" alt=""/>
            </div>
        </div>
    )
}
export default Header;