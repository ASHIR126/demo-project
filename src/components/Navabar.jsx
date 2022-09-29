import React from 'react'
import { Link } from 'react-scroll'
import '../assets/css/Bootstrapstyle.css'
// import './assets/css/NavBar.css'
const Navabar = () => {

    return (
        <>
            
                <div class="menu-bar">
                    <div className="logo">
                        <img src="assets/img/logo.png" alt="Venue Logo" />
                    </div>
                  
                        <ul>
                            <li><a href="#">Popular </a></li>
                            <li><a href="#">Most visited <i class="fa fa-solid fa-caret-down"></i></a>

                                <div class="dropdown-menu">
                                    <ul>
                                        <li>
                                            <a href="#">Most visited 1 <i class="fa fa-solid fa-caret-right"></i> </a>
                                            <div class="dropdown-menu-1 "  >
                                                <ul>
                                                    <li><a href="#">Sub Visited 1 </a></li>
                                                    <li><a href="#">Sub Visited 1</a></li>
                                                    <li><a href="#">Sub Visited 1</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#">Most visited 2 <i class="fa fa-solid fa-caret-right"></i></a>
                                            <div class="dropdown-menu-1">
                                                <ul>
                                                    <li><a href="#">Sub Visited 1</a></li>
                                                    <li><a href="#">Sub Visited 1</a></li>
                                                    <li><a href="#">Sub Visited 1</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#">Most visited 3 <i class="fa fa-solid fa-caret-right"></i></a>
                                            <div class="dropdown-menu-1">
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
                            <li><Link className="scrollTo" to="OurServices" spy={true} smooth={true} offset={50} duration={800} delay={-1000}>Our Services</Link></li>
                            <li><Link className="scrollTo" to="Blog" spy={true} smooth={true} offset={50} duration={500}>Blog Entries</Link></li>
                            <li><Link className="scrollTo" to="ContactUs" spy={true} smooth={true} offset={50} duration={800}>Contact Us</Link></li>

                        </ul>
                    
                </div>
            

        </>
    )
}

export default Navabar