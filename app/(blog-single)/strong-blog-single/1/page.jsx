import Form9 from "@/components/blog/commentForm/Form9";
import Comments from "@/components/blog/Comments";
import Widget2 from "@/components/blog/widgets/Widget2";
import AnimatedText from "@/components/common/AnimatedText";
import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Image from "next/image";
import { strongMultiPages } from "@/data/menu";
import { allBlogs } from "@/data/blogs";
import ParallaxContainer from "@/components/common/ParallaxContainer";

export const metadata = {
  title:
    "Home 10 Blog Single || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default async function StrongBlogSinglePage(props) {
  const params = await props.params;
  const blog = allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];
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
                  <h1 className="section-title-medium mb-0">
                    <span className="wow charsAnimIn" data-splitting="chars">
                      <AnimatedText text={blog.title || blog.postTitle} />
                    </span>
                  </h1>
                  {/* Author, Categories, Comments */}
                  {/* <div
                    className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="d-inline-block me-3">
                      <a href="#">
                        <i className="mi-clock size-16" />
                        <span className="visually-hidden"></span> 
                      </a>
                    </div>
                    <div className="d-inline-block me-3">
                      <a href="#">
                        <i className="mi-user size-16" />
                        <span className="visually-hidden"></span> 
                      </a>
                    </div>
                    <div className="d-inline-block me-3">
                      <i className="mi-folder size-16" />
                      <span className="visually-hidden"></span>
                      <a href="#"></a>, <a href="#"></a>
                    </div>
                    <div className="d-inline-block me-3">
                      <a href="#">
                        <i className="mi-message size-16" />
                      </a>
                    </div>
                  </div> */}
                  {/* End Author, Categories, Comments */}
                </div>
                {/* End Home Section Content */}
              </div>
            </ParallaxContainer>
            <>
              {/* Section */}
              <section className="page-section">
                  <div className="container relative">
                    <div className="row">
                      <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                        <div className="blog-item mb-80 mb-xs-40">
                        <div className="row mb-sm-20">
                          <h2 className="h3 font-alt mb-20">
                          Dubai continues to thrive as a global hub for trade, investment, and entrepreneurship. Whether you're a solo founder, an SME, or an international corporation, setting up a business in Dubai in 2025 is easier than ever—thanks to investor-friendly laws, full foreign ownership, and robust infrastructure.
                          </h2>
                          <p className="mb-0">
                          This step-by-step guide covers everything you need to know before launching your business, including zones, license types, regulations, and compliance requirements.
                          </p>
                        </div>
                          <div className="blog-item-body">
                            <h2>Dubai’s Economic Outlook: Why 2025 is the Right Time to Invest</h2>
                            <ul>
                              <li>Dubai’s GDP grew by 3.6% in the first half of 2024, showing strong momentum across key sectors.</li>
                              <li>The UAE Central Bank projects 4% real GDP growth for 2024.</li>
                              <li>EKN ranks the UAE as a low-risk country for business (Risk Category 2 of 7).</li>
                              <li>Dubai offers 0% personal income tax, cutting-edge infrastructure, and efficient business registration services.</li>
                            </ul>
                            <div className="mb-40 mb-xs-30">
                              <Image
                                src="/assets/images/demo-bold/portfolio/4.jpg"
                                alt="Dubai Business Setup"
                                width={1200}
                                height={819}
                              />
                            </div>
                            <h3 className="font-semibold text-base">Things to Know Before Setting Up Your Business</h3>
                            <p>Before you begin the registration process, it’s important to understand the key factors that will influence your business setup. These include your business jurisdiction, type of license, and operational model. </p>

                            <h4>Mainland vs. Free Zones vs. Offshore</h4>
                            <p>Dubai offers three primary zones for setting up a business:
                            </p>
                            <h4 className="font-medium">Mainland</h4>
                            <p>If you want to trade directly with the UAE market and internationally, a Mainland license is the right choice. Mainland companies are registered with the Department of Economy and Tourism (DET) and allow:</p>
                            <ul>
                              <li>100% foreign ownership for most activities</li>
                              <li>Full access to UAE and global markets</li>
                              <li>No restriction on office location</li>
                            </ul>
                            <strong>Benefits:</strong>
                            <ul>
                              <li>Trade flexibility: Direct trading within the UAE and abroad</li>
                              <li>Location freedom: Operate anywhere in the UAE</li>
                              <li>100% ownership: For most activities post-2020 reforms</li>
                              <li>Taxation: 5% VAT, 9% corporate tax (if profits exceed AED 375,000), 0% personal income tax</li>
                            </ul>
                            <strong>Considerations:</strong>
                            <ul>
                              <li>Must lease a physical office (minimum 200 sq. ft.; virtual offices not allowed)</li>
                              <li>Stricter government regulations</li>
                              <li>Emiratisation mandates:
                                <ul>
                                  <li>Hire at least 1 Emirati for 25–49 employees</li>
                                  <li>Hire 2% Emiratis for 50+ employees</li>
                                </ul>
                              </li>
                            </ul>

                            <h4 className="font-medium">Free Zone</h4>
                            <p>Free zones offer 100% foreign ownership, streamlined procedures, and are industry-specific hubs. Ideal for international business and tech startups.</p>
                            <p><strong>Popular zones </strong>include DMCC, Dubai Silicon Oasis, Dubai Airport Free Zone (DAFZA), and Dubai Internet City.</p>
                            <strong>Benefits:</strong>
                            <ul>
                              <li>100% foreign ownership</li>
                              <li>0% corporate tax (up to AED 375,000 profit)</li>
                              <li>0% personal income tax</li>
                              <li>Full repatriation of capital and profits</li>
                              <li>No currency restrictions</li>
                              <li>Tailored support for industry-specific activities</li>
                            </ul>
                            <strong>Considerations:</strong>
                            <ul>
                              <li>Cannot trade directly with the UAE local market without a local agent/distributor</li>
                              <li>Must operate within the designated free zone</li>
                            </ul>

                            <h4 className="font-medium">Offshore</h4>
                            <p>Offshore companies are typically used for international operations, asset protection, and holding purposes. They are not allowed to trade inside the UAE.</p>
                            <strong>Benefits:</strong>
                            <ul>
                              <li>100% foreign ownership</li>
                              <li>High privacy and confidentiality</li>
                              <li>No minimum capital</li>
                            </ul>
                            <strong>Considerations:</strong>
                            <ul>
                              <li>Cannot conduct UAE-based business</li>
                              <li>May need a UAE sponsor for certain local services</li>
                              <li>May face banking restrictions in opening UAE corporate accounts</li>
                            </ul>

                            <h3 className="font-semibold text-base">Types of Licenses in Dubai</h3>
                            <p>Choosing the correct license is crucial. Dubai issues six major license categories based on your business activity:</p>
                            <ol>
                              <li>
                                <strong>Commercial License</strong><br />
                                For trading businesses: import/export, retail, logistics, real estate, general trading, etc.
                              </li>
                              <li>
                                <strong>Industrial License</strong><br />
                                For manufacturing and industrial activities, such as textiles, metals, or paper products.
                              </li>
                              <li>
                                <strong>Professional License</strong><br />
                                For individuals and firms offering specialised services: consultancy, IT, engineering, and legal services.
                              </li>
                              <li>
                                <strong>Tourism License</strong><br />
                                For travel agencies, tour operators, hotels, resorts, and related tourism businesses.
                              </li>
                              <li>
                                <strong>Agricultural License</strong><br />
                                For farming, plant nurseries, and agribusiness consultancies or trading (e.g., fertilisers, pesticides).
                              </li>
                              <li>
                                <strong>Crafts License</strong><br />
                                For artisans or skilled businesses like carpentry, printing, and blacksmithing.
                              </li>
                            </ol>
                            <p><strong>Note:</strong> Some activities may require additional approvals from relevant ministries (e.g., health, education, legal, or environment).</p>


                            <h3 className="font-semibold text-base">Step-by-Step Process to Setup Your Business in Dubai (2025)</h3>
                            <p>Setting up a business in Dubai involves several administrative and regulatory steps. Here’s a comprehensive breakdown of each stage in 2025:</p>

                            <h3 className="font-semibold text-base">Step 1: Decide on Business Activity</h3>
                            <p>The first step is to determine the nature of your business. Dubai’s Department of Economy and Tourism (DET) and various Free Zone Authorities offer a catalogue of over 2,000 permitted activities.</p>
                            <ul>
                              <li>E-commerce</li>
                              <li>Real estate brokerage</li>
                              <li>IT consultancy</li>
                              <li>General trading</li>
                              <li>Manufacturing</li>
                              <li>Digital marketing</li>
                              <li>Food services</li>
                            </ul>
                            <p><strong>Note:</strong> Some activities may require external approvals from regulatory bodies (e.g., health, legal, or financial authorities).</p>

                            <h3 className="font-semibold text-base">Step 2: Select the Right Jurisdiction</h3>
                            <p>Dubai offers three business jurisdictions, and your choice will impact ownership rights, taxation, and trading scope:
                            </p>
                            <ul>
                              <li><strong>Mainland:</strong> Ideal for businesses targeting the UAE local market and international trade. Most sectors allow 100% foreign ownership.
                              </li>
                              <li><strong>Free Zone:</strong> Best for businesses seeking full ownership, tax benefits, and export-focused operations.</li>
                              <li><strong>Offshore:</strong> Suitable for international business activities, asset protection, or holding companies. Cannot operate within the UAE.</li>
                            </ul>

                            <h3 className="font-semibold text-base">Step 3: Choose a Legal Business Structure</h3>
                            <p>Your legal structure defines your liability, ownership model, and operational flexibility. Common structures in Dubai include:</p>
                            <ul>
                              <li><strong>LLC (Limited Liability Company):</strong>Most popular for mainland businesses. Allows multiple shareholders.</li>
                              <li><strong>Sole Establishment:</strong>Suitable for one-person ownership providing services (mainland or free zone).</li>
                              <li><strong>FZC / FZE:</strong>FZC allows multiple shareholders; FZE is for single-owner companies.</li>
                              <li><strong>Branch Office:</strong> For international firms expanding into Dubai without creating a new entity.</li>
                              <li><strong>Civil Company:</strong>  For professionals such as doctors, engineers, or accountants.</li>
                              <li><strong>Holding Company (Offshore):</strong> Best for managing shares, assets, or intellectual property globally.</li>
                            </ul>

                            <h3 className="font-semibold text-base">Step 4: Reserve a Trade Name</h3>
                            <p>
                              You must register a unique and meaningful business name that aligns with UAE naming standards. This is a crucial step, as the name represents your brand identity and must comply with government regulations.
                            </p>
                            <h4>Guidelines include:</h4>
                            <ul>
                              <li>Avoid religious or political references</li>
                              <li>No abbreviations (e.g., using initials instead of full names)</li>
                              <li>Must reflect your business activity</li>
                              <li>Must not duplicate an existing registered name</li>
                            </ul>
                            <p>
                              Trade name registration is handled through the Dubai Economic and Tourism (DET) department for mainland businesses or through the relevant Free Zone authority for Free Zone entities.
                            </p>


                            <h3 className="font-semibold text-base">Step 5: Apply for Initial Approval</h3>
                            <p>This is a no-objection certificate (NOC) from the government to proceed with your company formation. It shows the UAE authorities have no objection to your chosen activity.</p>
                            <p><strong>Documents required:</strong></p>
                            <ul>
                              <li>Shareholder passport copies</li>
                              <li>Trade name reservation</li>
                              <li>Business activity list</li>
                            </ul>
                            <p>Approval is usually valid for 6 months, giving you time to complete the setup.</p>

                            <h3 className="font-semibold text-base">Step 6: Draft the MOA or LSA Agreement</h3>
                            <p>This step includes the legal documentation of your company:</p>
                            <ul>
                              <li><strong>MOA (Memorandum of Association)</strong> – Defines ownership percentage, responsibilities of shareholders, capital, and profit distribution.</li>
                              <li><strong>LSA (Local Service Agent) Agreement</strong> – Required only for specific mainland service-based businesses. The agent has no ownership rights or control.</li>
                            </ul>
                            <p>Documents must be notarised and attested by the Dubai courts or the free zone’s legal department.</p>

                            <h3 className="font-semibold text-base">Step 7: Secure Office Space</h3>
                            <p>Dubai regulations mandate a registered business address.</p>
                            <ul>
                              <li><strong>Mainland:</strong> Requires a physical office (minimum 200 sq. ft.) with an Ejari tenancy contract.</li>
                              <li><strong>Free Zone:</strong> Flexible options such as shared desks, flexi-desks, private offices, or smart offices.</li>
                              <li><strong>Offshore:</strong> Only a registered address within a free zone is needed—no physical office required.</li>
                            </ul>
                            <p>The size and location of your office may affect your visa quota.</p>

                            <h3 className="font-semibold text-base">Step 8: Submit Documents & Pay Government Fees</h3>
                              <p>Once all documents are in place, submit them to DET (for mainland) or the respective Free Zone authority. Required documents include:</p>
                              <ul>
                                <li>Trade name approval certificate</li>
                                <li>Initial approval certificate</li>
                                <li>MOA / LSA agreement</li>
                                <li>Tenancy contract (Ejari, if mainland)</li>
                                <li>Passport & visa copies of shareholders</li>
                              </ul>
                              <p>Government and licensing fees vary by jurisdiction, activity, and office type.</p>

                              <h3 className="font-semibold text-base">Step 9: Obtain Your Business License</h3>
                              <p>After submission and fee payment, the authority issues your Trade License, which legally allows you to operate your business in Dubai.</p>
                              <p>You will receive:</p>
                              <ul>
                                <li>Business/trade license</li>
                                <li>Certificate of incorporation</li>
                                <li>Chamber of Commerce registration (optional but recommended)</li>
                              </ul>

                              <h3 className="font-semibold text-base">Step 10: Open a Corporate Bank Account</h3>
                              <p>A local business license allows you to open a corporate bank account in the UAE. Choose from:</p>
                              <p><strong>Top Banks:</strong></p>
                              <ul>
                                <li>Emirates NBD</li>
                                <li>Mashreq Bank</li>
                                <li>RAKBank</li>
                                <li>ADCB</li>
                                <li>HSBC</li>
                                <li>Standard Chartered</li>
                              </ul>

                              <p><strong>Required Documents:</strong></p>
                              <ul>
                                <li>Trade License copy</li>
                                <li>MOA</li>
                                <li>Shareholders’ passport copies</li>
                                <li>Residency visas (if applicable)</li>
                                <li>Business plan or projected revenue (for some banks)</li>
                              </ul>
                              <p>Processing may take 7–15 working days depending on the bank’s compliance.</p>

                              <h3 className="font-semibold text-base">Step 11: Apply for Visas</h3>
                              <p>Once your license and office space are confirmed, you can apply for residency visas for yourself, employees, and dependents.</p>
                              <p><strong>Visa Types:</strong></p>
                              <ul>
                                <li>Investor/Partner Visa</li>
                                <li>Employee Visas</li>
                                <li>Dependent Visas (Family/Children)</li>
                              </ul>

                              <p><strong>Steps include:</strong></p>
                              <ul>
                                <li>Entry permit issuance</li>
                                <li>Medical test & biometrics</li>
                                <li>Emirates ID application</li>
                                <li>Visa stamping on passport</li>
                              </ul>
                              <p>Visa quotas depend on your business activity and office size. Mainland firms often enjoy larger quotas.</p>


                            <h3 className="font-semibold text-base">Compliance and Taxation (2025 Update)</h3>
                            <p>Stay compliant with the latest UAE regulations:</p>
                            <ul>
                              <li>Corporate Tax: 9% on profits above AED 375,000</li>
                              <li>VAT: 5% applicable on most goods and services</li>
                              <li>UBO Filing: Declare Ultimate Beneficial Owner</li>
                              <li>ESR: Economic Substance Regulations compliance if applicable</li>
                              <li>Audit & Bookkeeping: Mandatory for most businesses</li>
                            </ul>

                            <h3 className="font-semibold text-base">How Long Does It Take to Register a Business in Dubai?</h3>
                            <ul>
                              <li>Mainland: 5–10 working days</li>
                              <li>Free Zone: 3–7 working days</li>
                              <li>Offshore: 3–5 working days</li>
                            </ul>
                            <h3 className="font-semibold text-base">Cost of Starting a Business in Dubai (2025) – Full Breakdown</h3>
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead className="thead-light">
                                  <tr>
                                    <th>Setup Type</th>
                                    <th>Estimated Total Cost (AED)</th>
                                    <th>What’s Included</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Mainland</td>
                                    <td>AED 12,000 – 25,000</td>
                                    <td>Trade license, name reservation, MOA, initial approval, office registration, PRO fees</td>
                                  </tr>
                                  <tr>
                                    <td>Free Zone</td>
                                    <td>AED 10,000 – 40,000</td>
                                    <td>Trade license, name reservation, flexi-desk/shared office, establishment card</td>
                                  </tr>
                                  <tr>
                                    <td>Offshore</td>
                                    <td>AED 8,000 – 15,000</td>
                                    <td>Offshore company registration, agent fees, registered address, document notarisation</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <h3 className="font-semibold text-base">Mainland Company Setup Cost Breakdown</h3>
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Component</th>
                                    <th>Estimated Cost (AED)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Trade Name Reservation</td>
                                    <td>620 – 800</td>
                                  </tr>
                                  <tr>
                                    <td>Initial Approval Fee</td>
                                    <td>120 – 1,500</td>
                                  </tr>
                                  <tr>
                                    <td>Trade License (General Trading, etc.)</td>
                                    <td>8,000 – 15,000</td>
                                  </tr>
                                  <tr>
                                    <td>MOA Drafting & Notarisation</td>
                                    <td>2,000 – 4,000</td>
                                  </tr>
                                  <tr>
                                    <td>Office Space (Ejari - 200 sq.ft.)</td>
                                    <td>15,000 – 40,000/year</td>
                                  </tr>
                                  <tr>
                                    <td>Local Sponsor (if required)</td>
                                    <td>5,000 – 15,000/year</td>
                                  </tr>
                                  <tr>
                                    <td>Immigration Card & Establishment Card</td>
                                    <td>2,000 – 3,000</td>
                                  </tr>
                                  <tr>
                                    <td>PRO/Documentation Services</td>
                                    <td>1,500 – 3,000</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <h3 className="font-semibold text-base">Free Zone Company Setup Cost Breakdown</h3>
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Component</th>
                                    <th>Estimated Cost (AED)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Trade License</td>
                                    <td>7,500 – 15,000</td>
                                  </tr>
                                  <tr>
                                    <td>Name Reservation</td>
                                    <td>500 – 700</td>
                                  </tr>
                                  <tr>
                                    <td>Registration/Establishment Fee</td>
                                    <td>5,000 – 10,000</td>
                                  </tr>
                                  <tr>
                                    <td>Flexi Desk (Hot Desk)</td>
                                    <td>5,000 – 12,000/year</td>
                                  </tr>
                                  <tr>
                                    <td>Shared Office (Optional Upgrade)</td>
                                    <td>12,000 – 25,000/year</td>
                                  </tr>
                                  <tr>
                                    <td>E-channel Registration</td>
                                    <td>2,000 – 3,000</td>
                                  </tr>
                                  <tr>
                                    <td>Free Zone Visa (Investor)</td>
                                    <td>3,500 – 5,000 per visa</td>
                                  </tr>
                                  <tr>
                                    <td>Document Processing & PRO Charges</td>
                                    <td>1,000 – 2,500</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <p><em>Cost depends on the Free Zone selected. DMCC, Dubai South, and IFZA have different pricing tiers based on business activity.</em></p>
                            <h3 className="font-semibold text-base">Offshore Company Setup Cost Breakdown</h3>
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Component</th>
                                    <th>Estimated Cost (AED)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Company Registration (RAK, JAFZA, etc.)</td>
                                    <td>6,000 – 10,000</td>
                                  </tr>
                                  <tr>
                                    <td>Agent/Consultant Fees</td>
                                    <td>2,000 – 3,000</td>
                                  </tr>
                                  <tr>
                                    <td>Registered Address</td>
                                    <td>1,500 – 2,500/year</td>
                                  </tr>
                                  <tr>
                                    <td>Document Preparation & Attestation</td>
                                    <td>1,000 – 2,000</td>
                                  </tr>
                                  <tr>
                                    <td>Bank Account Assistance (optional)</td>
                                    <td>2,000 – 4,000</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <p><em>Offshore companies cannot trade within the UAE and are mainly for international holdings, IP rights, and asset management.</em></p>

                            <h3 className="font-semibold text-base">Additional Costs (Applicable to All Setups)</h3>
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Service</th>
                                    <th>Estimated Cost (AED)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Residency Visa (per person)</td>
                                    <td>3,500 – 6,000</td>
                                  </tr>
                                  <tr>
                                    <td>Emirates ID, Medical Test & Visa Stamping</td>
                                    <td>1,000 – 1,500</td>
                                  </tr>
                                  <tr>
                                    <td>Bank Account Opening Assistance</td>
                                    <td>2,000 – 3,000</td>
                                  </tr>
                                  <tr>
                                    <td>Annual License Renewal</td>
                                    <td>7,000 – 15,000</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <h3 className="font-semibold text-base">Partner with UBIXO for a Seamless Business Setup</h3>
                            <p>UBIXO offers expert guidance, fixed-cost local sponsorship, and full legal support to help you launch confidently in Dubai. We handle:</p>
                            <ul>
                              <li>Legal structuring</li>
                              <li>Business license application</li>
                              <li>Document clearing</li>
                              <li>Corporate banking</li>
                              <li>Visas and office space</li>
                            </ul>
                            <h3 className="font-semibold text-base">Ready to Set Up Your Business in Dubai?<br /></h3>
                            <p>
                            Starting a business in Dubai might seem like a complex journey, but with the right support, the entire process can be completed in just a few weeks. Whether you're planning to launch a tech startup, a trading company, or an import-export business, Dubai offers everything you need—world-class infrastructure, investor-friendly policies, and a strategic gateway to global markets.<br /><br />
                            Our experienced team will assist you through each step—from choosing the right business activity and preparing documents, to handling government approvals, opening a corporate bank account, and securing visas. We ensure a smooth, transparent, and compliant setup experience.<br />
                          </p>
                          <p className="mb-0">
                          📞 <a href="#contact" className="underline text-blue-600">
                            Contact Us
                          </a> today to turn your business idea into a reality in Dubai.{" "}
                        </p>
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </section>
            </>
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer9 />
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
