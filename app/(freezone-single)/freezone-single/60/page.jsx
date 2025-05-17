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
              We believe in strategic guidance, trusted partnerships, and
              collaborative solutions that simplify business setup and drive
              long-term success in the UAE.
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
                FAQs – Mainland Company Formation in UAE
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "What is a mainland license in Dubai?",
                    a: "A mainland license in Dubai allows businesses to operate anywhere in the UAE and internationally. It’s issued by the DED and suits a wide range of business activities.",
                  },
                  {
                    q: "How much does Dubai mainland company formation cost?",
                    a: "The cost ranges from AED 18,000 to AED 30,000, depending on your business activity, visa quota, and office space requirements.",
                  },
                  {
                    q: "Can foreigners own 100% of a Dubai mainland company?",
                    a: "Yes, in most sectors, foreign investors can now own 100% of a mainland business without the need for a UAE national sponsor.",
                  },
                  {
                    q: "How long does it take to get a mainland license in Dubai?",
                    a: "It typically takes 5 to 10 business days if all documents are submitted correctly and approvals are obtained without delays.",
                  },
                  {
                    q: "What are the benefits of setting up a mainland company in the UAE?",
                    a: "Mainland companies enjoy full UAE market access, no currency restrictions, eligibility for government contracts, and the ability to do business internationally.",
                  },
                  {
                    q: "Do I need a physical office for a mainland license in Dubai?",
                    a: "Yes, the Dubai DED requires a valid tenancy contract (Ejari) for office or shared workspace to issue a mainland trade license.",
                  },
                  {
                    q: "Can I apply for employee visas under a mainland company license?",
                    a: "Yes, once your mainland license is issued, you can apply for employment visas based on your company’s activity and office space size.",
                  },
                  {
                    q: "Is VAT registration mandatory for mainland companies?",
                    a: "VAT registration is required if your company’s taxable turnover exceeds AED 375,000 per year, as per UAE Federal Tax Authority guidelines.",
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
                  Mainland Company Formation in UAE
                </h3>
                <p>
                  Setting up a mainland company in the UAE offers unmatched
                  business freedom and growth potential. Licensed by the
                  Department of Economy and Tourism (DET) in Dubai and other
                  emirates, mainland businesses are allowed to operate across
                  the UAE and internationally.
                </p>
                <p>
                  With the 2021 reform to the Commercial Companies Law, most
                  business activities now allow 100% foreign
                  ownership—eliminating the need for a local sponsor in most
                  cases. This development has made Dubai mainland company
                  formation an even more attractive option for investors,
                  entrepreneurs, and corporations looking to establish a
                  regional base.
                </p>
              </div>

              <div>
                <h4 className="font-medium">
                  Benefits of UAE Mainland Business Setup
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Operate Without Limitations:</strong> Mainland
                    companies can trade freely anywhere in the UAE without
                    restrictions, unlike free zone companies.
                  </li>
                  <li>
                    <strong>Access to Government Contracts:</strong> Only
                    mainland businesses are eligible to bid for lucrative UAE
                    government projects and tenders.
                  </li>
                  <li>
                    <strong>100% Foreign Ownership in Key Sectors:</strong>{" "}
                    Expats can now fully own their mainland business in most
                    sectors, thanks to UAE's new business ownership laws.
                  </li>
                  <li>
                    <strong>Flexible Business Activities:</strong> Mainland
                    licenses cover a broad range of commercial, professional,
                    and industrial activities approved by the DET.
                  </li>
                  <li>
                    <strong>Unlimited Office and Visa Capacity:</strong> The
                    larger your office space, the more visas you can apply for
                    under a UAE mainland license.
                  </li>
                  <li>
                    <strong>Global and Local Reach:</strong> Mainland businesses
                    in Dubai enjoy both international access and full
                    penetration into the local UAE market.
                  </li>
                  <li>
                    <strong>No Currency Restrictions:</strong> There are no
                    limits on capital repatriation or currency exchange,
                    promoting free and seamless financial operations.
                  </li>
                  <li>
                    <strong>Attractive Tax Regime:</strong> UAE mainland
                    businesses benefit from 0% personal income tax and
                    competitive corporate tax rates. Eligible SMEs and startups
                    may also enjoy tax exemptions and simplified compliance
                    under the UAE’s corporate tax framework.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium">
                  Cost of Mainland Company Formation in Dubai, UAE
                </h4>
                <p>
                  The cost of forming a mainland company in Dubai typically
                  ranges from AED 15,000 to AED 50,000, depending on factors
                  like:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Business activity and license type (commercial,
                    professional, or industrial)
                  </li>
                  <li>Visa quota required</li>
                  <li>Office space or Ejari requirements</li>
                  <li>Additional government approvals (if needed)</li>
                  <li>Legal documentation and translation needs</li>
                </ul>
                <p>
                  We offer customised packages for startups, SMEs, and
                  established corporations. To get an exact estimate, consult
                  our mainland business setup experts.
                </p>
              </div>

              <div>
                <h4 className="font-medium">
                  Types of Mainland Licenses in Dubai
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
                  Step-by-Step Process for Mainland Company Formation in UAE
                </h4>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Determine Your Business Activity</li>
                  <li>Choose a Legal Structure</li>
                  <li>Register a Trade Name</li>
                  <li>Secure Office Space</li>
                  <li>Get Initial Approval</li>
                  <li>Submit Documents and Pay Fees</li>
                  <li>Collect the License</li>
                  <li>Apply for Visas and Open a Bank Account</li>
                </ol>
              </div>

              <div>
                <h4 className="font-medium">
                  Documents Required for Mainland Company Formation in the UAE
                </h4>
                <p>
                  To register a mainland company in Dubai or anywhere in the
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
                    Additional approvals (e.g. from Dubai Municipality, DHA,
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
                  Ready to Launch Your UAE Mainland Business?
                </h4>
                <p>
                  Start your journey to business success in Dubai or anywhere in
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
