"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from "@data/sliders/process.json";

const ProcessSlider = ({ bgStyle = "default", paddingTop = "120" }) => {
  return (
    <>
      {/* process slider */}
      <section className={`mil-${bgStyle}-bg mil-relative`}>
        {bgStyle == "soft" && (
          <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />
        )}

        <div className={`container mil-p-${paddingTop}-60`}>
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="mil-mb-90">
                <h2
                  className="mil-upper mil-up"
                  dangerouslySetInnerHTML={{ __html: Data.title }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-adaptive-right mil-up mil-mb-90">
                <div className="mil-nav-buttons">
                  <div className="mil-slider-button mil-process-prev">Prev</div>
                  <div className="mil-slider-button mil-process-next">Next</div>
                </div>
              </div>
            </div>
          </div>

          <Swiper
            {...SliderProps.milProcessSlider}
            className="swiper-container mil-process-slider">
            <div className="swiper-wrapper">
              {Data.slides.map((slide, slide_key) => (
                <SwiperSlide
                  className="swiper-slide"
                  key={`process-slider-item-${slide_key}`}>
                  <div className="swiper-slide">
                    <div className="row">
                      {slide.map((item, key) => (
                        <div
                          className="col-lg-4"
                          key={`process-slider-item-${slide_key}-step-${key}`}>
                          <div
                            className="mil-process-box mil-icon-box mil-up mil-mb-60"
                            data-swiper-parallax-duration="400"
                            data-swiper-parallax="-900"
                            data-swiper-parallax-scale=".8"
                            data-swiper-parallax-opacity="0">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                              <img src="/img/icons/11.svg" alt="icon" />
                            </div>
                            <h4 className="mil-mb-30">{item.title}</h4>
                            <p>{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>

          {/* <div style={{ textAlign: "center" }}>
            <h2 style={{ marginBottom: "12px", textAlign: "center" }}>
              Let's Work Together
            </h2>
            <p style={{ width: "50%", textAlign: "center", margin: "0 auto" }}>
              Ready to explore how AI can transform your business? Contact us
              today to discuss your needs and learn more about our innovative
              solutions.
            </p>
          </div> */}
        </div>
      </section>
      {/* process slider end */}
    </>
  );
};
export default ProcessSlider;
