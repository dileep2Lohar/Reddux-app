import React from 'react'

function Home(props){
    console.log('home', props.Data);
    return(
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.91-img.com/gallery_images_uploads/f/f/ff73afbb89af757ca8bd80ca8b811d62e064f5b3.JPG?tr=h-550,w-0,c-at_max" alt=""/>
                </div>
                <div className="text-wrapper item">
                   <span>I-phone</span> 
                   <span>price : $1000.00 </span> 
                </div>
                <div className="btn-wrapper item">
                    <button onClick={ () => props.addToCartHandler({price:100, name : 'i-phone 11'}) }>Add to Cart</button>
                    <button style={{'marginLeft' : '10px'}} onClick={ () => props.addToCartHandler({price:100, name : 'i-phone 11'}) }>remove to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;