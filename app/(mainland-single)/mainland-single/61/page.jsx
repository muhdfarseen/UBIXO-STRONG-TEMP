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
                        <AnimatedText text={"Business Setup in Ajman"} />
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
                      TThe Ajman Advantage: Launch your business in Ajman Mainland with expert support for fast, cost-efficient, and compliant company formation.
                    </h2>
                    <p className="mb-0">
                    At UBIXO, our Ajman mainland business setup team brings together deep regulatory insight and practical execution strategies. We understand the procedures set by the Ajman Department of Economic Development (Ajman DED), and we guide you through each step—from choosing the legal structure to securing your business license and visas. With tailored solutions, we ensure a smooth setup process in one of the UAE’s most cost-effective jurisdictions.
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
                      Start your Ajman mainland company with full support—from legal entity selection to Ajman DED registration—ensuring speed, compliance, and clarity.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h2 className="h3 font-alt">Trade Name Registration</h2>
                    <p>
                      We handle trade name availability checks, approvals, and ensure your brand name aligns with Ajman DED’s regulations.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <h2 className="h3 font-alt">Corporate Administrative Support</h2>
                    <p>
                      From license renewals to document processing and Ajman Government coordination, we take care of the admin so you can focus on growth.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h2 className="h3 font-alt">Mainland Licensing</h2>
                    <p>
                      We manage everything—from activity selection to application filing—to secure your Ajman DED trade license swiftly and legally.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <h2 className="h3 font-alt">PRO & Visa Services</h2>
                    <p>
                      We handle investor and employee visa applications, labour cards, Emirates IDs, and more—with complete transparency and tracking.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h2 className="h3 font-alt">Bank Account Assistance</h2>
                    <p>
                      We liaise with leading UAE banks to help you open a business account, offering document prep and introductions.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <h2 className="h3 font-alt">Office Setup Support</h2>
                    <p>
                      Whether it's a Flexi-desk or full office space, we help secure Ajman DED-approved premises to fulfil licensing requirements.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h2 className="h3 font-alt">Ongoing Compliance</h2>
                    <p>
                      Stay updated with renewal reminders, document tracking, and full support for changing Ajman regulations.
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
            We prioritise clarity, compliance, and collaborative growth. At UBIXO, your business success is our commitment.
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
                FAQs – Mainland Company Formation in Ajman
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "How do I start a business in Ajman mainland?",
                    a: "To start a business in Ajman mainland, you must choose a legal structure, register a trade name, get initial approval from Ajman DED, secure office space, and obtain your business license. UBIXO guides you through each step for a fast, compliant setup.",
                  },
                  {
                    q: "What are the benefits of setting up a company in Ajman mainland?",
                    a: "Ajman mainland offers low setup costs, access to the UAE market, 100% foreign ownership (for most activities), and simplified government processes through Ajman DED.",
                  },
                  {
                    q: "How much does it cost to start a business in Ajman mainland?",
                    a: "The cost to start a business in Ajman mainland typically starts from AED 8,000 to AED 15,000, depending on your business activity, office space, and visa requirements.",
                  },
                  {
                    q: "Which license is required for business setup in Ajman mainland?",
                    a: "You will need a trade license issued by the Ajman Department of Economic Development (DED). The type of license depends on your chosen business activity—commercial, professional, or industrial.",
                  },
                  {
                    q: "Can foreigners own 100% of a business in Ajman mainland?",
                    a: "Yes, most activities in Ajman mainland now allow 100% foreign ownership without the need for a UAE national sponsor, as per updated UAE business laws.",
                  },
                  {
                    q: "What documents are required to register a business in Ajman mainland?",
                    a: "You typically need a passport copy, visa or entry stamp, trade name options, business activity details, and tenancy contract. UBIXO will help prepare and submit all documents.",
                  },
                  {
                    q: "How long does it take to register a company in Ajman mainland?",
                    a: "With all documents in place, company registration in Ajman mainland can take as little as 3 to 5 working days.",
                  },
                  {
                    q: "Do I need office space for an Ajman mainland license?",
                    a: "Yes, Ajman DED requires a valid office address (Ejari) for mainland licensing. UBIXO can help you find flexi-desk or full office options that meet compliance.",
                  },
                  {
                    q: "Is Ajman a good place for a startup or SME?",
                    a: "Absolutely. Ajman mainland is ideal for startups and SMEs due to its affordable setup costs, easy access to the UAE market, and business-friendly environment.",
                  },
                  {
                    q: "Who can help me set up my business in Ajman mainland?",
                    a: "UBIXO provides end-to-end support for Ajman mainland business setup, including licensing, PRO services, visa processing, and office space assistance.",
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
            Ready to Set Up in Ajman Mainland?
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
                  Mainland Company Formation in Ajman
                </h3>
                <p>
                Ajman mainland company formation is governed by the Ajman Department of Economic Development (Ajman DED). It allows businesses to operate across the UAE and internationally without restrictions. Compared to other emirates, Ajman offers affordable licensing, strategic proximity to Dubai and Sharjah, and simplified procedures, making it an ideal location for startups, SMEs, and expanding enterprises.                </p>
                <p>
                Businesses in Ajman mainland enjoy full flexibility in choosing activities, hiring staff, and accessing the UAE’s growing economy. With recent updates to UAE laws, many activities also allow 100% foreign ownership.
                </p>
              </div>
              <div>
                <h4 className="font-medium">
                  Benefits of Ajman Mainland Business Setup
                </h4>
                <p>Ajman mainland is one of the most attractive destinations for investors due to its business-friendly policies and lower setup costs.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Strategic Location:</strong> Close to Dubai, Sharjah, and major highways, making logistics and connectivity easier.
                  </li>
                  <li>
                    <strong>Cost-Effective:</strong> Licensing and setup fees in Ajman are more affordable than in other emirates.
                  </li>
                  <li>
                    <strong>No Limitations on Activities:</strong> Operate across the UAE and choose from hundreds of business activities.
                  </li>
                  <li>
                    <strong>100% Foreign Ownership:</strong> Many commercial and professional activities no longer require a local Emirati partner.
                  </li>
                  <li>
                    <strong>Access to Local Market:</strong> Set up a business that can serve both UAE residents and international clients.
                  </li>
                  <li>
                    <strong>Quick Setup Process:</strong> Company formation and licensing can be completed in just a few working days.
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
                  Step-by-Step Process for Mainland Company Formation in Ajman
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
                  Types of Mainland Licenses in Ajman 
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
                  Business Entities Permitted in Ajman Mainland
                </h4>
                <p>
                  Ajman mainland allows the formation of various legal business entities:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Limited Liability Company (LLC):</strong> The most common structure, allowing multiple shareholders and offering liability protection.
                  </li>
                  <li>
                    <strong>Sole Proprietorship:</strong> Owned and managed by one individual; suitable for professionals and service providers.
                  </li>
                  <li>
                    <strong>Civil Company:</strong> For two or more professionals with shared liability in specific fields like consultancy.
                  </li>
                  <li>
                    <strong>Branch of a Foreign Company:</strong> Ideal for existing international businesses expanding into the UAE market.
                  </li>
                </ul>
                <p>
                  Each structure has unique requirements for ownership, management, and liability.
                </p>
              </div>
              <div>
                <h4 className="font-medium">
                  Documents Required for Company Formation in Ajman Mainland
                </h4>
                <p>
                  To register your company in Ajman mainland, the following documents are typically required:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Passport copies of all shareholders and partners</li>
                  <li>UAE visa or entry stamp</li>
                  <li>Trade name reservation certificate</li>
                  <li>Initial approval from Ajman DED</li>
                  <li>Office lease agreement (Ejari)</li>
                  <li>Emirates ID and passport-sized photographs</li>
                  <li>MOA (Memorandum of Association) if forming an LLC</li>
                </ul>
                <p>
                 UBIXO ensures all documents are prepared, translated, and submitted correctly to avoid delays.
                </p>
              </div>
              <div>
                <h4 className="font-medium">
                  Ajman Mainland License Cost and Business Setup Expenses
                </h4>
                <p>
                  Setting up a company in Ajman mainland is highly affordable.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Basic setup packages start from AED 8,000 to AED 15,000</li>
                  <li>Costs vary based on business activity, office space, number of visas, and additional services</li>
                  <li>PRO services, document attestation, and bank account setup may add to the final cost</li>
                </ul>
                <p>
                  UBIXO provides transparent pricing packages with no hidden charges to help you plan your investment confidently.
                </p>
              </div>
              <div>
                <h4 className="font-medium">
                  Types of Business Activities Allowed in Ajman Mainland
                </h4>
                <p>Ajman DED permits a wide range of licensed business activities, including:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>General Trading</li>
                  <li>IT & Consultancy Services</li>
                  <li>Manufacturing and Industrial Operations</li>
                  <li>Logistics and Transport</li>
                  <li>E-Commerce and Online Businesses</li>
                  <li>Construction and Real Estate</li>
                  <li>Healthcare and Education Services</li>
                </ul>
                <p>
                  UBIXO will assist you in selecting the most suitable activity that aligns with your business goals and regulatory permissions.
                </p>
              </div>
            <div>
              <h4 className="font-medium">
                Business Setup in Ajman Mainland 
              </h4>
              <p>To successfully start a business in Ajman mainland, you must meet the following requirements:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Select a registered office or business address</li>
                <li>Comply with Ajman DED licensing and zoning laws</li>
                <li>Ensure valid documents and signatures from all shareholders</li>
                <li>Complete visa and labour card processing for employees</li>
                <li>Maintain renewal schedules for trade licences and visas</li>
              </ul>
              <p>
                UBIXO provides complete setup and ongoing compliance support to keep your business running smoothly.
              </p>
            </div>
            <div>
              <h4 className="font-medium">
                Start Your Ajman Mainland Business with UBIXO
              </h4>
              <p>
                With over 3,000 entrepreneurs served and unmatched knowledge of UAE regulations, UBIXO is your trusted partner for Ajman mainland company formation. We provide:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>End-to-end setup assistance</li>
                <li>Fast trade name and licence approvals</li>
                <li>PRO services and visa applications</li>
                <li>Bank account opening support</li>
                <li>Dedicated advisors and transparent pricing</li>
              </ul>
              <div>
                <h4 className="font-medium">
                  Ready to Launch Your Ajman Mainland Business?
                </h4>
                <p>
                  Start your journey to business success in Ajman or anywhere in
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
          </div>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer9 />
          </footer>
        </div>
      </div>{" "}
    </>
  );
}

