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
                        <AnimatedText text={"Abu Dhabi"} />
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
                      Launch your business in Abu Dhabi free zones—offering 100%
                      foreign ownership, diverse activities, global market
                      access, and a streamlined setup in a strategic UAE
                      location.
                    </h2>
                    <p className="mb-0">
                      At UBIXO, we specialise in company setup in Abu Dhabi free
                      zone locations, offering end-to-end support for
                      entrepreneurs, startups, and international investors.
                      Whether you’re launching a consultancy, a trading firm, or a
                      tech venture, our consultants simplify the process—from
                      license acquisition to visa processing and beyond.
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
                        We manage your entire Abu Dhabi free zone company
                        formation process—starting from business activity
                        selection to obtaining your trade license and company
                        registration. Our experts ensure every step is accurate
                        and compliant.
                      </p>
                    </div>
                    <div className="col-md-6 ">
                      <h2 className="h3 font-alt">Trade Name Registration</h2>
                      <p>
                        We assist in selecting and registering a compliant trade
                        name that aligns with Abu Dhabi free zone
                        regulations—ensuring approval without delays.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">
                        Corporate Administrative Support
                      </h2>
                      <p>
                        UBIXO handles all administrative responsibilities such as
                        license renewals, regulatory updates, and document
                        management—allowing you to focus on business growth while
                        we ensure compliance.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">
                        Abu Dhabi Free Zone Licensing
                      </h2>
                      <p>
                        Whether professional, commercial, or industrial, we help
                        you apply for the correct Abu Dhabi free zone
                        license—ensuring fast-track processing with minimal
                        errors.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">PRO & Visa Services</h2>
                      <p>
                        We manage all government interactions under Abu Dhabi free
                        zone visa protocols—covering investor visas, employee
                        visas, Emirates ID processing, and establishment cards
                        with full transparency and timely updates.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Bank Account Assistance</h2>
                      <p>
                        UBIXO connects you with reputable banks in the UAE and
                        assists in compiling and submitting all required
                        documents for seamless business account opening.
                      </p>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Office Space Solutions</h2>
                      <p>
                        Choose from flexi-desks, shared workspaces, or dedicated
                        offices in Abu Dhabi free zones. We guide you in
                        selecting the right space that meets both legal and
                        operational needs.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Ongoing Compliance</h2>
                      <p>
                        Our admin team ensures your business remains up to date
                        with the latest Abu Dhabi free zone regulations through
                        proactive compliance checks, reminders, and
                        documentation tracking.
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
              UBIXO stands for clarity, precision, and genuine client care. Every
              Abu Dhabi free zone business setup we handle is built on trust,
              efficiency, and your long-term success.
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
                FAQs – Abu Dhabi Free Zone Company Formation
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "What is an Abu Dhabi free zone?",
                    a: "Abu Dhabi free zones are designated economic areas offering 100% foreign ownership, tax benefits, and streamlined processes for international investors. These zones support a wide range of business activities and provide a business-friendly environment for company setup.",
                  },
                  {
                    q: "How do I start a company in an Abu Dhabi free zone?",
                    a: "Setting up a company in an Abu Dhabi free zone involves choosing a business activity, reserving a trade name, applying for an Abu Dhabi free zone license, leasing office space, and completing visa and compliance formalities. UBIXO can manage this entire process for you.",
                  },
                  {
                    q: "What are the benefits of Abu Dhabi free zone company formation?",
                    a: "Benefits include full foreign ownership, tax exemptions, simplified customs procedures, access to international markets, and eligibility for an Abu Dhabi free zone visa for investors and employees.",
                  },
                  {
                    q: "Which are the major Abu Dhabi free zones?",
                    a: `Some well-known names from the Abu Dhabi free zone list include:
                        Khalifa Industrial Zone (KIZAD)
                        Abu Dhabi Airport Free Zone (ADAFZ)
                        Twofour54 (media free zone)
                        Masdar City Free Zone
                        Each free zone caters to specific industries and business needs.`,
                  },
                  {
                    q: "What is the cost of an Abu Dhabi free zone license?",
                    a: "The Abu Dhabi free zone license cost depends on your business activity, office space type, and visa requirements. On average, the cost starts from AED 10,000 and can vary depending on the chosen free zone and business model.",
                  },
                  {
                    q: "What types of licenses are available in Abu Dhabi free zones?",
                    a: `You can obtain different types of Abu Dhabi free zone trade licenses, including:
                        Commercial license
                        Professional license
                        Industrial license
                        Each license type supports specific business activities.`,
                  },
                  {
                    q: "Can I get a visa through an Abu Dhabi free zone company?",
                    a: "Yes, business owners and employees are eligible for an Abu Dhabi free zone visa. The number of visas permitted often depends on the type of office or facility leased within the free zone.",
                  },
                  {
                    q: "How long does company setup in the Abu Dhabi free zone take?",
                    a: "With proper documentation, company setup in the Abu Dhabi free zone can take as little as 5–10 business days. Timelines may vary slightly depending on the free zone and nature of the business.",
                  },
                  {
                    q: "Do I need a physical office to set up in an Abu Dhabi free zone?",
                    a: "Most Abu Dhabi free zones offer flexible office solutions, including virtual offices, flexi-desks, and executive offices—making setting up a company in an Abu Dhabi free zone affordable and scalable.",
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
             Ready to Start Your Abu Dhabi Free Zone Company?
            </h2>
            <p className="text-center">
              UBIXO ensures a seamless, cost-effective, and fully compliant Abu
              Dhabi free zone company formation process—so you can focus on what
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
                About Abu Dhabi Free Zone Company Formation
                </h3>
                <p>
                  Setting up a company in an Abu Dhabi free zone is one of the
                  most strategic and investor-friendly ways to establish your
                  presence in the UAE. Abu Dhabi free zones offer 100% foreign
                  ownership, tax exemptions, fast-tracked company registration,
                  and access to global markets—all within a well-regulated and
                  business-friendly ecosystem. With competitive setup costs, a
                  broad Abu Dhabi free zone list, and flexible visa options, Abu
                  Dhabi free zone company formation is ideal for startups, SMEs,
                  and international businesses seeking long-term growth in the
                  UAE.
               </p>
              </div>

              <div>
                <h4 className="font-medium">
                Why Choose Abu Dhabi Free Zone Company Formation?
                </h4>
                <p>
                  Abu Dhabi free zones are known for their business flexibility,
                  government support, and strong legal framework. Here’s why
                  investors prefer company setup in Abu Dhabi free zone
                  locations:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>100% Foreign Ownership</strong>
                    <br />
                    No local sponsor or agent required—retain full control of
                    your business.
                  </li>
                  <li>
                    <strong>Competitive Abu Dhabi Free Zone License Cost</strong>
                    <br />
                    The Abu Dhabi free zone license cost starts from
                    approximately AED 9,000, depending on the activity and visa
                    package.
                  </li>
                  <li>
                    <strong>Access to a Wide Range of Business Activities</strong>
                    <br />
                    Choose from trading, consultancy, logistics,
                    manufacturing, and more.
                  </li>
                  <li>
                    <strong>Simplified Customs Procedures</strong>
                  </li>
                  <li>
                    <strong>Access to International Markets</strong>
                  </li>
                  <li>
                    <strong>Eligibility for Abu Dhabi Free Zone Visa</strong>
                    <br />
                    For investors and employees.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium">
                  Step-by-Step Process for Business Setup in Abu Dhabi Free Zone
                </h4>
                <p>
                  UBIXO streamlines your free zone setup with expert support at
                  each stage:
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    Select a Free Zone
                    <br />
                    Choose based on your business activity and specific
                    advantages offered (e.g., KIZAD for industrial, Twofour54
                    for media).
                  </li>
                  <li>
                    Determine Your Business Activity
                    <br />
                    Ensure your chosen activity is permitted within the selected
                    free zone.
                  </li>
                  <li>
                    Register Your Company Name
                    <br />
                    Submit your proposed company name for approval.
                  </li>
                  <li>
                    Apply for Your License
                    <br />
                    Select the appropriate license type (commercial, professional,
                    industrial).
                  </li>
                  <li>
                    Lease Office Space
                    <br />
                    Choose from various options like virtual offices, shared
                    desks, or dedicated offices.
                  </li>
                  <li>
                    Submit Required Documents
                    <br />
                    Provide necessary documents for registration and licensing.
                  </li>
                  <li>
                    Obtain Your Trade License
                    <br />
                    Receive your official Abu Dhabi free zone trade license.
                  </li>
                  <li>
                    Process Visas
                    <br />
                    Apply for investor and employee visas as needed.
                  </li>
                  <li>
                    Open a Corporate Bank Account
                    <br />
                    Set up your business bank account in the UAE.
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="font-medium">
                  Types of Free Zone Licenses in Abu Dhabi
                </h4>
                <p>
                  Abu Dhabi free zones offer various licenses to suit different
                  business needs:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Commercial License</strong>
                    <br />
                    For trading, import/export, and other commercial activities.
                  </li>
                  <li>
                    <strong>Professional License</strong>
                    <br />
                    For service-based businesses, consultancies, and individual
                    practitioners.
                  </li>
                  <li>
                    <strong>Industrial License</strong>
                    <br />
                    For manufacturing, processing, and related industrial
                    activities.
                  </li>
                </ul>
                <p>
                  UBIXO helps you identify the right license for your business
                  model.
                </p>
              </div>

              <div>
                <h4 className="font-medium">
                Legal Entity Options
                </h4>
                <p>
                You can register your business in Abu Dhabi free zones under the following structures:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Free Zone Company (FZC)</strong> — Single or multiple shareholders</li>
                  <li><strong>Free Zone Establishment (FZE)</strong> — Sole owner structure</li>
                  <li><strong>Branch Office</strong> — For expanding existing businesses</li>
                  <li><strong>Freelance Permit</strong> — For independent professionals</li>
                </ul>
                <p>
                  UBIXO ensures that your chosen legal structure complies with the respective free zone regulations.
                </p>
              </div>

              <div>
                <h4 className="font-medium">
                Required Documents for Abu Dhabi Free Zone Company Formation
                </h4>
                <p>
                    Prepare the following documents:
                </p>
                <ul className="list-disc list-inside space-y-1">
                <li>Passport copy of shareholders</li>
                <li>Passport-sized photo</li>
                <li>Entry stamp or residence visa copy</li>
                <li>Trade name reservation</li>
                <li>Application form</li>
                <li>Lease agreement (if office space is selected)</li>
                <li>Emirates ID and medical test (for visa holders)</li>
                </ul>
                <p>
                UBIXO takes care of documentation, attestation, and all government interactions.
                </p>
              </div>
              <div>
                  <h4 className="font-medium">
                  Abu Dhabi Free Zone License Cost
                </h4>
                <p>
                Starting from <strong>AED 9,000</strong>, the total Abu Dhabi free zone business setup cost depends on your chosen license type, visa requirements, and office space selection. UBIXO offers tailored packages with complete transparency and no hidden fees.
                </p>
                <ul className="list-disc list-inside space-y-1">
                <li>Business activity</li>
                <li>Type of license (commercial, service, industrial)</li>
                <li>Number of visas required</li>
                <li>Office or facility selection</li>
                </ul>
                <p>
                Abu Dhabi free zone visa costs typically range from AED 3,000 to AED 5,000 per visa. UBIXO provides a full-cost breakdown with no hidden fees.
                </p>
              </div>
              <div>
                <h4 className="font-medium">
                Common Business Activities in Abu Dhabi Free Zones
                </h4>
                <p>
                Popular sectors include:
                </p>
                <ul className="list-disc list-inside space-y-1">
                <li>Consultancy and Professional Services</li>
                <li>Trading and E-commerce</li>
                <li>Media and Digital Marketing</li>
                <li>Education and Training</li>
                <li>Logistics and Warehousing</li>
                <li>Healthcare and Wellness</li>
                <li>Information Technology</li>
                <li>Clean Energy and Sustainability</li>
                </ul>
                <p>
                UBIXO aligns your chosen activity with the appropriate license and legal entity.
                </p>
              </div>
              <div className="col-md-6">
              <h4 className="font-medium"> Key Requirements for Setting Up a Company in Abu Dhabi Free Zone</h4>
                <p>
                To start your business, you must:
                </p>
                <ul>
                <li>Define your business activity</li>
                <li>Choose a legal structure</li>
                <li>Select a trade name</li>
                <li>Submit the required documents</li>
                <li>Choose and secure office/facility space</li>
                <li>Apply for your free zone license</li>
                <li>Process visas and immigration documents</li>
                </ul>
                <p>
                UBIXO handles every step to ensure a fast, compliant, and stress-free setup experience.
                </p>
              </div>
              <div className="col-md-6">
              <h4 className="font-medium">Start Your Abu Dhabi Free Zone Company with UBIXO</h4>
                <p>
                With over 3,000+ clients, UBIXO is your trusted partner for company setup in Abu Dhabi free zone locations. We provide:
                </p>
                <ul>
                  <li>Quick and compliant company formation</li>
                  <li>Trade name registration and license issuance</li>
                  <li>PRO services and visa processing</li>
                  <li>Bank account setup with major UAE banks</li>
                  <li>Transparent pricing and end-to-end support</li>
                </ul>
                <p>
                Launch your business in Abu Dhabi free zones—efficiently and confidently with UBIXO.
                </p>
                <p className="mb-0">
                  Call us today or{" "}
                  <a href="#contact" className="underline text-blue-600">
                    Contact Us
                  </a>{" "}
                  to get your freezone license with confidence and clarity.
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