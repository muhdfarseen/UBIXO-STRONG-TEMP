import AnimatedText from "@/components/common/AnimatedText";
import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import RetaledProject1 from "@/components/portfolio/relatedProjects/RetaledProject1";
import Features from "@/components/homes/home-10/Features";
import Image from "next/image";
import { strongMultiPages } from "@/data/menu";
import dynamic from "next/dynamic";
import Link from "next/link";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import { allPortfolios } from "@/data/portfolio";
export const metadata = {
  title:
    "Strong Portfolio Single || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default async function StrongPortfolioSinglePage(props) {
  const params = await props.params;
  const portfolioItem =
    allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];
  return (
    <>
      <div className="theme-strong">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
            <Header10 links={strongMultiPages} />
          </nav>
          <main className="main">
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
                      <AnimatedText
                        text={portfolioItem.title
                          .split(" ")
                          .slice(0, 1)
                          .join(" ")}
                      />{" "}
                      <span className="font-alt">
                        <AnimatedText text={"Business Setup in Abu Dhabi"} />
                      </span>
                    </span>
                  </h1>
                </div>
                {/* End Home Section Content */}
              </div>
            </ParallaxContainer>
            <>
              <section className="page-section pt-50 pb-20">
                <div className="container relative">
                  <div className="row mb-sm-20">
                    <h2 className="h3 font-alt mb-20">
                      The capital advantage: Set up in Abu Dhabi mainland with
                      expert local support to maximise growth and compliance.
                    </h2>
                    <p className="mb-0">
                      At UBIXO, our Abu Dhabi mainland business setup team
                      combines deep regulatory knowledge with strategic
                      execution. We understand ADDED protocols, local customs,
                      and investor preferences. From selecting the right legal
                      structure to securing office space and visas, we offer an
                      end-to-end solution tailored to Abu Dhabi’s evolving
                      business ecosystem.
                    </p>
                  </div>
                </div>
              </section>

              <section className="page-section pt-20 pb-20">
                <div className="container relative ">
                  <div className="row ">
                    <div className="col-md-6 ">
                      <h2 className="h3 font-alt">Company Formation</h2>
                      <p>
                        Register your Abu Dhabi mainland company with full
                        support—from legal structure selection to ADDED
                        registration—delivered with clarity and speed.
                      </p>
                    </div>
                    <div className="col-md-6 ">
                      <h2 className="h3 font-alt">Trade Name Registration</h2>
                      <p>
                        We ensure your trade name meets ADDED standards, conduct
                        availability checks, and manage approvals to establish
                        your brand identity.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">
                        Corporate Administrative Support
                      </h2>
                      <p>
                        Let us handle renewals, document processing, and
                        ADDED/Government liaisons—so you stay focused on running
                        your business.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Mainland Licensing</h2>
                      <p>
                        From activity selection to application submission, we
                        manage all licensing steps under ADDED for complete
                        legal compliance.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">PRO & Visa Services</h2>
                      <p>
                        From investor and employee visa applications to Emirates
                        ID and labour card processing, we streamline every step
                        efficiently.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Bank Account Assistance</h2>
                      <p>
                        We connect you with Abu Dhabi’s top banks and assist
                        with document preparation for fast, compliant account
                        opening.
                      </p>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Office Setup Support</h2>
                      <p>
                        Whether you need a Flexi-desk or a full commercial unit,
                        we help you secure ADDED-compliant office space critical
                        for licensing.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Ongoing Compliance</h2>
                      <p>
                        Stay ahead with reminders and full support for renewals,
                        document updates, and regulatory changes affecting your
                        business.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="mt-0 mb-0" />
            </>
          </main>

          <Features />

          <hr className="mt-50 mb-0" />

          <div style={{ padding: "50px" }}>
            <h2 className="h3 font-alt text-center">Our Values</h2>
            <p className="text-center">
            We stand for clarity, compliance, and collaborative growth. At UBIXO, your business success is our shared mission.
            </p>
          </div>

          <div style={{ padding: "50px ", paddingTop: "0px" }}>
            <h2 className="h3 font-alt text-center">
              Trusted by Leading Companies
            </h2>
            <p className="text-center">logo here</p>
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px",
              paddingBottom: "30px",
            }}
          >
            <div className="w-[90%] md:w-[70%]">
              <h2 className="h3 font-alt text-center mb-8">
                FAQs – Mainland Company Formation in Abu Dhabi
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "What is a mainland company in Abu Dhabi?",
                    a: "A mainland company in Abu Dhabi is a business licensed by the Abu Dhabi Department of Economic Development (ADDED) that can operate across the UAE and internationally. These companies are not restricted to free zones and enjoy greater market access, flexibility, and government contract eligibility.",
                  },
                  {
                    q: "How much does it cost to start a mainland company in Abu Dhabi?",
                    a: "The cost to start a mainland company in Abu Dhabi ranges from AED 15,000 to AED 50,000, depending on your selected business activity, visa quota, office space (Ejari), and any additional government approvals required.",
                  },
                  {
                    q: "Can foreigners own 100% of a mainland company in Abu Dhabi?",
                    a: "Yes, as per the UAE Commercial Companies Law reforms, 100% foreign ownership is allowed for most business activities in Abu Dhabi mainland, without the need for a local Emirati partner.",
                  },
                  {
                    q: "How long does it take to get a mainland business license in Abu Dhabi?",
                    a: "It typically takes 5 to 10 working days to get a business license in Abu Dhabi mainland, provided all documents are accurate and approvals are granted without delays.",
                  },
                  {
                    q: "Do I need an office space to open a mainland company in Abu Dhabi?",
                    a: "Yes, ADDED requires a valid tenancy contract (Ejari) for an office, warehouse, or coworking space in order to issue a mainland license.",
                  },
                  {
                    q: "Can I apply for employee or investor visas under a mainland company in Abu Dhabi?",
                    a: "Yes. Once your mainland license is issued, you can apply for residency visas for investors and employees, subject to office size and business activity.",
                  },
                  {
                    q: "What are the benefits of setting up a mainland business in Abu Dhabi?",
                    a: "Some major benefits include 100% foreign ownership, unlimited market access across the UAE, eligibility for government contracts, no currency restrictions, and a business-friendly tax regime.",
                  },
                  {
                    q: "Is VAT registration mandatory for Abu Dhabi mainland companies?",
                    a: "VAT registration is required if your company’s annual taxable turnover exceeds AED 375,000, in accordance with the UAE Federal Tax Authority.",
                  },
                ].map((faq, index) => (
                  <details
                    key={index}
                    className="border rounded-lg p-4 group open:shadow-md transition-all"
                  >
                    <summary className="font-medium cursor-pointer text-lg text-gray-800 group-open:font-semibold">
                      {faq.q}
                    </summary>
                    <p className="mt-2 text-gray-600">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <div style={{ padding: "50px", paddingTop: "0px" }}>
            <h2 className="h3 font-alt text-center">
            Ready to Set Up in Abu Dhabi Mainland?
            </h2>
            <p className="text-center">
            UBIXO ensures a fast, compliant start with full support at every stage.<br /> <br />
              <Link
                href={`/contact`}
                className=" btn btn-mod btn-white btn-large btn-round btn-hover-anim"
              >
                <span>Contact us</span>
              </Link>
            </p>
          </div>

          <div
            style={{ paddingTop: "30px" }}
            className=" bg-dark-1 light-content"
          >
            <div className="max-w-6xl mx-auto px-4 space-y-6">
              <div>
                <h3 className="font-semibold text-base">
                  Mainland Company Formation in Abu Dhabi
                </h3>
                <p>
                Starting a mainland company in Abu Dhabi gives you the freedom to operate without restrictions across all emirates and internationally. Licensed by the Abu Dhabi Department of Economic Development (ADDED), mainland businesses enjoy unmatched flexibility, government contract eligibility, and ownership control.
                </p>
                <p>
                </p>
              </div>

              <div>
                <h4 className="font-medium">
                  Benefits of Abu Dhabi Mainland Business Setup
                </h4>
                <ul className="list-disc list-inside space-y-1">
                <li>
                <strong>100% Foreign Ownership:</strong> No local sponsor needed for most activities.
                </li>
                <li>
                <strong>Full UAE Market Access:</strong> Operate in any emirate or internationally.
                </li>
                <li>
                <strong>Eligibility for Government Contracts:</strong> Bid for local and federal tenders.
                </li>
                <li>
                <strong>Wide Range of Activities:</strong> Trade, professional, and industrial licenses available.
                </li>
                <li>
                <strong>Unlimited Visas:</strong> Based on your office size and business needs.
                </li>
                <li>
                <strong>No Currency Restrictions:</strong> Full repatriation of profits and capital allowed.
                </li>
                <li>
                <strong>Attractive Tax Environment:</strong> 0% personal tax and corporate tax benefits for SMEs.
                </li>
                <li>
                <strong>Business Growth Incentives:</strong> Abu Dhabi actively supports entrepreneurship and innovation.
                </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium">
                  Cost of Mainland Company Formation in Abu Dhabi
                </h4>
                <p>
                Starting a mainland company in Abu Dhabi typically costs between AED 15,000 and AED 50,000. Factors affecting cost include:
                </p>
                <ul className="list-disc list-inside space-y-1">
                <li>Business activity and license type (commercial, professional, or industrial)</li>
                <li>Visa quota required</li>
                <li>Office space or Ejari requirements</li>
                <li>Additional government approvals (if needed)</li>
                <li>Legal documentation and translation needs</li>
                </ul>
                <p>
                We offer customised packages tailored to your business model and growth objectives. For an accurate quote, consult our Abu Dhabi mainland setup experts.
                </p>
              </div>

              <div>
                <h4 className="font-medium">
                  Types of Mainland Licenses in Abu Dhabi
                </h4>
                <p>
                  There are three primary categories of business licenses for
                  mainland companies:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Commercial License:</strong> For trading, retail, or
                    general commercial activities.
                  </li>
                  <li>
                    <strong>Professional License:</strong> For service-oriented
                    businesses like consultancies, education, healthcare, and
                    IT.
                  </li>
                  <li>
                    <strong>Industrial License:</strong> For manufacturing,
                    production, and industrial operations.
                  </li>
                </ul>
                <p>
                  Each license type comes with its own set of requirements,
                  approvals, and permitted activities as defined by the DET.
                </p>
              </div>


              <div>
                <h4 className="font-medium">
                  Documents Required for Mainland Company Formation in the Abu Dhabi
                </h4>
                <p>
                  To register a mainland company in Abu Dhabi or anywhere in the
                  UAE, you’ll need to submit specific documents to the
                  Department of Economy and Tourism (DET) and other authorities.
                  Here’s a general list:
                </p>

                <p>
                  <strong>For Individual Shareholders:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Passport copy of all shareholders</li>
                  <li>UAE entry stamp or visa copy (if applicable)</li>
                  <li>Passport-sized photographs (white background)</li>
                  <li>Emirates ID copy (for residents)</li>
                  <li>
                    NOC from current sponsor (if UAE resident and employed)
                  </li>
                </ul>

                <p>
                  <strong>For Corporate Shareholders:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Certificate of incorporation</li>
                  <li>Memorandum & Articles of Association (MOA/AOA)</li>
                  <li>Board resolution to establish the new company</li>
                  <li>
                    Power of Attorney (POA) in favour of a legal representative
                  </li>
                  <li>Trade license copy (if applicable)</li>
                </ul>

                <p>
                  <strong>General Business Setup Documents:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Proposed trade name approval</li>
                  <li>Initial approval certificate from DET</li>
                  <li>Tenancy contract (Ejari) for office space</li>
                  <li>MOA/LSA Agreement (if required by business type)</li>
                  <li>
                    Additional approvals (e.g. from Abu Dhabi Municipality, DHA,
                    MOHRE, etc.) depending on activity
                  </li>
                </ul>

                <p>
                  <strong>Note:</strong> Document requirements can vary
                  depending on your business activity and legal structure.
                  Always consult our experts at UBIXO to get a checklist
                  tailored to your setup.
                </p>
              </div>

              <div>
                <h4 className="font-medium">
                  Ready to Launch Your Abu Dhabi Mainland Business?
                </h4>
                <p>
                  Start your journey to business success in Abu Dhabi or anywhere in
                  the UAE. Let UBIXO handle the legalities while you focus on
                  growth.
                </p>
                <p className="mb-0">
                  Call us today or{" "}
                  <a href="#contact" className="underline text-blue-600">
                    Contact Us
                  </a>{" "}
                  to get your mainland license with confidence and clarity.
                </p>
              </div>
            </div>
          </div>

          <footer className="footer-1 bg-dark-1 light-content">
            <Footer9 />
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
