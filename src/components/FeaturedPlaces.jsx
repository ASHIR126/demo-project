import React from 'react'

const FeaturedPlaces = () => {
    return (
        <>
            <section className="featured-places" id="Blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <span>Featured Places</span>
                                <h2>Praesent nec dui sed urna</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="featured-item">
                                <div className="thumb">
                                    <img src="images/featured_item_1.jpg" alt="" />
                                    <div className="overlay-content">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="date-content">
                                        <h6>28</h6>
                                        <span>August</span>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <h4>Lorem ipsum dolor</h4>
                                    <span>Category One</span>
                                    <p>Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in dui pulvinar imperdiet. Nunc consectetur.</p>
                                    <div className="row">
                                        <div className="col-md-6 first-button">
                                            <div className="text-button">
                                                <a href="#">Add to favorites</a>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="text-button">
                                                <a href="#">Continue Reading</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="featured-item">
                                <div className="thumb">
                                    <img src="images/featured_item_2.jpg" alt="" />
                                    <div className="overlay-content">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="date-content">
                                        <h6>20</h6>
                                        <span>September</span>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <h4>Nullam nibh lacus</h4>
                                    <span>Category Two</span>
                                    <p>Mauris sit amet quam congue, pulvinar urna et, congue diam. Suspendisse eu lorem massa. Integer sit amet posuere.</p>
                                    <div className="row">
                                        <div className="col-md-6 first-button">
                                            <div className="text-button">
                                                <a href="#">Add to favorites</a>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="text-button">
                                                <a href="#">Continue Reading</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="featured-item">
                                <div className="thumb">
                                    <img src="images/featured_item_3.jpg" alt="" />
                                    <div className="overlay-content">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="date-content">
                                        <h6>12</h6>
                                        <span>October</span>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <h4>Suspendisse semper non</h4>
                                    <span>Category Three</span>
                                    <p>Praesent iaculis gravida elementum. Proin fermentum neque facilisis semper pharetra. Sed vestibulum vehicula tincidunt.</p>
                                    <div className="row">
                                        <div className="col-md-6 first-button">
                                            <div className="text-button">
                                                <a href="#">Add to favorites</a>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="text-button">
                                                <a href="#">Continue Reading</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default FeaturedPlaces