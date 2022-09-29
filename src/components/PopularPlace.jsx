import React from 'react'
// import { Swiper } from 'swiper/react';
import Carousel from './Carousel';

const PopularPlace = () => {
    return (
        <>
            <section className="popular-places" id="popular">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-heading">
                        <span>Popular Places</span>
                        <h2>Integer sapien odio</h2>
                    </div>
                </div> 
            </div> 
               <Carousel />                    
        </div>
        
    </section>

            
        </>

    )
}
export default PopularPlace