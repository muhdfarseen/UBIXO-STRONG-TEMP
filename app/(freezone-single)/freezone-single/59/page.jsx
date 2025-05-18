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
                        <AnimatedText text={"UAE"} />
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
                    Build your business in UAE Free Zones with expert-led setup, quick approvals, and 100% foreign ownership.
                    </h2>
                    <p className="mb-0">
                      At UBIXO, we simplify UAE free zone company formation by providing hands-on guidance and regulatory expertise across all major free zones, including DMCC, IFZA, RAKEZ, SHAMS, and more. From choosing the right free zone and business activity to securing your trade license and visas, we offer tailored support that accelerates your launch while ensuring compliance and cost-efficiency.
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
                                Launch your free zone company with our start-to-finish support—covering jurisdiction selection, legal form, licensing, and document submissions for a seamless business setup.
                            </p>
                        </div>
                        <div className="col-md-6 ">
                            <h2 className="h3 font-alt">Trade Name Registration</h2>
                            <p>
                                We handle name availability checks and ensure your business name complies with the chosen free zone authority’s standards.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="h3 font-alt">
                                Corporate Administrative Support
                            </h2>
                            <p>
                                From license renewals to document handling and liaison with free zone authorities, we take care of the admin so you can grow your business with confidence.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h2 className="h3 font-alt">Free Zone Licensing</h2>
                            <p>
                                We manage the entire licensing process—including activity selection, document submission, and payment coordination—ensuring you're registered quickly and correctly.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="h3 font-alt">PRO & Visa Services</h2>
                            <p>
                                From investor and employee visas to Emirates IDs and labour cards, we take care of all government touchpoints with transparent timelines and efficient tracking.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h2 className="h3 font-alt">Bank Account Assistance</h2>
                            <p>
                                We coordinate with top UAE banks to help you open a business account by preparing and submitting all necessary documents.
                            </p>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-md-6">
                            <h2 className="h3 font-alt">Office Space Solutions</h2>
                            <p>
                                Need a flexi-desk, co-working area, or dedicated office? We help secure approved spaces that meet your free zone's legal and operational requirements.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h2 className="h3 font-alt">Ongoing Compliance</h2>
                            <p>
                                Stay updated with reminders, document tracking, and expert updates as free zone policies evolve—ensuring your company remains compliant year-round.
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
                At UBIXO, we believe in clarity, consistency, and client-first service. Your free zone company is built on a foundation of integrity and excellence.
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
                FAQs – Business Setup in UAE & Dubai Free Zones
              </h2>

              <div className="space-y-6">
                {[
                {
                    q: "What is a free zone in the UAE?",
                    a: "A free zone is a designated area where business owners can enjoy 100% foreign ownership, full profit repatriation, and zero personal or corporate tax. UAE free zones are ideal for international trade, services, and consulting businesses.",
                },
                {
                    q: "What are the benefits of setting up a business in a Dubai free zone?",
                    a: "Setting up in a Dubai free zone offers benefits like 100% ownership, no income tax, quick registration, and modern infrastructure. Popular free zones like DMCC, IFZA, and DAFZA cater to diverse industries.",
                },
                {
                    q: "How do I start a business in a UAE free zone?",
                    a: "To start a free zone company in the UAE, choose a free zone, select a business activity, submit documents, register your trade name, and obtain your UAE free zone license. UBIXO handles the full process for you.",
                },
                {
                    q: "What documents are required for UAE free zone company formation?",
                    a: `Commonly required documents include:
                    Passport copies of shareholders
                    Visa or entry stamp
                    Passport-sized photos
                    Business plan (for some free zones)
                    Application form`,
                },
                {
                    q: "How much does a free zone license cost in the UAE?",
                    a: "A UAE free zone license typically starts from AED 5,750 to AED 15,000, depending on the zone, business activity, and office type. Costs may vary for flexi-desk, shared, or dedicated offices.",
                },
                {
                    q: "Can I have a 100% foreign-owned company in a Dubai free zone?",
                    a: "Yes, all free zone companies in Dubai allow 100% foreign ownership, with no need for a local partner or sponsor.",
                },
                {
                    q: "What is the difference between Dubai mainland and free zone company formation?",
                    a: "Mainland companies can trade across the UAE and with government entities but may need a local partner (depending on activity). Free zone companies are easier to set up, tax-efficient, and allow full ownership but are limited to operating within their zone or internationally unless they appoint a distributor.",
                },
                {
                    q: "How long does it take to form a freezone company in Dubai or the UAE?",
                    a: "Freezone company formation in Dubai or anywhere in the UAE typically takes 2 to 5 working days, depending on the free zone and completeness of documents.",
                },
                {
                    q: "Can I open a bank account for my UAE free zone company?",
                    a: "Yes, once your company is registered and licensed, you can open a corporate bank account in the UAE. UBIXO can assist with bank coordination and documentation.",
                },
                {
                    q: "What types of business activities are allowed in UAE free zones?",
                    a: "Free zones support various business activities, including trading, consultancy, IT services, e-commerce, logistics, manufacturing, media, and more. Each free zone has its own approved list of activities",
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
              Ready to Launch in a UAE Free Zone?
            </h2>
            <p className="text-center">
             UBIXO ensures your business setup is smooth, fast, and fully compliant—so you can start operating confidently from day one.<br /> <br />
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
                UAE Free Zone Business Setup
                </h3>
                <p>
                Setting up a company in a UAE free zone offers international investors a simplified, cost-effective, and fully owned business structure. Free zones in Dubai and across the UAE—such as DMCC, IFZA, RAKEZ, SHAMS, and DAFZA—provide specialised infrastructure, tax benefits, and a streamlined setup process.
                With 100% foreign ownership, no import/export duties, and access to global markets, UAE free zones are ideal for startups, SMEs, and multinational companies across all industries.
                </p>
              </div>

              <div>
                <h4 className="font-medium">
                Why Choose UAE Free Zone Company Formation?
                </h4>
                <p>
                UAE free zones are globally recognised for their investor-friendly policies and efficient services. Here are the main advantages:
                </p>
                <ul className="list-disc list-inside space-y-1">
                <li>
                    <strong>100% Foreign Ownership</strong><br />
                    Own your business fully without needing a local sponsor or service agent.
                </li>
                <li>
                    <strong>Zero Personal and Corporate Tax</strong><br />
                    Most UAE free zones offer zero income and corporate tax for up to 50 years.
                </li>
                <li>
                    <strong>International Trade-Friendly</strong><br />
                    Enjoy full repatriation of profits and no currency restrictions.
                </li>
                <li>
                    <strong>Quick and Simple Setup</strong><br />
                    Company formation can be completed in 2–5 working days depending on the free zone.
                </li>
                <li>
                    <strong>Modern Infrastructure</strong><br />
                    Benefit from state-of-the-art offices, warehouses, and co-working spaces tailored to your sector.
                </li>
                <li>
                    <strong>Custom Licensing Options</strong><br />
                    Free zones offer flexible license packages to suit your business activity and scale.
                </li>
              </ul>
              </div>

              <div>
                <h4 className="font-medium">
                Step-by-Step Process for Business Setup in UAE Free Zone
                </h4>
                <p>
                UBIXO streamlines your free zone setup with expert support at each stage:
                </p>
                <ol className="list-decimal list-inside space-y-1">
                <li>Select a Free Zone<br />Choose based on your business activity, location preference, and infrastructure needs (e.g., DMCC for trading, IFZA for services).</li>
                <li>Decide Legal Structure<br />Options include Free Zone Establishment (FZE), Free Zone Company (FZC), or Branch of a Foreign Company.</li>
                <li>Reserve a Trade Name<br />Submit preferred names for approval as per the free zone authority’s naming guidelines.</li>
                <li>Apply for Initial Approval<br />Obtain NOC and initial clearance to proceed with licensing and office lease.</li>
                <li>Choose Office Space<br />Select from flexi-desks, shared offices, or warehouses depending on your license type.</li>
                <li>Submit Documentation & Receive License<br />Complete all documentation and receive your UAE free zone trade license.</li>
                <li>Apply for Visas & Bank Account<br />Get investor/employee visas and open a UAE corporate bank account with our assistance.</li>
                </ol>
              </div>

              <div>
                <h4 className="font-medium">
                Types of Free Zone Licenses in the UAE
                </h4>
                <p>
                Free zones offer flexible licensing options tailored to your business model:
                </p>
                <ul className="list-disc list-inside space-y-1">
                <li>
                    <strong>Commercial License</strong><br />
                    For trading, general trading, e-commerce, and import/export activities.
                </li>
                <li>
                    <strong>Service/Professional License</strong><br />
                    For consultancy, IT, digital services, education, marketing, and similar professions.
                </li>
                <li>
                    <strong>Industrial License</strong><br />
                    For manufacturing, packaging, food processing, and light or heavy industry.
                </li>
            </ul>
            <p>
                UBIXO helps you choose the ideal license that matches your goals and meets free zone regulations.
            </p>
              </div>

              <div>
                <h4 className="font-medium">
                    Permitted Business Entities in UAE Free Zones
                </h4>
                <p>
                    Each free zone allows different legal structures, including:
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <strong>Free Zone Establishment (FZE)</strong><br />
                        Single shareholder company ideal for solo investors.
                    </li>
                    <li>
                        <strong>Free Zone Company (FZC)</strong><br />
                        Two or more shareholders forming a limited liability entity.
                    </li>
                    <li>
                        <strong>Branch of a Foreign Company</strong><br />
                        Allows overseas businesses to expand into the UAE without a local partner.
                    </li>
                </ul>
                <p>
                    UBIXO ensures your entity structure is compliant with free zone laws and future-ready.
                </p>
              </div>

              <div>
                <h4 className="font-medium">
                    Required Documents for UAE Free Zone Company Formation
                </h4>
                <p>
                    Prepare the following documents:
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Passport copies of shareholders and managers</li>
                    <li>Visa or entry stamp copy</li>
                    <li>Passport-sized photographs</li>
                    <li>Trade name approval</li>
                    <li>Application form</li>
                    <li>Office lease agreement (if required)</li>
                    <li>MOA (for multi-shareholder setups)</li>
                </ul>
                <p>
                    UBIXO handles all translations, attestations, and document submissions to avoid delays.
                </p>
              </div>
              <div>
                  <h4 className="font-medium">
                    Cost of UAE Free Zone Business Setup
                </h4>
                <p>
                    Free zone company setup is affordable and transparent:
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>License packages start from AED 5,750 to AED 15,000+</li>
                    <li>Total cost depends on chosen free zone, business activity, and visa quota</li>
                    <li>Office type (Flexi-desk, co-working, or warehouse) also impacts pricing</li>
                    <li>Add-ons like visa services, legal drafting, and banking support available</li>
                </ul>
                <p>
                    UBIXO provides customisable packages with no hidden fees and a full cost breakdown.
                </p>
              </div>
              <div>
                <h4 className="font-medium">
                    Common Business Activities Allowed in UAE Free Zones
                </h4>
                <p>
                    Free zones support a wide range of activities including:
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>General Trading and E-Commerce</li>
                    <li>Technology and Software Development</li>
                    <li>Digital Marketing and Media</li>
                    <li>Logistics, Warehousing, and Distribution</li>
                    <li>Education, Consultancy, and Training</li>
                    <li>Manufacturing and Industrial Services</li>
                    <li>Health & Wellness Services</li>
                    <li>Import/Export and Freight Forwarding</li>
                </ul>
                <p>
                    UBIXO helps you align your selected activity with the right free zone and license.
                </p>
              </div>
              <div className="col-md-6">
                <h2 className="h3 font-alt">Key Requirements for Free Zone Business Setup</h2>
                <p>
                  To register and operate a UAE free zone company, you must:
                </p>
                <ul>
                  <li>Choose a licensed free zone</li>
                  <li>Finalise business activity and structure</li>
                  <li>Provide all shareholder documents</li>
                  <li>Secure physical or virtual office space</li>
                  <li>Complete immigration procedures (visas, Emirates ID)</li>
                  <li>Stay compliant with license renewals and reporting</li>
                </ul>
                <p>
                  UBIXO manages the full process to ensure you stay compliant from day
                  one.
                </p>
              </div>
              <div className="col-md-6">
                <h2 className="h3 font-alt">Start Your UAE Free Zone Business with UBIXO</h2>
                <p>
                  With 3,000+ clients and expert knowledge of UAE free zone
                  regulations, UBIXO delivers:
                </p>
                <ul>
                  <li>Quick and compliant company formation</li>
                  <li>Trade name registration and license issuance</li>
                  <li>PRO services and visa processing</li>
                  <li>Bank account setup with major UAE banks</li>
                  <li>Transparent pricing and end-to-end support</li>
                </ul>
                <p>
                  Build your future in the UAE free zone with UBIXO—your reliable
                  company formation partner.
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
