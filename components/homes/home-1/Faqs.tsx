import Link from "next/link";
import React from "react";

export default function Faqs() {
  return (
    <section
      className="section-faqs h-1 tf-spacing-2 section-one-page"
      id="faqs"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="section-faqs-inner">
              <div className="left">
                <div className="heading-section">
                  <div className="text-anime-wave">
                    <a
                      href="#"
                      className="tag label text-btn-uppercase bg-white"
                    >
                      Technical & Clinical FAQs
                    </a>
                  </div>
                  <h3 className="title-section mb-12 text-anime-wave">
                    Frequently Asked Questions
                  </h3>
                  <div className="sub-title body-2 text-anime-wave mb-40">
                    Find technical specifications and clinical answers regarding 
                    Quantify™ integration, HIPAA compliance, and DTI normative 
                    data analysis.
                  </div>
                  <div className="text-anime-wave">
                    <Link
                      href={`/free-information-kit`}
                      className="tf-btn style-1 bg-on-suface-container"
                    >
                      <span> <b>FREE Information Package</b> </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="wg-according" id="According">
                  {/* FAQ 1 */}
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-1"
                        data-bs-toggle="collapse"
                        className="title-according show"
                      >
                        Is the Quantify™ platform HIPAA compliant? <span />
                      </a>
                    </h5>
                    <div
                      id="according-1"
                      className="collapse show"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Yes. All data is encrypted in transit and at rest using AES-256 
                          encryption. We sign Business Associate Agreements (BAA) with all 
                          clinical partners to ensure full HIPAA and HITECH compliance 
                          for PHI handling.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-2"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        How does it integrate with our existing PACS?
                        <span />
                      </a>
                    </h5>
                    <div
                      id="according-2"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Our system uses a zero-footprint DICOM listener. Once a scan is 
                          completed, it is routed to our cloud, processed, and the resulting 
                          color-coded overlays and PDF reports are pushed directly back into 
                          your PACS as a new series.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-3"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        What MRI magnet strength is required?
                        <span />
                      </a>
                    </h5>
                    <div
                      id="according-3"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Quantify™ is optimized for both 1.5T and 3T magnets. While 3T provides 
                          superior signal-to-noise ratios for DTI, our algorithms include 
                          cross-scanner calibration to ensure consistent results across 
                          different field strengths and manufacturers.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-4"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        Where does the normative data come from?
                        <span />
                      </a>
                    </h5>
                    <div
                      id="according-4"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Our database consists of over 1,000+ age and gender-matched 
                          healthy controls. This allows us to provide Z-scores and 
                          percentile rankings that help clinicians distinguish between 
                          normal aging and traumatic microstructural changes.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-5"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        What is the average turnaround time for a report? <span />
                      </a>
                    </h5>
                    <div
                      id="according-5"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Automated reports are typically delivered back to your PACS within 
                          48 hours of the upload completing, allowing for 
                          rapid diagnostic turnaround during a patient's clinical visit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}