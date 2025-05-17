"use client";

import Team from "./Team";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Newsletter from "./Newsletter";
import Contact from "./Contact";
import Link from "next/link";
import { useEffect } from "react";
import { featuresListData } from "@/data/features";
import Image from "next/image";

export default function Home10({ onePage = false, dark = false }) {
  useEffect(() => {
    const addPaddingLeft = () => {
      document.getElementById("paddingLeft").style.paddingLeft = `${
        (window.innerWidth -
          document.getElementById("paddingLeftContainer").offsetWidth) /
        2
      }px`;
    };
    const addPaddingRight = () => {
      document.getElementById("paddingRight").style.paddingRight = `${
        (window.innerWidth -
          document.getElementById("paddingRightContainer").offsetWidth) /
        2
      }px`;
    };
    addPaddingLeft();
    addPaddingRight();
    window.addEventListener("resize", addPaddingLeft);
    window.addEventListener("resize", addPaddingRight);
    return () => {
      window.removeEventListener("resize", addPaddingLeft);
      window.removeEventListener("resize", addPaddingRight);
    };
  }, []);

  return (
    <>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-caption-border">ABOUT US</h2>
              <h3 className="section-title-strong mb-90 mb-sm-50">
                Experts <span className="font-alt">in</span> Business Setup
                <span className="font-alt"> and</span> UAE Market Navigators
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 mb-xs-50">
              <div className="call-action-4-images">
                <div className="call-action-4-image-1">
                  <Image
                    width={500}
                    height={692}
                    src="/assets/images/demo-strong/section-image-1.jpg"
                    alt="Image description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                  />
                </div>
                <div className="call-action-4-image-2">
                  <Image
                    width={500}
                    height={692}
                    src="/assets/images/demo-strong/section-image-2.jpg"
                    alt="Image description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset="0"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-lg-6 col-xl-4 offset-xl-1 mt-n10">
              <div className="wow linesAnimIn" data-splitting="lines">
                <p className="lead mt-0 mb-20">
                  UBIXO is a trusted business setup consultancy helping global
                  entrepreneurs start and grow in the UAE.
                  <br />
                  We specialise in company formation, PRO services, and
                  licensing across all Emirates.
                </p>
                <p className="mb-20">
                  We simplify the process, handle all the paperwork, and ensure
                  full compliance with UAE laws. With years of experience and
                  local insight, we make business setup in the UAE easy and
                  efficient.
                </p>
              </div>

              <div className="local-scroll wow fadeInUp" data-wow-offset="0">
                {onePage ? (
                  <>
                    <a
                      href="#team"
                      className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                    >
                      <span>
                        Get a Free Consultation Today
                        <span className="visually-hidden">About Us</span>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/strong-about${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                    >
                      <span>
                        Get a Free Consultation Today
                        <span className="visually-hidden">About Us</span>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-2 offset-xl-1 d-none d-lg-block">
              <div className="round overflow-hidden">
                <Image
                  width={330}
                  height={894}
                  src="/assets/images/demo-strong/section-image-3.jpg"
                  alt="Image description"
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="team"
      >
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-xl-5 d-flex align-items-center team-1-column-sticky mb-lg-90 mb-sm-50">
              <div>
                <h2 className="section-caption-border">Our Team</h2>
                <h3 className="section-title-strong mb-40">
                  Meet the<span className="font-alt">team of</span> of business
                  setup experts
                </h3>
                <p className="mb-40">
                  At UBIXO, our strength lies in our diverse and dedicated team
                  of experts. From legal advisors to visa specialists, each
                  member brings local insight and global experience to help you
                  set up and scale in the UAE.
                </p>
                <div className="local-scroll">
                  {onePage ? (
                    <>
                      {" "}
                      <a
                        href="#contact"
                        className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                      >
                        <span>Join our Team</span>
                      </a>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Link
                        href={`/strong-contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                      >
                        <span>Join our Team</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* End Left Column */}
            {/* Right Column */}
            <div className="col-xl-6 offset-xl-1">
              <Team />
            </div>
            {/* End Right Column */}
          </div>
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-caption-border">Our Services</h2>
              <h3 className="section-title-strong mb-90 mb-sm-50">
                We provide the <span className="font-alt">full stack of </span>
                business setup solutions
              </h3>
            </div>
          </div>
          {/* Nav tabs */}

          <Service />
          {/* End Tab panes */}
        </div>
      </section>
      <section className="pt-30">
        <div id="paddingLeftContainer" className="container"></div>
        <div className="row g-0">
          <div className="col-lg-6">
            <div
              id="paddingLeft"
              className={`split-column-left ${
                dark ? "bg-dark-2" : "bg-dark-1"
              }  light-content position-relative d-flex align-items-center`}
            >
              {/* Decorative Dots */}
              <div className="position-absolute top-0 end-0 pt-2 pe-2 opacity-02">
                <Image
                  width={192}
                  height={222}
                  src="/assets/images/demo-strong/decoration.svg"
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}
              <div>
                <h2 className="section-title mb-30">
                  Ready to
                  <span className="font-alt"> start your</span> business in the
                  UAE
                </h2>
                <p className="mb-50">
                  Whether it’s a mainland company, a free zone license, or a
                  long-term Golden Visa, UBIXO is here to make it simple, fast,
                  and fully compliant.
                  <br />
                  <b>Let’s build your success story in the UAE.</b>
                </p>

                <div className="local-scroll">
                  {onePage ? (
                    <>
                      <a
                        href="#contact"
                        className="btn btn-mod btn-white btn-w btn-large btn-round btn-hover-anim"
                      >
                        <span>START YOUR SETUP</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <Link
                        href={`/strong-contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-white btn-w btn-large btn-round btn-hover-anim"
                      >
                        <span>START YOUR SETUP</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch mt-n30 mt-md-0 mb-30 mb-md-0">
            <div
              className="split-image-right"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              <Image
                width={1100}
                height={930}
                src="/assets/images/demo-strong/split-image-1.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  overflow-hidden  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <Portfolio />
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section overflow-hidden  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
      >
        <Features />
      </section>
      <section className="pt-30">
        <div id="paddingRightContainer" className="container" />
        <div className="row g-0">
          <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
            <div
              id="paddingRight"
              className={`split-column-right ${
                dark ? "bg-dark-2" : "bg-dark-1"
              } light-content position-relative d-flex align-items-center`}
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              {/* Decorative Dots */}
              <div className="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
                <Image
                  width={192}
                  height={222}
                  src="/assets/images/demo-strong/decoration.svg"
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}
              <div>
                <h2 className="section-title mb-30">
                  Efficient,{" "}
                  <span className="font-alt">compliant and built</span> for
                  success.
                </h2>
                <p className="mb-50">
                  UBIXO helps you launch and grow your UAE business with
                  flexible packages, fast processing, and full government
                  compliance.
                </p>
                {/* Features List */}
                <div className="row mt-n20">
                  {/* Features List Item */}
                  {featuresListData.map((item, index) => (
                    <div
                      key={index}
                      className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20"
                    >
                      <div className="features-list-icon">
                        <i className="mi-check" />
                      </div>
                      <div className="features-list-text">{item.text}</div>
                    </div>
                  ))}
                  {/* End Features List Item */}
                </div>
                {/* End Features List */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
            <div className="split-image-left">
              <Image
                width={1100}
                height={930}
                src="/assets/images/demo-strong/split-image-2.jpg"
                alt="Image Description"
              />
              {/* Circle Text */}
              <div className="position-absolute bottom-0 start-0 ps-4 pb-4 d-none d-sm-block">
                <Image
                  src="/assets/images/demo-strong/circle-text.svg"
                  width={138}
                  height={138}
                  alt="Image Description"
                />
              </div>
              {/* End Circle Text */}
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section overflow-hidden  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
      >
        <div className="container">
          <div className="row mb-90 mb-sm-50">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-title-strong mb-40">
                Clients <span className="font-alt">Stories</span>
              </h2>
              <p className="mb-0">
                We’ve helped thousands of entrepreneurs and companies launch
                their businesses across the UAE. Our clients value our fast
                process, expert guidance, and transparent support—every step of
                the way. Read what they say about partnering with UBIXO for
                their business setup journey.
              </p>
            </div>
          </div>
          <Testimonials />
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="blog"
      >
        <Blog />
      </section> */}
      <section
        className="page-section bg-dark-1 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-2.jpg)",
        }}
      >
        <Newsletter />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <Contact />
      </section>
    </>
  );
}
