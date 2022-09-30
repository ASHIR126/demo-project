import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Bootstrapstyle.css'


const Navabar = () => {

    return (
        <>

            <div className="menu-bar">
                <div className="logo">
                    <img src="assets/img/logo.png" alt="Venue Logo" />
                </div>

                <ul>
                    <li><Link path='/'>Popular </Link></li>
                    <li><Link path='/'>Most visited <i className="fa fa-solid fa-caret-down"></i></Link>

                        <div className="dropdown-menu">
                            <ul>
                                <li>
                                    <a href="#">Most visited 1 <i className="fa fa-solid fa-caret-right"></i> </a>
                                    <div className="dropdown-menu-1 "  >
                                        <ul>
                                            <li><a href="#">Sub Visited 1 </a></li>
                                            <li><a href="#">Sub Visited 1</a></li>
                                            <li><a href="#">Sub Visited 1</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="#">Most visited 2 <i className="fa fa-solid fa-caret-right"></i></a>
                                    <div className="dropdown-menu-1">
                                        <ul>
                                            <li><a href="#">Sub Visited 1</a></li>
                                            <li><a href="#">Sub Visited 1</a></li>
                                            <li><a href="#">Sub Visited 1</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="#">Most visited 3 <i className="fa fa-solid fa-caret-right"></i></a>
                                    <div className="dropdown-menu-1">
                                        <ul>
                                            <li><a href="#">Sub Visited 1</a></li>
                                            <li><a href="#">Sub Visited 12</a></li>
                                            <li><a href="#">Sub Visited 1</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li><Link to='/Services'>Our Services</Link></li>
                    <li><Link to= '/blogs'>Blog Entries</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>

                </ul>


            </div>
            <div>

            </div>

        </>
    )
}

export default Navabar