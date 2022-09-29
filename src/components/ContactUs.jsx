import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import '../assets/css/Bootstrapstyle.css'
import OpenModall from './OpenModall';


export const ContactUs = () => {
    const [modal, setModal] = useState(false)

    // const toggleModal = () => {
    //     setModal(!modal)
    // }

    return (
        <>


            <section className="contact" id="ContactUs" >
                <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907" width="100%" height="500px" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
                </div>
                <div className="container" >

                    <div className="col-md-10 col-md-offset-1">

                        <div className="wrapper">
                            <div className="section-heading">
                                <span>Contact Us</span>
                                <h2>Vivamus nec vehicula felis</h2>
                            </div>
                            <button className="modal-btn" onClick={() => setModal(!modal)}>Talk to us</button>

                        </div>

                        <AnimatePresence>
                            {
                                modal && <OpenModall closeModal={setModal} />
                            }
                        </AnimatePresence>
                    </div>

                </div>

            </section>




        </>
    )
}
