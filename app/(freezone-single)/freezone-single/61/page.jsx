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
                        <AnimatedText text={"Ajman"} />
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
                    Unlock seamless business growth in one of the UAE’s most dynamic free zones. At UBIXO, our unparalleled expertise empowers you to confidently navigate complex regulations in Ajman Free Zone.
                    </h2>
                    <p className="mb-0">
                    At UBIXO, we specialize in Ajman Free Zone company formation—delivering end-to-end solutions designed for your business success. Whether you’re establishing a trading firm, consultancy, or industrial enterprise, we simplify the process from licensing to visa processing, ensuring a swift and hassle-free setup.
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
                      We handle your entire business setup in Ajman Free Zone, from initial structuring to final approvals. Our experts guide you in selecting the right business activity, preparing documentation, and submitting applications for seamless registration.
                      </p>
                    </div>
                    <div className="col-md-6 ">
                      <h2 className="h3 font-alt">Trade Name Registration</h2>
                      <p>
                      UBIXO helps you choose and secure a trade name that aligns with your brand while complying with Ajman Free Zone Authority regulations, ensuring a smooth approval process.

                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">
                        Corporate Administrative Support
                      </h2>
                      <p>
                      Our team manages all administrative tasks, including document renewals, government correspondence, and compliance updates, so you can focus on growing your business without bureaucratic delays.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">
                      Licensing in Ajman Free Zone
                      </h2>
                      <p>
                      WWhether you need a commercial, industrial, or professional license, UBIXO identifies the optimal license type, processes your application, and coordinates with authorities for timely issuance.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">PRO & Visa Services</h2>
                      <p>
                      From residency visas and Emirates IDs to medical tests and labor cards, we handle all immigration and PRO formalities for investors, employees, and dependents—ensuring a smooth and efficient process.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Bank Account Assistance</h2>
                      <p>
                      UBIXO facilitates your business bank account opening in the UAE by connecting you with leading banks, preparing required documents, and ensuring compliance with financial regulations.
                      </p>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Office Space Solutions</h2>
                      <p>
                      We offer flexible workspace options in Ajman Free Zone, including flexi-desks, private offices, and warehouses—tailored to your business needs and budget.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Ongoing Compliance</h2>
                      <p>
                      Our team provides continuous support with license renewals, audits, and regulatory updates to keep your business fully compliant and operational without interruptions.
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
            At UBIXO, integrity, efficiency, and partnership are at the heart of everything we do. Your business success is our priority, and we are committed to delivering a truly hassle-free setup experience."
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
                FAQs – Ajman Free Zone Company Formation
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "What are the benefits of setting up a business in Ajman Free Zone?",
                    a: "Ajman Free Zone offers 100% foreign ownership, tax exemptions, full repatriation of profits, modern infrastructure, and strategic location near Dubai. Businesses enjoy fast license processing (often within 24 hours) and cost-effective setup compared to other UAE free zones.",
                  },
                  {
                    q: "How much does it cost to start a company in Ajman Free Zone?",
                    a: "Costs vary from AED 15,000 to AED 50,000 depending on license type (commercial/industrial/service), office space requirements, and number of visas. This includes license fees, registration, and basic government charges.",
                  },
                  {
                    q: "What types of business licenses are available in Ajman Free Zone?",
                    a: "Ajman Free Zone offers:\n- Commercial License (for trading)\n- Industrial License (for manufacturing)\n- Service License (for consultancy/professional services)\n- E-Commerce License (for online businesses)",
                  },
                  {
                    q: "Can I get a UAE residency visa through Ajman Free Zone company?",
                    a: "Yes, each Ajman Free Zone company can sponsor visas for investors, employees and dependents. The number depends on your office space size (1 visa per 80 sq ft in flexi-desk packages).",
                  },
                  {
                    q: "What documents are required for Ajman Free Zone company registration?",
                    a: "You'll need:\n- Passport copies of shareholders\n- Proof of address\n- Business plan/activity description\n- NOC from current sponsor (if residing in UAE)\n- Bank reference letter (for some activities)",
                  },
                  {
                    q: "How long does it take to set up a company in Ajman Free Zone?",
                    a: "Most businesses can be operational within 3–5 working days for standard setups, including:\n- Trade name reservation (1 day)\n- License approval (1–2 days)\n- Visa processing (3–5 days)",
                  },
                  {
                    q: "Can I operate outside Ajman with an Ajman Free Zone license?",
                    a: "While you can conduct international business freely, local UAE mainland operations require either a local distributor or separate mainland license. Many businesses use Ajman Free Zone as their HQ while establishing local partnerships.",
                  },
                  {
                    q: "What office space options are available in Ajman Free Zone?",
                    a: "Choose from:\n- Flexi-desk (shared workspace)\n- Executive offices (private spaces)\n- Warehouses (for industrial businesses)\n- Virtual office packages (for service businesses)",
                  },
                  {
                    q: "Do I need to visit Ajman in person to set up my business?",
                    a: "No, UBIXO can handle 100% of the process remotely through power of attorney. We'll courier all original documents to your location worldwide after completion.",
                  },
                  {
                    q: "What ongoing compliance requirements exist for Ajman Free Zone companies?",
                    a: "Annual obligations include:\n- License renewal (AED 7,000–12,000)\n- Office space renewal\n- Audit report submission (for some activities)\n- Visa renewals for staff",
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
            Launch Your Business in Ajman Free Zone Today
            </h2>
            <p className="text-center">
            Partner with UBIXO for a fast, affordable, and expertly managed business setup in Ajman Free Zone. Let us handle the paperwork while you focus on growth.
            <br /> <br />
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
                About Ajman Free Zone Business Setup
                </h3>
                <p>
                Setting up a company in Ajman Free Zone (AFZ) is one of the most cost-effective and efficient ways to establish a business in the UAE. With 100% foreign ownership, zero taxes, and a streamlined registration process, Ajman Free Zone attracts entrepreneurs, startups, and multinational companies looking for a strategic, affordable, and business-friendly environment.
                Whether you're in trading, services, e-commerce, or manufacturing, Ajman Free Zone offers flexible licensing options, affordable visa packages, and easy compliance, making it ideal for long-term business growth.
               </p>
              </div>

              <div>
                <h4 className="font-medium">
                  Why Choose Ajman Free Zone for Company Formation?
                </h4>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>
                    <strong>100% Foreign Ownership</strong>
                    <br />
                    No need for a local sponsor; retain full control of your business.
                  </li>
                  <li>
                    <strong>Affordable License Costs</strong>
                    <br />
                    Ajman Free Zone license packages start from AED 10,500, including visa options.
                  </li>
                  <li>
                    <strong>Fast Registration (3–5 Days)</strong>
                    <br />
                    Minimal paperwork and quick approvals make it easy to start.
                  </li>
                  <li>
                    <strong>Tax-Free Profits</strong>
                    <br />
                    No corporate or personal income tax, with full profit repatriation.
                  </li>
                  <li>
                    <strong>Flexible Office Solutions</strong>
                    <br />
                    Choose from flexi-desks, private offices, or warehouses.
                  </li>
                  <li>
                    <strong>Multiple Business Activities</strong>
                    <br />
                    Trade, services, industrial, and e-commerce licenses available.
                  </li>
                  <li>
                    <strong>Easy Visa Processing</strong>
                    <br />
                    Investor, employee, and family visas with minimal requirements.
                  </li>
                </ul>
              </div>


              <div>
                <h4 className="font-medium">Step-by-Step Process for Ajman Free Zone Company Setup</h4>
                <p className="mt-2">
                  UBIXO ensures a smooth, fast, and hassle-free business setup in Ajman Free Zone:
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-3">
                  <li>
                    <strong>Choose Your Business Activity</strong>
                    <br />
                    We help you select the right trade, service, industrial, or e-commerce activity from Ajman Free Zone’s approved list.
                  </li>
                  <li>
                    <strong>Reserve Your Trade Name</strong>
                    <br />
                    Our team checks UAE naming rules and secures your unique business name with Ajman Free Zone Authority.
                  </li>
                  <li>
                    <strong>Select License Type</strong>
                    <br />
                    Pick the best license for your needs:
                    <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                      <li>Commercial License (Trading, Import/Export)</li>
                      <li>Service License (Consultancy, IT, Marketing)</li>
                      <li>Industrial License (Manufacturing, Processing)</li>
                      <li>E-Commerce License (Online Businesses)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Submit Required Documents</strong>
                    <br />
                    We handle all paperwork, including:
                    <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                      <li>Passport copies of shareholders</li>
                      <li>UAE entry stamp (if applicable)</li>
                      <li>Business plan (for some activities)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Get Your Ajman Free Zone License</strong>
                    <br />
                    Once approved, your trade license is issued within 3–5 days, making your business operational.
                  </li>
                  <li>
                    <strong>Apply for Visas & Establishment Card</strong>
                    <br />
                    We process:
                    <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                      <li>Investor/Partner Visas</li>
                      <li>Employee Visas (Medical, Emirates ID, Labour Card)</li>
                      <li>Family Sponsorship</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Open a UAE Bank Account</strong>
                    <br />
                    UBIXO assists with document preparation & bank coordination for a smooth corporate account opening.
                  </li>
                </ol>
              </div>


              <div>
                <h4 className="font-semibold text-base mb-4">
                  Types of Ajman Free Zone Licenses
                </h4>
                <div className="overflow-x-auto">
                  <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">License Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Commercial License</td>
                        <td className="border border-gray-300 px-4 py-2">Trading, Import/Export, Retail</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Service License</td>
                        <td className="border border-gray-300 px-4 py-2">Consultancy, IT, Marketing, Legal</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Industrial License</td>
                        <td className="border border-gray-300 px-4 py-2">Manufacturing, Assembly, Processing</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">E-Commerce License</td>
                        <td className="border border-gray-300 px-4 py-2">Online Stores, Digital Services</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
<br />

              <div className="space-y-6">

              {/* Legal Entity Options */}
              <div>
                <h4 className="font-medium">Legal Entity Options in Ajman Free Zone</h4>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>
                    <strong>Free Zone Company (FZC):</strong> Ideal for businesses with two or more shareholders, offering a flexible corporate structure.
                  </li>
                  <li>
                    <strong>Free Zone Establishment (FZE):</strong> Perfect for individual entrepreneurs or single shareholders seeking full ownership and control.
                  </li>
                  <li>
                    <strong>Branch of Foreign Company:</strong> Allows an existing international business to expand its operations into the UAE without forming a new entity.
                  </li>
                  <li>
                    <strong>Freelancer Permit:</strong> Designed for independent professionals who wish to operate legally within their specialized field.
                  </li>
                </ul>
              </div>

              {/* Documents Required */}
              <div>
                <h4 className="font-medium">Documents Required for Ajman Free Zone Setup</h4>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Passport copies of shareholders</li>
                  <li>UAE entry stamp (if residing in UAE)</li>
                  <li>Passport-size photo (white background)</li>
                  <li>Proof of address (home country)</li>
                  <li>Business plan (for certain activities)</li>
                </ul>
              </div>

            </div>

            <div>
              <h4 className="font-semibold text-base mb-4">
                Ajman Free Zone License Cost Breakdown
              </h4>
              <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Component</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Estimated Cost (AED)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Trade License</td>
                      <td className="border border-gray-300 px-4 py-2">From 10,500</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Visa (Investor/Employee)</td>
                      <td className="border border-gray-300 px-4 py-2">From 3,500</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Office Space (Flexi-Desk)</td>
                      <td className="border border-gray-300 px-4 py-2">From 5,000/year</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Emirates ID & Medical</td>
                      <td className="border border-gray-300 px-4 py-2">1,200 per visa</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-2">
                  Prices vary based on business activities and visa requirements.
                </p>
              </div>
            </div>

            <div className="space-y-6">

            {/* Top Business Activities */}
            <div>
              <h4 className="font-medium">Top Business Activities in Ajman Free Zone</h4>
              <ul className="list-none space-y-2 mt-2">
                <li>General Trading (Electronics, Textiles, Food)</li>
                <li>Consulting Services (Legal, Finance, HR)</li>
                <li>IT & Digital Marketing</li>
                <li>E-Commerce & Dropshipping</li>
                <li>Healthcare & Wellness Services</li>
                <li>Logistics & Shipping</li>
              </ul>
            </div>

            {/* UBIXO Call-to-Action */}
            <div>
              <h4 className="font-medium">Start Your Business in Ajman Free Zone with UBIXO</h4>
              <p className="mt-2">With 3,000+ successful setups, UBIXO is your trusted partner for:</p>
              <ul className="list-none space-y-2 mt-2">
                <li>Fast License Registration (3-5 days)</li>
                <li>Visa & PRO Services (Investor, Employee, Family)</li>
                <li>Bank Account Assistance (UAE Corporate Accounts)</li>
                <li>Flexible Office Solutions (Desk/Private Office/Warehouse)</li>
                <li>Ongoing Compliance & Renewals</li>
              </ul>
              <p>
                Launch your business in Ajman Free Zone—quickly, affordably, and stress-free with UBIXO.
              </p>
              <p className="mb-0">
                Call us today or{" "}
                <a href="#contact" className="underline text-blue-600">
                  Contact UBIXO 
                </a>{" "}
                to get your freezone license with confidence and clarity.
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