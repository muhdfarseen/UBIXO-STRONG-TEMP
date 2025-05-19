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
                        text={"Freezone"}
                      /> 
                      <span className="font-alt">
                        <AnimatedText text={"Sharjah"} />
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
                      
                    </h2>
                    <p className="mb-0">
                    Establish your business in Sharjah Free Zones with full foreign ownership, flexible licensing solutions, and access to cost-effective infrastructure—ideal for SMEs and international firms expanding into the UAE.
                    </p>
                  </div>
                </div>
              </section>

              <section className="page-section pt-20 pb-20">
                <div className="container relative">
                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Company Formation</h2>
                      <p>
                        We manage your business setup in Sharjah Free Zones—from planning to licensing. Our team ensures you choose the right business activity, prepares your documents, and submits applications on your behalf for smooth approvals.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Trade Name Registration</h2>
                      <p>
                        UBIXO assists in selecting and registering a trade name that meets the Sharjah Free Zone Authority's guidelines—ensuring it matches your brand while complying with all regulatory standards.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Corporate Administrative Support</h2>
                      <p>
                        Our corporate administrative services remove the burden of routine government follow-ups, document renewals, and updates. With UBIXO, your business remains compliant while you focus on operations.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Licensing in Sharjah Free Zones</h2>
                      <p>
                        Whether you need a commercial, service, or industrial license, UBIXO helps identify the correct license type, handles the application, and follows up until issuance—accelerating your business entry into the UAE market.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">PRO & Visa Services</h2>
                      <p>
                        From medicals and Emirates IDs to establishment cards and renewals, we manage all visa and PRO formalities for investors, partners, and staff—efficiently and transparently.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Bank Account Assistance</h2>
                      <p>
                        UBIXO supports you in opening a business bank account in the UAE by liaising with banking partners, ensuring accurate documentation, and ensuring smooth compliance.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Office Space Solutions</h2>
                      <p>
                        Choose from shared desks, dedicated offices, or warehouses based on your operational scale. UBIXO helps match you with cost-effective options in line with Sharjah Free Zone rules.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Ongoing Compliance</h2>
                      <p>
                        Our support includes regular audits, renewals, and notifications to keep your business running without disruption—ensuring complete regulatory compliance year-round.
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
            At UBIXO, we stand for precision, transparency, and partnership. Your success in Sharjah Free Zones is our priority, and every setup reflects our dedication to client growth
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
                FAQs – Sharjah Free Zone Company Formation
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "What is the Sharjah Free Zone, and why should I consider it for business setup?",
                    a: "Sharjah Free Zones are special economic areas offering 100% foreign ownership, tax exemptions, and simplified setup procedures. They’re ideal for startups, SMEs, and international firms seeking affordable entry into the UAE market.",
                  },
                  {
                    q: "How much does it cost to set up a business in the Sharjah Free Zone?",
                    a: "Sharjah Free Zone license costs typically start from AED 5,750 and vary based on your chosen business activity, office space, and visa requirements. UBIXO provides transparent packages tailored to your business needs.",
                  },
                  {
                    q: "How do I start a business in Sharjah Free Zone?",
                    a: "Setting up a business in a Sharjah Free Zone (like SAIF Zone, SHAMS, or SPC) involves choosing a suitable zone, deciding the company's legal structure, securing a license, and getting necessary approvals. These zones offer benefits like 100% foreign ownership and tax exemptions.",
                  },
                  {
                    q: "How much is the Free Zone license in Sharjah?",
                    a: "The cost of a Sharjah Free Zone license starts from AED 5,750. For a visa-eligible package, prices start from AED 8,500. Costs depend on license type, visa quota, and office facility. UBIXO offers custom packages with transparent pricing.",
                  },
                  {
                    q: "Can I own 100% of my Sharjah Free Zone company as a foreigner?",
                    a: "Yes, foreign investors can own 100% of their company in Sharjah Free Zones without needing a local sponsor or partner.",
                  },
                  {
                    q: "What types of licenses are available in Sharjah Free Zones?",
                    a: "Sharjah Free Zones offer commercial, service, industrial, e-commerce, and freelancer licenses. UBIXO helps you choose the right one for your business model.",
                  },
                  {
                    q: "How long does the business setup process take in the Sharjah Free Zone?",
                    a: "Business setup in Sharjah Free Zones usually takes 3 to 5 working days if all documents are in order. UBIXO ensures a smooth and fast process by handling all documentation and approvals.",
                  },
                  {
                    q: "Do I need a physical office to register a company in the Sharjah Free Zone?",
                    a: "Not necessarily. Many Sharjah Free Zones offer flexi-desk or shared office options, which fulfill the legal requirement. UBIXO can help you choose the most cost-effective and compliant office setup.",
                  },
                  {
                    q: "What documents are required to start a Sharjah Free Zone company?",
                    a: "Typically, you’ll need a passport copy, visa or entry stamp, passport-sized photo, and a business plan (if applicable). UBIXO provides a full checklist and handles the document preparation for you.",
                  },
                  {
                    q: "Can I open a UAE bank account with a Sharjah Free Zone company?",
                    a: "Yes, companies registered in Sharjah Free Zones can open UAE corporate bank accounts. UBIXO assists with bank coordination to streamline the account opening process.",
                  },
                  {
                    q: "Are visas included in the Sharjah Free Zone business setup package?",
                    a: "Visa services are optional and depend on the license type and office setup. UBIXO offers visa processing for investors, partners, and employees, including medicals, Emirates ID, and stamping.",
                  },
                  {
                    q: "Is Sharjah Free Zone suitable for e-commerce or online businesses?",
                    a: "Yes, Sharjah Free Zones offer e-commerce licenses suitable for online stores, dropshipping, and digital services. UBIXO helps ensure your business is licensed and compliant for UAE online operations.",
                  }
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
             Ready to Start Your Sharjah Free Zone Company?
            </h2>
            <p className="text-center">
              UBIXO ensures a seamless, cost-effective, and fully compliant Sharjah free zone company formation process—so you can focus on what
              matters: growing your business.<br /> <br />
              <Link
                href={`/contact`}
                className=" btn btn-mod btn-white btn-large btn-round btn-hover-anim"
              >
                <span>Contact us</span>
              </Link>
            </p>
          </div>

          

          <div style={{paddingTop:"30px"}} className=" bg-dark-1 light-content"> 
            <div className="max-w-6xl mx-auto px-4 space-y-6">
              <div>
                <h3 className="font-semibold text-base">
                About Sharjah Free Zone Business Setup
                </h3>
                <p>
                Setting up a company in the Sharjah Free Zone is one of the most strategic and cost-effective ways to launch your business in the UAE. With 100% foreign ownership, zero corporate taxes, and access to the UAE’s booming trade and logistics networks, Sharjah offers a favourable environment for entrepreneurs, startups, and global investors.
               </p>
               <p>
               The process of business setup in Sharjah Free Zone is streamlined, affordable, and ideal for commercial, professional, industrial, and e-commerce activities. With flexible visa packages and low operating costs, Sharjah Free Zone company setup supports long-term business growth in a compliant and scalable manner.
               </p>
              </div>

              <div>
                <h4 className="font-medium">
                Why Choose Sharjah Free Zone Company Formation?
                </h4>
                <p>
                Company formation in the Sharjah Free Zone offers a wide range of benefits for investors and business owners:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>100% Foreign Ownership</strong>
                    <br />
                    No local sponsor or agent required—retain full control of
                    your business.
                  </li>
                  <li>
                    <strong>Affordable Sharjah Free Zone License Cost</strong>
                    <br />
                    Sharjah Free Zone license packages start as low as AED 5,750, depending on the number of activities and visa allocation.
                  </li>
                  <li>
                    <strong>Multiple Business Activities</strong>
                    <br />
                    From trading and consultancy to logistics and media, the Sharjah Free Zone license allow you to choose from a wide range of permitted activities.
                  </li>
                  <li>
                    <strong>Fast Sharjah Free Zone Company Registration</strong>
                    <br />
                    Get your license in as little as 2–4 working days with minimal paperwork.
                  </li>
                  <li>
                    <strong>Low Visa and Setup Cost</strong>
                    <br />
                    <p>Sharjah free zone visa packages start around AED 3,500, making it ideal for solo entrepreneurs and SMEs.</p>
                  </li>
                  <li>
                    <strong>Tax-Free Environment</strong>
                    <br />
                    Benefit from 0% corporate and personal income tax, with full repatriation of profits.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium">
                  Step-by-Step Process for Company Setup in Sharjah Free Zone
                </h4>
                <p>
                  UBIXO makes your company setup in the Sharjah Free Zone easy, legal, and fully compliant:
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    Choose Your Business Activity
                    <br />
                    We help you select from the list of permitted Sharjah Free Zone license activities based on your business plan.
                  </li>
                  <li>
                    Reserve Your Trade Name
                    <br />
                    Our team ensures your trade name aligns with UAE naming regulations and registers it with the relevant authorities.
                  </li>
                  <li>
                    Select License Type
                    <br />
                    Pick from commercial, service, industrial, or e-commerce license categories that best suit your business.
                  </li>
                  <li>
                    Submit Documents
                    <br />
                    Provide passport copies, a visa (if available), and personal details. UBIXO handles form filling and government coordination.
                  </li>
                  <li>
                    Get Trade License Issued
                    <br />
                    Once approved, your Sharjah Free Zone trade license is issued, and your business is officially established.
                  </li>
                  <li>
                    Apply for Visas and Establishment Card
                    <br />
                    We manage your visa application, medical test, Emirates ID, and immigration process under the free zone authority.
                  </li>
                  <li>
                    Open Your UAE Bank Account
                    <br />
                    UBIXO prepares compliant documentation and helps coordinate with reliable UAE banks to open your corporate account.
                  </li>
                </ol>
              </div>


              <div>
                <h4 className="font-medium">
                  Types of Sharjah Free Zone Licenses
                </h4>
                <p>Choose the right Sharjah Free Zone license for your business activity:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Commercial License</strong><br />For import/export, general trading, and retail.</li>
                  <li><strong>Professional License</strong><br />For consultancy, legal, IT, education, and personal services.</li>
                  <li><strong>Industrial License</strong><br />For light manufacturing, assembling, and packaging.</li>
                  <li><strong>Freelancer Permit</strong><br />For individuals working independently across digital or service-based industries.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium">
                  Legal Entity Options in Sharjah Free Zone
                </h4>
                <p>You can register your business under one of the following legal structures:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Free Zone Establishment (FZE)</strong> – One shareholder</li>
                  <li><strong>Free Zone Company (FZC)</strong> – Multiple shareholders</li>
                  <li><strong>Branch Office</strong> — Of an existing local or international company</li>
                  <li><strong>Freelance Permit</strong> — For solo professionals</li>
                </ul>
                <p>UBIXO will guide you in selecting the right legal structure for your business model.</p>
              </div>


              <div>
                <h4 className="font-medium">
                  Required Documents for Sharjah Free Zone Company Setup
                </h4>
                <p>To complete your Sharjah Free Zone company registration, the following documents are usually needed:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Passport copy of shareholder(s)</li>
                  <li>Visa or UAE entry stamp (if applicable)</li>
                  <li>Passport-size photo</li>
                  <li>Application form</li>
                  <li>Trade name reservation proof</li>
                  <li>Emirates ID and medical results (for visa applicants)</li>
                  <li>Lease agreement (if choosing office space)</li>
                </ul>
                <p>UBIXO ensures smooth documentation, submission, and follow-up with Sharjah Free Zone authorities.</p>
              </div>
              <div>
                <h4 className="font-medium">
                  Sharjah Free Zone License Cost
                </h4>
                <p>The Sharjah Free Zone company setup cost typically starts at <strong>AED 5,750</strong> and depends on:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Business activity</li>
                  <li>License type</li>
                  <li>Number of visa allocations</li>
                  <li>Office space (e.g. flexi-desk, shared office, warehouse)</li>
                </ul>
                <p>Visa costs generally start from AED 3,500. UBIXO provides clear, upfront pricing with no hidden fees.</p>
              </div>
              <div>
                <h4 className="font-medium">
                  Common Business Activities in Sharjah Free Zones
                </h4>
                <p>The most popular Sharjah Free Zone license activities include:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Management consultancy</li>
                  <li>E-commerce and dropshipping</li>
                  <li>Digital marketing and advertising</li>
                  <li>Education and training services</li>
                  <li>General trading and logistics</li>
                  <li>Health and wellness businesses</li>
                </ul>
                <p>UBIXO ensures the correct license is matched to your chosen activity and operational needs.</p>
              </div>

              <div className="col-md-6">
                <h4 className="font-medium">Key Requirements for Setting Up a Company in Sharjah Free Zone</h4>
                <p>To legally set up your company, you must:</p>
                <ul>
                  <li>Finalise your business activity</li>
                  <li>Choose a legal structure</li>
                  <li>Reserve a trade name</li>
                  <li>Submit the required documents</li>
                  <li>Pay license and visa fees</li>
                  <li>Apply for office space (if applicable)</li>
                </ul>
                <p>UBIXO simplifies every step to ensure a quick and smooth Sharjah Free Zone company setup.</p>
              </div>
              <div className="col-md-6">
                <h4 className="font-medium">Start Your Sharjah Free Zone Company with UBIXO</h4>
                <p>With over 3,000+ satisfied clients, UBIXO is your trusted partner for Sharjah Free Zone company formation. We offer:</p>
                <ul>
                  <li>✔ License registration & trade name approval</li>
                  <li>✔ Full visa processing & PRO services</li>
                  <li>✔ UAE bank account assistance</li>
                  <li>✔ Compliance management & renewals</li>
                  <li>✔ Transparent pricing with no surprise charges</li>
                </ul>
                <p>Launch your business in the Sharjah Free Zone with UBIXO—efficiently, affordably, and with expert support.</p>
                <p className="mb-0">
                  Call us today or{" "}
                  <a href="#contact" className="underline text-blue-600">
                    Contact Us
                  </a>{" "}
                  to get your free zone license with confidence and clarity.
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