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
                        <AnimatedText text={"Ras Al Khaimah"} />
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
                    Start your business in Ras Al Khaimah free zones with 100% foreign ownership, cost-effective licenses, and easy access to regional and global markets from a prime UAE location.
                    </h2>
                    <p className="mb-0">
                    At UBIXO, we specialise in Ras Al Khaimah Free Zone Company Formation, delivering seamless support for entrepreneurs, SMEs, and foreign investors. Whether launching a tech firm, trading enterprise, or consulting company, we handle everything—from license application to visa issuance—ensuring a smooth, compliant process.
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
                        We oversee your Ras Al Khaimah free zone company registration from start to finish. From selecting the right business activity to acquiring your trade license, our specialists ensure complete legal compliance and timely execution.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">Trade Name Registration</h2>
                        <p>
                        We assist in choosing and registering a compliant business name that meets all RAK Free Zone authority requirements—reducing delays and ensuring quick approvals.
                        </p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">Corporate Administrative Support</h2>
                        <p>
                        UBIXO provides comprehensive administrative support—license renewals, government updates, and document control—so you can focus on growth while we manage back-end compliance.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">RAK Free Zone Licensing</h2>
                        <p>
                        Whether you need a professional, industrial, or commercial license, we help you choose the right license and submit your application error-free for faster results.
                        </p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">PRO & Visa Services</h2>
                        <p>
                        Our experts manage visa services, including investor and employee visas, Emirates ID processing, establishment card applications, and ongoing updates with full transparency.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">Bank Account Assistance</h2>
                        <p>
                        We facilitate the business bank account opening process by connecting you with reputable UAE banks and ensuring all document requirements are met for a smooth onboarding.
                        </p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">Office Space Solutions</h2>
                        <p>
                        Choose from flexi-desks, shared offices, or fully furnished workspaces within RAK free trade zones. We guide you in selecting premises that match operational and licensing needs.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h2 className="h3 font-alt">Ongoing Compliance</h2>
                        <p>
                        Our admin team keeps your business aligned with RAK free zone regulations through proactive tracking, renewal alerts, and documentation audits—ensuring uninterrupted operations.
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
            UBIXO represents precision, integrity, and real partnership. Every Ras Al Khaimah free zone business setup we manage is built on trust, efficiency, and your business goals.
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
                FAQs – Ras Al Khaimah Free Zone Company Formation
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "What is the Ras Al Khaimah Free Zone?",
                    a: "The Ras Al Khaimah Free Zone (RAK Free Zone) is a business-friendly economic zone in the UAE offering 100% foreign ownership, low setup costs, tax benefits, and simplified company formation for international entrepreneurs and investors.",
                  },
                  {
                    q: "What are the benefits of Ras Al Khaimah free zone company setup?",
                    a: "Setting up a company in the Ras Al Khaimah free zone gives you access to full foreign ownership, affordable license packages, a wide range of business activities, simplified visa processing, and strategic access to local and global markets.",
                  },
                  {
                    q: "How much does a Ras Al Khaimah free zone company setup cost?",
                    a: "The Ras Al Khaimah free zone company setup cost varies depending on your chosen license type, business activity, office space, and visa needs. On average, the cost can start from AED 11,000, making it one of the most cost-effective free zones in the UAE.",
                  },
                  {
                    q: "What is the Ras Al Khaimah free zone license cost?",
                    a: "The RAK free zone license cost typically ranges from AED 5,750 to AED 15,000, depending on the license category—professional, commercial, or industrial—and whether visas are included.",
                  },
                  {
                    q: "Which business activities are available under an RAK free zone license?",
                    a: "RAK free zone license activities cover a broad range of sectors, including trading, consultancy, IT services, education, e-commerce, manufacturing, and more. UBIXO can help you choose the right activity that matches your business goals.",
                  },
                  {
                    q: "How do I get a Ras Al Khaimah free zone trade license?",
                    a: "To obtain a Ras Al Khaimah free zone trade license, you need to select your business activity, reserve a trade name, submit required documents, choose office space, and apply through the free zone authority. UBIXO manages the full process for you.",
                  },
                  {
                    q: "What documents are required for Ras Al Khaimah free zone company registration?",
                    a: "For Ras Al Khaimah free zone company registration, the basic documents include a passport copy, proof of address, business plan (in some cases), and completed application forms. Additional documents may be needed based on the activity and license type.",
                  },
                  {
                    q: "What is the Ras Al Khaimah free zone visa cost?",
                    a: "The Ras Al Khaimah free zone visa cost ranges from AED 3,500 to AED 6,000, depending on whether it’s an investor visa or employee visa and whether medical tests and Emirates ID fees are included.",
                  },
                  {
                    q: "Can I open a bank account after setting up in the Ras Al Khaimah Free Trade Zone?",
                    a: "Yes, after completing your Ras Al Khaimah free trade zone company setup, you can open a business bank account in the UAE. UBIXO helps you connect with top UAE banks and prepares all necessary documentation.",
                  },
                  {
                    q: "How long does it take to set up a company in the Ras Al Khaimah free zone?",
                    a: "A Ras Al Khaimah free zone company setup can take anywhere from 2 to 7 working days, depending on document readiness, license type, and the number of visas applied for. UBIXO ensures a fast-tracked, error-free process.",
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
             Ready to Start Your Ras Al Khaimah Free Zone Company?
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

          

          <div style={{ paddingTop: "30px" }} className="bg-dark-1 light-content">
            <div className="max-w-6xl mx-auto px-4 space-y-6">
                <div>
                <h3 className="font-semibold text-base">
                    About Ras Al Khaimah Free Zone Company Formation
                </h3>
                <p>
                    Setting up a company in the Ras Al Khaimah free trade zone is one of the most cost-effective and strategic ways to enter the UAE market. Offering 100% foreign ownership, tax-free operations, and access to global trade routes, the RAK free zone is designed for startups, SMEs, and international investors looking for a growth-friendly business environment.
                </p>
                <p>
                    With simplified procedures, low cost, and flexible visa packages, free zone company setup offers everything you need to establish a successful presence in the UAE.
                </p>
                </div>

                <div>
                <h4 className="font-medium">Why Choose Ras Al Khaimah Free Zone Company Formation?</h4>
                <p>
                    Ras Al Khaimah free zone company registration provides numerous benefits that make it one of the most attractive destinations for foreign investors:
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>100% Foreign Ownership</strong><br />No local sponsor or agent required—retain full ownership and control of your business.</li>
                    <li><strong>Competitive Free Zone License Cost</strong><br />The RAK free zone license cost starts from just AED 5,750 depending on your activity and visa package.</li>
                    <li><strong>Wide Range of Business Activities</strong><br />Access various RAK free zone license activities, including trading, consultancy, manufacturing, logistics, and e-commerce.</li>
                    <li><strong>Fast Company Registration</strong><br />Ras Al Khaimah free zone company registration can be completed in as little as 2–5 working days.</li>
                    <li><strong>Cost-Effective Visa Packages</strong><br />The RAK free zone visa cost starts from approximately AED 3,000—ideal for entrepreneurs and SMEs.</li>
                    <li><strong>Tax-Free Environment</strong><br />Enjoy zero corporate and income tax with full repatriation of profits and capital.</li>
                </ul>
                </div>

                <div>
                <h4 className="font-medium">Step-by-Step Process for Company Setup in Ras Al Khaimah Free Zone</h4>
                <p>At UBIXO, we make your RAK free zone company setup smooth, quick, and compliant with all legal requirements:</p>
                <ol className="list-decimal list-inside space-y-1">
                    <li>Choose Your Business Activity<br />We help you select the right activity from the RAK free zone license activities list based on your business goals.</li>
                    <li>Reserve Your Trade Name<br />Our team reserves a compliant name as per Ras Al Khaimah free zone trade license rules.</li>
                    <li>Select Your License Type<br />Pick the appropriate free zone license—commercial, professional, or industrial.</li>
                    <li>Submit Required Documents<br />Provide passport copies, photos, and application forms—we take care of the rest.</li>
                    <li>Obtain Your Trade License<br />Get your official RAK free zone trade license upon approval from the authorities.</li>
                    <li>Apply for Visa and Establishment Card<br />UBIXO handles Ras Al Khaimah free zone visa processing, Emirates ID, and immigration clearances.</li>
                    <li>Open a Business Bank Account<br />We assist in preparing documentation and coordinating with UAE banks to open your account.</li>
                </ol>
                </div>

                <div>
                <h4 className="font-medium">Types of Ras Al Khaimah Free Zone Licenses</h4>
                <p>Choose the license that best matches your business activity:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Commercial License</strong> — For general trading, e-commerce, and retail operations</li>
                    <li><strong>Professional License</strong> — For consultancy, IT, education, and personal services</li>
                    <li><strong>Industrial License</strong> — For manufacturing, packaging, and assembly</li>
                    <li><strong>Freelance Permit</strong> — For individuals offering services independently</li>
                </ul>
                <p>UBIXO ensures the correct Ras Al Khaimah free zone license is applied to support your business model.</p>
                </div>

                <div>
                <h4 className="font-medium">Legal Entity Options</h4>
                <p>You can register under the following legal structures in the RAK free zone:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Free Zone Establishment (FZE)</strong> — Single shareholder entity</li>
                    <li><strong>Free Zone Company (FZC)</strong> — Multiple shareholders</li>
                    <li><strong>Branch Office</strong> — Extension of an existing business</li>
                    <li><strong>Freelance Permit</strong> — For independent professionals</li>
                </ul>
                <p>We guide you in choosing the right legal form based on your plans and structure.</p>
                </div>

                <div>
                <h4 className="font-medium">Required Documents for Ras Al Khaimah Free Zone Company Setup</h4>
                <p>To complete your Ras Al Khaimah free zone company registration, the following documents are typically required:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Passport copy of shareholders</li>
                    <li>Passport-sized photo</li>
                    <li>Visa or entry stamp copy (if available)</li>
                    <li>Trade name reservation</li>
                    <li>Application form</li>
                    <li>Lease agreement (if workspace is included)</li>
                    <li>Emirates ID and medical test (for visa applicants)</li>
                </ul>
                <p>UBIXO handles all submissions, attestations, and government interactions to ensure a hassle-free experience.</p>
                </div>

                <div>
                <h4 className="font-medium">Ras Al Khaimah Free Zone License Cost</h4>
                <p>The Ras Al Khaimah free zone license cost starts at <strong>AED 5,750</strong> and varies based on:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Business activity</li>
                    <li>Type of license</li>
                    <li>Number of visas required</li>
                    <li>Type of office or flexi-desk selected</li>
                </ul>
                <p>The RAK free zone visa cost typically ranges from AED 3,000 to AED 5,500. UBIXO provides full transparency with a detailed cost breakdown for your business setup.</p>
                </div>

                <div>
                <h4 className="font-medium">Common Business Activities in Ras Al Khaimah Free Zones</h4>
                <p>Popular sectors for Ras Al Khaimah free zone trade license holders include:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Consulting and advisory services</li>
                    <li>Import/export and general trading</li>
                    <li>Digital marketing and IT solutions</li>
                    <li>Manufacturing and logistics</li>
                    <li>Health, wellness, and fitness</li>
                    <li>E-learning and training institutes</li>
                </ul>
                <p>We ensure your chosen activity aligns with the correct license and legal structure.</p>
                </div>

                <div className="col-md-6">
                <h4 className="font-medium">Key Requirements for Setting Up a Company in Ras Al Khaimah Free Zone</h4>
                <p>To launch your business, you’ll need to:</p>
                <ul>
                    <li>Finalise your business activity</li>
                    <li>Choose your legal entity</li>
                    <li>Reserve your trade name</li>
                    <li>Submit required documents and pay relevant fees</li>
                    <li>Apply for your trade license and visa</li>
                    <li>Secure office space (if needed)</li>
                </ul>
                <p>UBIXO ensures you meet all key requirements without delays or hidden steps.</p>
                </div>

                <div className="col-md-6">
                <h4 className="font-medium">Start Your Ras Al Khaimah Free Zone Company with UBIXO</h4>
                <p>With 3,000+ clients, UBIXO is your reliable partner for Ras Al Khaimah free zone company setup. We handle:</p>
                <ul>
                    <li>License registration and trade name approval</li>
                    <li>Visa and Emirates ID processing</li>
                    <li>Bank account coordination</li>
                    <li>Renewal and compliance support</li>
                    <li>Transparent pricing—no hidden charges</li>
                </ul>
                <p>Start your journey in the Ras Al Khaimah free trade zone with UBIXO—quickly, affordably, and professionally.</p>
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