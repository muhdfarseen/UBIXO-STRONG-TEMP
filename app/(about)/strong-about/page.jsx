import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Team from "@/components/homes/home-10/Team";
import Testimonials from "@/components/homes/home-10/Testimonials";
import { featuresListData } from "@/data/features";

import { strongMultiPages } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import ParallaxContainer from "@/components/common/ParallaxContainer";
const dark = false;
const onePage = false;
export const metadata = {
  title:
    "Home 10 About || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function StrongAboutPage() {
  return (
    <>
      <div className="theme-strong">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
            <Header10 links={strongMultiPages} />
          </nav>
          <main id="main">
            {/* Home Section */}
            <ParallaxContainer
              className="page-section bg-dark-alpha-30 light-content parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-strong/section-bg-1.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-sm-30">
                {/* Home Section Content */}
                <div className="home-content text-center">
                  <h1 className="hs-title-7 mb-0">
                    <span className="wow charsAnimIn-2" data-splitting="chars">
                    About <span className="font-alt">Us</span>
                    </span>
                  </h1>
                </div>
                {/* End Home Section Content */}
              </div>
            </ParallaxContainer>
            {/* End Home Section */}
            {/* About Section */}
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
              id="about"
            >
              <div className="container">
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
                      <p className="lead mt-0 mb-40">
                      At UBIXO, we simplify business setup across all seven Emirates—making it faster, clearer, and fully compliant with UAE laws. Whether you're an investor, entrepreneur, or international corporation, we guide you through every step of establishing your company.
                      </p>
                      <p className="mb-40">
                      With 13+ years of local expertise and over 3,000 successful formations, UBIXO is more than a consultancy—we’re your strategic partner in growth. From trade licenses and visas to PRO services and compliance, we offer an end-to-end solution tailored to your business vision.
                      </p>
                    </div>

                    <div
                      className="local-scroll wow fadeInUp"
                      data-wow-offset="0"
                    >
                      <Link
                        href={`/strong-services${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                      >
                        <span>
                          View Services
                          <span className="visually-hidden">About Us</span>
                        </span>
                      </Link>
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
            {/* End About Section */}
            {/* Divider */}
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
                        Meet the <span className="font-alt">team of</span>{" "}
                        business setup experts
                      </h3>
                      <p className="mb-40">
                      At UBIXO, our strength lies in our diverse and dedicated team of experts. From legal advisors to visa specialists, each member brings local insight and global experience to help you set up and scale in the UAE.
                      </p>
                      <div className="local-scroll">
                        <Link
                          href={`/strong-contact${dark ? "-dark" : ""}`}
                          className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                        >
                          <span>Join our Team</span>
                        </Link>
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
            {/* <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} /> */}
            {/* End Team Section */}
            {/* Split Section */}
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
                        What We <span className="font-alt">Do Best</span>{" "}
                      </h2>
                      <p className="mb-50">
                      Our team handles the heavy lifting—legal paperwork, government submissions, and licensing—so you can stay focused on launching and scaling your business.
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
                            <div className="features-list-text">
                              {item.text}
                            </div>
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
            {/* End Split Section */}
            {/* Testimonials Section */}
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
                    We’ve helped thousands of entrepreneurs and companies launch their businesses across the UAE. Our clients value our fast process, expert guidance, and transparent support—every step of the way. Read what they say about partnering with UBIXO for their business setup journey.

                    </p>
                  </div>
                </div>
                <Testimonials />
              </div>
            </section>
            {/* End Testimonials Section */}
          </main>

          <footer className="footer-1 bg-dark-1 light-content">
            <Footer9 />
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
