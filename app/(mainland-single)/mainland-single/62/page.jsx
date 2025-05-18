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
                        <AnimatedText text={"Business Setup in Sharjah"} />
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
                      The Sharjah Strength: Build your business in Sharjah Mainland with expert-led guidance, seamless approvals, and cost-effective licensing.
                    </h2>
                    <p className="mb-0">
                    At UBIXO, we bring deep-rooted expertise in Sharjah mainland company formation, guided by the regulations of the Sharjah Economic Development Department (SEDD). Our team walks you through every crucial step—from selecting your business activity and legal structure to obtaining your Sharjah trade license and visas. We offer tailored, end-to-end support that ensures your company is set up swiftly, compliantly, and strategically in one of the UAE’s most progressive emirates.
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
                        Launch your Sharjah mainland company with our full-spectrum support—covering legal structure selection, SEDD approvals, and documentation for a compliant and clear setup.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Trade Name Registration</h2>
                      <p>
                        We check trade name availability, manage approvals, and ensure your brand identity meets Sharjah DED naming standards.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Corporate Administrative Support</h2>
                      <p>
                        From license renewals to documentation and day-to-day interactions with Sharjah Government entities, we handle the admin so you can focus on running your business.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Mainland Licensing</h2>
                      <p>
                        We manage the entire SEDD licensing process—from activity classification to legal submissions—ensuring your business is registered correctly and quickly.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">PRO & Visa Services</h2>
                      <p>
                        From investor and partner visas to employee labour cards and Emirates IDs, we take care of it all, with clear timelines and real-time tracking.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Bank Account Assistance</h2>
                      <p>
                        We help you open a UAE business bank account by coordinating with leading banks and preparing all necessary documents.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Office Setup Support</h2>
                      <p>
                        Whether you need a Flexi-desk or a full workspace, we help secure SEDD-approved office solutions that meet licensing requirements.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="h3 font-alt">Ongoing Compliance</h2>
                      <p>
                        Stay updated with renewal alerts, document tracking, and expert guidance as Sharjah's regulatory landscape evolves.
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
            We stand for transparency, trust, and tailored support. At UBIXO, your Sharjah business is built with precision and care.
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
                FAQs – Mainland Company Formation in Sharjah
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "How do I start a business in Sharjah mainland?",
                    a: "To start a business in Sharjah mainland, you must choose a business activity, get your trade name approved, obtain initial approval from the Sharjah Economic Development Department (SEDD), draft the Memorandum of Association (MOA), secure office space, submit the required documents, and receive your trade license.",
                  },
                  {
                    q: "What is a Sharjah mainland license?",
                    a: "A Sharjah mainland license is a trade license issued by the Sharjah Economic Development Department (SEDD) that allows you to legally operate a business within Sharjah and across the UAE.",
                  },
                  {
                    q: "How much does it cost to start a business in Sharjah mainland?",
                    a: "The cost of starting a business in Sharjah mainland typically ranges from AED 12,000 to AED 25,000, depending on your chosen activity, office space, and visa requirements.",
                  },
                  {
                    q: "What are the benefits of setting up in Sharjah mainland?",
                    a: "Setting up in Sharjah mainland offers benefits such as UAE-wide business access, 100% foreign ownership in many sectors, eligibility for government contracts, lower operational costs, and a strong infrastructure.",
                  },
                  {
                    q: "Can a foreigner own 100% of a Sharjah mainland company?",
                    a: "Yes, most professional and commercial business activities in Sharjah mainland now allow 100% foreign ownership under the revised UAE Commercial Companies Law.",
                  },
                  {
                    q: "Do I need a local sponsor for a Sharjah mainland business setup?",
                    a: "A local Emirati sponsor is only required for certain restricted business activities. Most categories no longer require profit-sharing or majority local ownership.",
                  },
                  {
                    q: "How long does it take to get a Sharjah mainland license?",
                    a: "With all necessary documents, it typically takes 3 to 5 working days to obtain a Sharjah mainland license, depending on the business type and required approvals.",
                  },
                  {
                    q: "Which authority issues the Sharjah mainland trade license?",
                    a: "The Sharjah Economic Development Department (SEDD) is the main authority responsible for issuing trade licenses in Sharjah mainland.",
                  },
                  {
                    q: "Can I operate across the UAE with a Sharjah mainland license?",
                    a: "Yes, a Sharjah mainland license allows you to conduct business activities across all emirates of the UAE without jurisdictional limitations.",
                  },
                  {
                    q: "What types of licenses are available in Sharjah mainland?",
                    a: "Sharjah mainland offers commercial, industrial, and professional licenses based on your business activity.",
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
            Ready to Set Up in Sharjah Mainland?
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
                  Mainland Company Formation in Sharjah
                </h3>
                <p>
                Sharjah mainland company formation is regulated by the Sharjah Economic Development Department (SEDD). It provides a robust and cost-efficient platform for businesses to operate across the UAE and globally. Sharjah’s strategic location between Dubai and the Northern Emirates, combined with low operational costs and streamlined registration, makes it ideal for startups, SMEs, and large enterprises.
                </p>
                <p>
                Businesses in Sharjah mainland benefit from diverse activity options, improved regulatory frameworks, and 100% foreign ownership for many sectors, giving entrepreneurs greater control and flexibility to scale operations.
               </p>
              </div>
              <div>
              <h4 className="font-medium">
                Why Choose Sharjah Mainland Company Formation?
              </h4>
              <p>
                Sharjah continues to attract global investors with its dynamic policies and pro-business reforms. Here are key benefits:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>
                  <strong>Strategic Location:</strong> Centrally positioned near Dubai and connected by major highways, airports, and seaports.
                </li>
                <li>
                  <strong>Affordable Business Setup:</strong> Lower setup costs and operating expenses compared to other major UAE cities.
                </li>
                <li>
                  <strong>No Trade Restrictions:</strong> Operate freely within Sharjah, across the UAE, and internationally.
                </li>
                <li>
                  <strong>100% Foreign Ownership:</strong> Permitted for many commercial and professional activities without a local sponsor.
                </li>
                <li>
                  <strong>Access to the Local Market:</strong> Serve both B2B and B2C segments across the UAE with a Sharjah mainland license.
                </li>
                <li>
                  <strong>Quick Setup Timelines:</strong> Company formation can be completed in 3 to 5 working days with proper documentation.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">
                Step-by-Step Process for Business Setup in Sharjah Mainland
              </h4>
              <p>UBIXO simplifies Sharjah company formation with a clear, structured approach:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Choose Your Business Activity – Select from SEDD-approved activities in trading, consultancy, industrial, or services.</li>
                <li>Decide on Legal Structure – Options include LLC, sole establishment, civil company, or a foreign branch.</li>
                <li>Reserve a Trade Name – Submit preferred business names for SEDD approval and reservation.</li>
                <li>Apply for Initial Approval – This grants permission to proceed with office leasing and documentation.</li>
                <li>Secure Office Space – Choose a Flexi-desk or commercial office and register your tenancy contract with SEDD.</li>
                <li>Submit Documents & Obtain License – Finalise documentation and apply for your Sharjah mainland license.</li>
                <li>Apply for Visas & Open a Bank Account – Process investor/employee visas and set up your UAE corporate bank account.</li>
              </ol>
            </div>

            <div>
              <h4 className="font-medium">
                Choose Your Business License Type
              </h4>
              <p>SEDD offers three primary license types for mainland businesses in Sharjah:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Commercial License:</strong> For trading, e-commerce, retail, and import/export activities.</li>
                <li><strong>Professional License:</strong> For services like consultancy, IT, marketing, and more.</li>
                <li><strong>Industrial License:</strong> For manufacturing, production, and packaging operations.</li>
              </ul>
              <p>UBIXO helps you select the ideal license based on your current business activity and future plans.</p>
            </div>

            <div>
              <h4 className="font-medium">
                Business Entities Permitted in Sharjah Mainland
              </h4>
              <p>Sharjah mainland allows the formation of various legal business entities:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Limited Liability Company (LLC):</strong> Suitable for up to 50 shareholders with limited liability.</li>
                <li><strong>Sole Establishment:</strong> Best for individuals offering professional services or freelancing.</li>
                <li><strong>Civil Company:</strong> Ideal for partnerships between professionals like doctors, engineers, and consultants.</li>
                <li><strong>Branch of a Foreign Company:</strong> For established international firms entering the UAE market.</li>
              </ul>
              <p>UBIXO ensures you choose the best legal structure in line with Sharjah’s regulations.</p>
            </div>

            <div>
              <h4 className="font-medium">
                Documents Required for Sharjah Mainland Business Setup
              </h4>
              <p>Prepare the following documents for successful company registration:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Passport copies of all shareholders and managers</li>
                <li>UAE residence visa or entry stamp</li>
                <li>Trade name reservation certificate</li>
                <li>Initial approval from SEDD</li>
                <li>Tenancy contract (Ejari or SEDD-approved lease)</li>
                <li>Passport-sized photographs of all applicants</li>
                <li>MOA (if forming an LLC)</li>
              </ul>
              <p>UBIXO handles translations, attestations, and submissions to ensure a smooth process.</p>
            </div>

            <div>
              <h4 className="font-medium">
                Cost of the Sharjah Mainland License
              </h4>
              <p>Setting up a company in Sharjah mainland is cost-effective and flexible:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Startup packages start from AED 9,000 to AED 18,000</li>
                <li>Costs depend on license type, visa quota, and office requirements</li>
                <li>Optional services like PRO, legal drafting, and bank setup may add to costs</li>
              </ul>
              <p>UBIXO offers transparent, customisable pricing with no hidden charges.</p>
            </div>

            <div>
              <h4 className="font-medium">
                Types of Business Activities Allowed
              </h4>
              <p>Sharjah DED (SEDD) licenses a wide range of business activities, including:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>General Trading and E-Commerce</li>
                <li>Information Technology Services</li>
                <li>Manufacturing and Light Industrial Work</li>
                <li>Transport, Shipping & Logistics</li>
                <li>Real Estate & Construction</li>
                <li>Education, Training, and HR Services</li>
                <li>Healthcare & Wellness Services</li>
              </ul>
              <p>UBIXO helps match your activity with the right license and regulatory approvals.</p>
            </div>

            <div>
              <h4 className="font-medium">
                Key Requirements for Business Setup in Sharjah Mainland
              </h4>
              <p>Ensure the following requirements are met for a successful launch:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Registered physical address approved by SEDD</li>
                <li>Valid documents for all shareholders and managers</li>
                <li>Compliance with zoning and commercial space guidelines</li>
                <li>Visa processing for investors and employees</li>
                <li>Renewal management for licenses and immigration records</li>
              </ul>
              <p>UBIXO provides ongoing compliance support to keep your operations smooth and legal.</p>
            </div>

            <div>
              <h4 className="font-medium">
                Start Your Sharjah Mainland Business with UBIXO
              </h4>
              <p>
                With 3,000+ satisfied clients and deep expertise in Sharjah’s business setup landscape, UBIXO offers:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Expert setup services from start to finish</li>
                <li>Fast track trade name and license approvals</li>
                <li>Visa and PRO services for you and your team</li>
                <li>Assistance with UAE corporate bank account setup</li>
                <li>Dedicated advisors and fully transparent pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">
                Ready to Launch Your Sharjah Mainland Business?
              </h4>
              <p>
                Begin your Sharjah business journey with confidence. Let UBIXO handle the legalities while you focus on scaling your business.
              </p>
              <p className="mb-0">
                Call us now or{" "}
                <a href="#contact" className="underline text-blue-600">
                  Contact Us
                </a>{" "}
                to get your mainland license the right way.
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