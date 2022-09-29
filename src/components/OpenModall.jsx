import React, { useState } from 'react';
// import './assets/css/Modal.css'
import { motion, AnimatePresence } from 'framer-motion'


const OpenModall = ({ closeModal }) => {
    return (
        <>
            <div className="modal-background" onClick={() => closeModal(false)} >
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: -100, transition: { duration: 0.5 }, opacity: 1 }}
                    exit={{ opacity: 0, y: 100, transition: { duration: 0.5 }, }}
                    
                    className="modal-contents" >
                    <div className="close fa fa-close" ></div>
                    <div className="left-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <span>Talk To Us</span>
                                    <h2>Let's have a discussion</h2>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <fieldset>
                                    <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required />
                                </fieldset>
                            </div>
                            <div className="col-md-6">
                                <fieldset>
                                    <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject..." required />
                                </fieldset>
                            </div>
                            <div className="col-md-12">
                                <fieldset>
                                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required></textarea>
                                </fieldset>
                            </div>
                            <div className="col-md-12">
                                <fieldset>
                                    <button type="submit" id="form-submit" className="btn">Send Message</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="right-content">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="content">
                                        <div className="section-heading">
                                            <span>More About Us</span>
                                            <h2>Venue Company</h2>
                                        </div>
                                        <p>Etiam viverra nibh at lorem hendrerit porta non nec ligula. Donec hendrerit porttitor pretium. Suspendisse fermentum nec risus eu bibendum.</p>
                                        <ul>
                                            <li><span>Phone:</span><a href="#">010-050-0550</a></li>
                                            <li><span>Email:</span><a href="#">hi@company.co</a></li>
                                            <li><span>Address:</span><a href="#">company.co</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>


        </>
    )
}

export default OpenModall