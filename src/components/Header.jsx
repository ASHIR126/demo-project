import React from 'react'
import '../assets/css/Bootstrapstyle.css'
import Navabar from './Navabar'
export const Header = () => {

    
    return (
        <>
            <div>
                <Navabar />
                <section className="banner" id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="banner-caption">
                                    <div className="line-dec"></div>
                                    <h2>Best Finder For You</h2>
                                    <span>Suspendisse eu lorem massa. Integer sit amet posuere tellus.</span>
                                    <div className="blue-button">
                                        <a className="scrollTo" data-scrollto="popular" href="#">Discover More</a>
                                    </div>
                                </div>
                                <div className="submit-form">
                                    <form id="form-submit" action="" method="get">
                                        <div className="row">
                                            <div className="col-md-3 first-item">
                                                <fieldset>
                                                    <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required="" />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-3 second-item">
                                                <fieldset>
                                                    <input name="location" type="text" className="form-control" id="location" placeholder="Type location..." required="" />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-3 third-item">
                                                <fieldset>
                                                    <select required name='category' onChange={(e) => e.target.value} >
                                                        <option value={""}>Select category...</option>
                                                        <option value="Shops">Shops</option>
                                                        <option value="Hotels">Hotels</option>
                                                        <option value="Restaurants">Restaurants</option>
                                                        <option value="Events">Events</option>
                                                        <option value="Meetings">Meetings</option>
                                                        <option value="Fitness">Fitness</option>
                                                        <option value="Cafes">Cafes</option>
                                                    </select>
                                                </fieldset>
                                            </div>
                                            <div className="col-md-3">
                                                <fieldset>
                                                    <button type="submit" id="form-submit" className="btn" onClick={(e)=>e.preventDefault()} >Search Now</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div>


        </>
    )
}
