import Head from "next/head";
import AnimatedText from "@/components/common/AnimatedText";
import React from "react";

export default function Hero1() {
  return (
    <>
      <Head>
        <title>Business Setup in Dubai, UAE | Trusted Partner Since 2010</title>
        <meta
          name="description"
          content="The UAE's most trusted business setup partner in Dubai, Abu Dhabi & across the UAE since 2010. Discover how we can help you establish your business."
        />
        <meta
          name="keywords"
          content="Business Setup, Dubai Business, UAE Business, Company Formation, Business Partner"
        />
        <meta name="author" content="UBIXO" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Business Setup in Dubai, UAE" />
        <meta
          property="og:description"
          content="The UAE's most trusted business setup partner in Dubai, Abu Dhabi & across the UAE since 2010."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ubixouae.com.com" />
        
      </Head>
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        {/* Home Section Content */}
        <div className="home-content text-center">
          <h1 className="hs-title-7 mb-40">
            <span className="wow charsAnimIn-1" data-splitting="chars">
              <AnimatedText text="Business Setup" />{" "} <br />
              <span className="font-alt">
                <AnimatedText text="in Dubai," />{" "}
              </span>{" "}
              <AnimatedText text=" UAE" />
            </span>
          </h1>
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <hr
                className="white mt-0 mb-30 wow scalexIn"
                data-wow-delay="0.85s"
              />
              <div className="row wow fadeInUpShort" data-wow-delay="1.35s">
                <div className="col-sm-6 col-md-7 text-center text-sm-start mb-xs-30">
                  <p className="mb-0">
                  UBIXO helps you launch your business in the UAE with ease from licenses to visas and legalities, we handle it all so you can focus on growth.                  </p>
                </div>
                <div className="col-sm-6 col-md-5 text-center text-sm-end local-scroll">
                  <a
                    href="#about"
                    className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                  >
                    <span>Discover Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Home Section Content */}
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap-4 wow fadeInUp"
          data-wow-offset={0}
        >
          <div className="full-wrapper text-end">
            <a href="#about" className="scroll-down-4">
              <i className="icon-arrow-down" />
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
      </div>
    </>
  );
}