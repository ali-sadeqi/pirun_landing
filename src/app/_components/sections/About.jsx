"use client";

import Data from "@data/sections/about.json";
import ReactPlayer from "react-player";
import Image from "next/image";
import { useEffect, useState } from "react";

import "react-modal-video/css/modal-video.css";

const AboutSection = () => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  console.log(Data);

  return (
    <>
      {/* about */}
      <section>
        <div className="container  mil-p-0-30">
          <div className="mil-background-grid mil-softened" />
          {Data.map((item, index) => (
            <div
              id={item.section}
              key={index}
              className={`col justify-content-between align-items-center`}
              style={{ marginTop: "100px" }}
            >
              <div
                className={`${
                  item.image ? "row" : "col"
                } justify-content-between align-items-center ${
                  index % 2 === 0 ? "flex-sm-row-reverse" : "flex-sm-row"
                } `}
              >
                <div className={`${item.image ? "col-lg-8" : "col-lg-10"}`}>
                  <div className="">
                    <h3
                      className="mil-mb-30"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <p
                      style={{ lineHeight: "35px" }}
                      className="mil-up mil-mb-40"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
                <div
                  className={`${item.image ? "col-lg-4" : "col-lg-12"}`}
                  style={
                    item.image
                      ? {}
                      : {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                        }
                  }
                >
                  <div
                    className="mil-illustration mil-up mil-mb-90"
                    style={item.image ? {} : { paddingBottom: "0" }}
                  >
                    <div
                      className={`${
                        item.image ? "mil-image-frame" : "videoContainer"
                      }`}
                      style={{ borderRadius: "4px" }}
                    >
                      {/* <img
                        src={item.image.url}
                        alt={item.image.alt}
                        className="mil-scale"
                        data-value-1="1"
                        data-value-2="1.3"
                      /> */}

                      {item.image ? (
                        <Image
                          src={item.image.url}
                          alt={item.image.alt}
                          width={700}
                          height={700}
                        />
                      ) : (
                        hasWindow && (
                          <ReactPlayer
                            // onPlay={() => setIsPlay(true)}
                            // onPause={() => setIsPlay(false)}
                            playsinline={true}
                            playing={true}
                            muted={true}
                            loop={true}
                            // controls
                            progressInterval={1000}
                            url={
                              "https://firebasestorage.googleapis.com/v0/b/public-iframe/o/host-videos%2FTracking%20-%20Pirun.mp4?alt=media&token=3468f7e4-62cc-4500-bde5-54161bb40406"
                            }
                            className="z-50"
                          />
                          // <ReactPlayer url="https://www.youtube.com/watch?v=4iNMyilmDfg" />
                        )
                      )}
                    </div>
                    {/* <div className="mil-about-counter">
                    <h1
                      className="mil-counter mil-right mil-mb-10"
                      data-number={item.number.value}>
                      0
                    </h1>
                    <h5
                      className="mil-upper mil-right"
                      dangerouslySetInnerHTML={{ __html: item.number.label }}
                    />
                  </div> */}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "10%",
                }}
              >
                {item.subSections.map((sub, subindex) => (
                  <div
                    className=""
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10%",
                      width: "45%",
                      marginBottom: "50px",
                    }}
                    key={subindex}
                  >
                    <h5 style={{ marginBottom: "15px" }}>{sub.title}</h5>
                    <p className="text-justify">{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutSection;
