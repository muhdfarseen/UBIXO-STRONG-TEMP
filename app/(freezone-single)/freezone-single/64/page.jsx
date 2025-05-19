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
                        text={"Freezone with"}
                      /> 
                      <span className="font-alt">
                        <AnimatedText text={"IFZA"} />
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
                    Launch your business with IFZA—one of the UAE’s most cost-effective and flexible free zones offering 100% foreign ownership, wide-ranging activities, and simplified regulations.
                    </h2>
                    <p className="mb-0">
                    At UBIXO, we specialise in company formation within the International Free Zone Authority (IFZA), delivering end-to-end support tailored to entrepreneurs, SMEs, and global investors. Whether you're establishing a commercial consultancy, e-commerce platform, or technical services company, we simplify your journey with expert-led guidance and clear compliance paths—from license acquisition to visa processing and beyond.                    </p>
                  </div>
                </div>
              </section>

              <section className="page-section pt-20 pb-20">
                <div className="container relative">
                    
                    <div className="row">
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">Company Formation</h2>
                        <p>
                        Start your IFZA company with confidence. We assist with activity selection, license application, legal documentation, and trade name approval—ensuring an error-free setup.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">Trade Name Registration</h2>
                        <p>
                        We handle your trade name checks and ensure it meets IFZA’s regulations for acceptance and registration.
                        </p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">Corporate Administrative Support</h2>
                        <p>
                        From license renewals and document management to government liaison, we take care of the back end so your operations stay focused on growth.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">IFZA Licensing</h2>
                        <p>
                        Our team streamlines the licensing process for all activity types—professional, commercial, or industrial—ensuring fast approvals and accurate documentation.
                        </p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">PRO & Visa Services</h2>
                        <p>
                        We manage all government touchpoints, including investor visas, employee visas, Emirates ID, and establishment cards under IFZA jurisdiction—providing timely updates and full transparency.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">Bank Account Assistance</h2>
                        <p>
                        UBIXO coordinates with reputable UAE banks to open your business account, helping prepare and submit all required compliance documents.
                        </p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">Office Space Solutions</h2>
                        <p>
                        We help you choose from IFZA-approved Flexi-desks, smart offices, or physical office space that satisfies regulatory and business needs.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">Ongoing Compliance</h2>
                        <p>
                        Stay compliant with IFZA's evolving regulations through proactive reminders, document tracking, and regulatory updates—powered by our dedicated admin team.
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
            At UBIXO, we build every IFZA business setup on transparency, precision, and genuine client care—empowering your company with a strong foundation for long-term success.            </p>
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
              Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                    {
                        q: "What is the IFZA Free Zone?",
                        a: "IFZA (International Free Zone Authority) is a leading free zone in Dubai offering cost-effective business licenses, 100% foreign ownership, and a simplified setup process for entrepreneurs and global investors."
                    },
                    {
                        q: "How much does an IFZA license cost?",
                        a: "The IFZA license cost starts from approximately AED 11,900, depending on your chosen business activity, visa quota, and office space requirements. Customised IFZA free zone packages are also available."
                    },
                    {
                        q: "What is included in IFZA free zone packages?",
                        a: "IFZA free zone packages typically include company registration, business license, shared or private office space, establishment card, and visa allocations—ideal for startups and SMEs."
                    },
                    {
                        q: "How do I start a company setup in IFZA?",
                        a: "To register a company in the IFZA free zone, you need to choose your business activity, reserve a trade name, submit incorporation documents, obtain your IFZA license, and apply for visas. UBIXO handles the full process end-to-end."
                    },
                    {
                        q: "How much does an IFZA company setup cost?",
                        a: "The IFZA company setup cost depends on the number of visas, type of business activity, and office solution. Basic company formation in IFZA can start from AED 11,900, with add-ons for visas and office space."
                    },
                    {
                        q: "Is IFZA a designated zone in the UAE?",
                        a: "No, IFZA is not classified as a designated zone under UAE VAT laws. However, it is a reputable free zone with tax benefits and business-friendly policies for international investors."
                    },
                    {
                        q: "Can I get a visa with an IFZA license?",
                        a: "Yes, you can apply for investor and employee visas under your IFZA license. Visa packages vary and can be tailored to your specific staffing needs."
                    },
                    {
                        q: "What is the IFZA visa cost?",
                        a: "The visa cost in IFZA typically ranges between AED 3,500 and AED 5,000 per person, depending on medical tests, Emirates ID, and visa stamping services."
                    },
                    {
                        q: "What is the IFZA license renewal cost?",
                        a: "The IFZA license renewal cost generally starts from AED 11,900, similar to the initial license fee. UBIXO offers yearly renewal services with compliance support and documentation reminders."
                    },
                    {
                        q: "Can I upgrade or change my IFZA license later?",
                        a: "Yes, IFZA allows changes to business activities, license upgrades, and amendments. UBIXO provides administrative assistance for all IFZA company modifications."
                    },
                    {
                        q: "Why choose IFZA for company formation in Dubai?",
                        a: "IFZA offers one of the most affordable and flexible business environments in Dubai. With fast licensing, diverse activity options, and 100% foreign ownership, it's ideal for startups, consultants, and international investors."
                    },
                    {
                        q: "Can I open a bank account with an IFZA company?",
                        a: "Yes, once your IFZA company license and establishment card are issued, UBIXO can assist you in opening a corporate bank account with reputable UAE banks."
                    }
                    ]
                    .map((faq, index) => (
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
            Ready to Start Your IFZA Company?
            </h2>
            <p className="text-center">
            UBIXO ensures a smooth, affordable, and fully compliant IFZA business setup experience—so you can begin operations swiftly and confidently.
            <br /> <br />
              <Link
                href={`/contact`}
                className=" btn btn-mod btn-white btn-large btn-round btn-hover-anim"
              >
                <span>Contact us</span>
              </Link>
            </p>
          </div>

          <div style={{paddingTop:"30px"}} className="bg-dark-1 light-content">
            <div className="max-w-6xl mx-auto px-4 space-y-6">
                <div>
                <h3 className="font-semibold text-base">About IFZA Business Setup</h3>
                <p>
                    Establishing your business in the IFZA free zone is one of the most cost-effective and straightforward ways to launch a company in Dubai. The International Free Zone Authority (IFZA) offers 100% foreign ownership, competitive license fees, flexible visa options, and fast-track registration—making it ideal for startups, consultants, SMEs, and global investors.
                </p>
                <p>
                    With minimal paperwork, low-cost packages, and access to the UAE’s vibrant economy, IFZA company formation is a top choice for international entrepreneurs.
                </p>
                </div>

                <div>
                <h4 className="font-medium">Why Choose IFZA Free Zone Company Formation?</h4>
                <p>IFZA stands out among UAE free zones for its simplicity, scalability, and value-driven setup options:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>100% Foreign Ownership</strong><br />Enjoy full business ownership without a local sponsor or service agent.</li>
                    <li><strong>Affordable IFZA License Cost</strong><br />Starting from AED 11,900—one of Dubai’s most affordable options.</li>
                    <li><strong>Wide Range of Business Activities</strong><br />Choose from over 1,000 approved activities including consultancy, IT, e-commerce, and more.</li>
                    <li><strong>Fast Registration</strong><br />Register a company in just 2–3 working days.</li>
                    <li><strong>No Office Requirement (for some activities)</strong><br />Start with a virtual license and upgrade when needed.</li>
                    <li><strong>Tax-Friendly Environment</strong><br />Zero personal and corporate tax with full profit repatriation.</li>
                </ul>
                </div>

                <div>
                <h4 className="font-medium">Step-by-Step Process for IFZA Company Setup</h4>
                <p>UBIXO simplifies your IFZA company formation in Dubai with expert assistance at every stage:</p>
                <ol className="list-decimal list-inside space-y-1">
                    <li>Choose Business Activity – Based on approved IFZA categories.</li>
                    <li>Reserve a Trade Name – UBIXO helps with availability checks and registration.</li>
                    <li>Select License Package – Tailored to your visa needs and business goals.</li>
                    <li>Submit Documentation – Passport copies, application forms, and photos.</li>
                    <li>Receive Your License – Official license issued within a few days.</li>
                    <li>Apply for Visas & Establishment Card – Visa quotas and immigration handled by UBIXO.</li>
                    <li>Open Bank Account – Assistance with UAE banks for corporate account setup.</li>
                </ol>
                </div>

                <div>
                <h4 className="font-medium">Types of IFZA Licenses</h4>
                <p>IFZA offers flexible licenses tailored to various business needs:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Commercial License</strong> – For trading, e-commerce, import/export.</li>
                    <li><strong>Service License</strong> – For consultancy, IT, marketing, and professional services.</li>
                    <li><strong>Industrial License</strong> – For light manufacturing, packaging, and production.</li>
                    <li><strong>Holding License</strong> – For asset and share management.</li>
                </ul>
                </div>

                <div>
                <h4 className="font-medium">Legal Entity Options in IFZA</h4>
                <p>Set up your company under one of the following structures:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Free Zone LLC (FZ-LLC)</strong> – Single or multiple shareholders.</li>
                    <li><strong>Branch of Foreign Company</strong> – For expanding existing businesses.</li>
                    <li><strong>Holding Company</strong> – To manage and consolidate assets.</li>
                </ul>
                </div>

                <div>
                <h4 className="font-medium">Required Documents for IFZA Company Formation</h4>
                <p>Documents required for IFZA setup include:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Passport copy of shareholders</li>
                    <li>Passport-size photograph</li>
                    <li>Entry stamp or valid UAE visa copy</li>
                    <li>Trade name reservation</li>
                    <li>Signed application form</li>
                    <li>Shareholder resolution (for multiple shareholders)</li>
                    <li>Lease agreement (if office space is selected)</li>
                </ul>
                <p>UBIXO handles all translations, attestations, and government submissions.</p>
                </div>

                <div>
                <h4 className="font-medium">IFZA Business Setup Cost</h4>
                <p>One of IFZA’s biggest advantages is cost-effectiveness:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>License cost starts from <strong>AED 11,900</strong></li>
                    <li>Visa cost ranges from AED 3,500 to AED 5,000</li>
                    <li>Setup cost depends on license type, visa quota, and office space</li>
                    <li>Extras: Emirates ID, medical test, PRO services, bank account support</li>
                    <li>Annual renewal costs typically match initial license fee</li>
                </ul>
                <p>UBIXO provides transparent, upfront pricing with no hidden charges.</p>
                </div>

                <div>
                <h4 className="font-medium">Common Business Activities in IFZA Free Zone</h4>
                <p>Popular IFZA license activities include:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Consultancy and Professional Services</li>
                    <li>IT and Software Development</li>
                    <li>Digital Marketing and Advertising</li>
                    <li>General Trading and E-commerce</li>
                    <li>Education and Training</li>
                    <li>Logistics and Supply Chain</li>
                    <li>Health and Wellness</li>
                    <li>Media and Creative Services</li>
                </ul>
                </div>

                <div className="col-md-6">
                <h4 className="font-medium">Key Requirements for IFZA Company Setup</h4>
                <p>To legally establish your IFZA company, you must:</p>
                <ul>
                    <li>Choose an activity and legal structure</li>
                    <li>Reserve a trade name</li>
                    <li>Submit personal and business documents</li>
                    <li>Pay license and visa fees</li>
                    <li>Secure office space (if required)</li>
                    <li>Complete immigration formalities</li>
                </ul>
                <p>UBIXO ensures all steps are managed seamlessly and compliantly.</p>
                </div>

                <div className="col-md-6">
                <h4 className="font-medium">Start Your IFZA Company with UBIXO</h4>
                <p>With over 3,000+ active clients, UBIXO is your trusted partner for IFZA company formation. We offer:</p>
                <ul>
                    <li>Complete IFZA license registration</li>
                    <li>Trade name approval and documentation</li>
                    <li>Investor and employee visa processing</li>
                    <li>Corporate bank account setup</li>
                    <li>Transparent pricing and custom packages</li>
                    <li>Full compliance and renewals support</li>
                    </ul>
                <p className="mb-0">
                    Launch your future with IFZA—efficiently, affordably, and fully guided by UBIXO. Call us today or{" "}
                    <a href="#contact" className="underline text-blue-600">Contact Us</a> to get started.
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