import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
const Carousel = () => {
  return (
    <>

      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[ FreeMode,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide-container">
          <div className="item popular-item">
            <div className="thumb">
              <img src="images/1.jpg" alt="" />
              <div className="text-content">
                <h4>Mauris tempus</h4>
                <span>76 listings</span>
              </div>
              <div className="plus-button">
                <a href="#"><i className="fa fa-plus"></i></a>
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide className="swiper-slide-container">
          <div className="item popular-item">
            <div className="thumb">
              <img src="images/1.jpg" alt="" />
              <div className="text-content">
                <h4>Mauris tempus</h4>
                <span>76 listings</span>
              </div>
              <div className="plus-button">
                <a href="#"><i className="fa fa-plus"></i></a>
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide className="swiper-slide-container">
          <div className="item popular-item">
            <div className="thumb">
              <img src="images/1.jpg" alt="" />
              <div className="text-content">
                <h4>Mauris tempus</h4>
                <span>76 listings</span>
              </div>
              <div className="plus-button">
                <a href="#"><i className="fa fa-plus"></i></a>
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide className="swiper-slide-container">
          <div className="item popular-item">
            <div className="thumb">
              <img src="images/1.jpg" alt="" />
              <div className="text-content">
                <h4>Mauris tempus</h4>
                <span>76 listings</span>
              </div>
              <div className="plus-button">
                <a href="#"><i className="fa fa-plus"></i></a>
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide className="swiper-slide-container">
          <div className="item popular-item">
            <div className="thumb">
              <img src="images/1.jpg" alt="" />
              <div className="text-content">
                <h4>Mauris tempus</h4>
                <span>76 listings</span>
              </div>
              <div className="plus-button">
                <a href="#"><i className="fa fa-plus"></i></a>
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide className="swiper-slide-container">
          <div className="item popular-item">
            <div className="thumb">
              <img src="images/1.jpg" alt="" />
              <div className="text-content">
                <h4>Mauris tempus</h4>
                <span>76 listings</span>
              </div>
              <div className="plus-button">
                <a href="#"><i className="fa fa-plus"></i></a>
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide className="swiper-slide-container">
          <div className="item popular-item">
            <div className="thumb">
              <img src="images/1.jpg" alt="" />
              <div className="text-content">
                <h4>Mauris tempus</h4>
                <span>76 listings</span>
              </div>
              <div className="plus-button">
                <a href="#"><i className="fa fa-plus"></i></a>
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide className="swiper-slide-container">
          <div className="item popular-item">
            <div className="thumb">
              <img src="images/1.jpg" alt="" />
              <div className="text-content">
                <h4>Mauris tempus</h4>
                <span>76 listings</span>
              </div>
              <div className="plus-button">
                <a href="#"><i className="fa fa-plus"></i></a>
              </div>
            </div>
          </div></SwiperSlide>
          
       
      </Swiper>

    </>
  )
}

export default Carousel