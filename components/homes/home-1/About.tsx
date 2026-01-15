"use client";
import Link from "next/link";
import React from "react";
import OdometerComponent from "@/components/common/OdometerComponent";

export default function About() {
  return (
    <section
      className="section-about h-1 tf-spacing-2 section-one-page"
      id="about"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="heading-section about-content-left">
              <div className="text-anime-wave">
                <div className="tag label text-btn-uppercase">
                  Bridging Science and Solutions
                </div>
              </div>
              <h3 className="text-color-change mb-40">
                We translate complex brain science into <br />
                credible, data-driven assessments. <br />
                Our mission is to provide clinicians <br />
                with the objective results they need to move forward with absolute confidence.
              </h3>
              <Link
                href={`/free-information-kit`}
                className="tf-btn style-1 bg-on-suface-container"
              >
                <span> FREE Information Package </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-content-right">
              <div className="counter-item">
                <div className="counter">
                  <div className="number-counter mb--3">
                    <h2 className="number odometer color-primary mb-2">
                      <OdometerComponent max={12} />
                    </h2>
                    <h2 className="plus color-primary">+</h2>
                  </div>
                  <p className="text text-btn-uppercase label">
                    Years of Innovation in Neuroimaging
                  </p>
                </div>
              </div>
              <div className="flat-animate-tab">
                <div className="wg-tab style-small">
                  <ul className="tab-product min-w-366" role="tablist">
                    <li className="nav-tab-item" role="presentation">
                      <h6>
                        <a
                          href="#expertise"
                          data-bs-toggle="tab"
                          role="tab"
                          className="active"
                        >
                          Science
                        </a>
                      </h6>
                    </li>
                    <li className="nav-tab-item" role="presentation">
                      <h6>
                        <a href="#innovation" data-bs-toggle="tab" role="tab">
                          Analysis
                        </a>
                      </h6>
                    </li>
                    <li className="nav-tab-item" role="presentation">
                      <h6>
                        <a href="#commitment" data-bs-toggle="tab" role="tab">
                          Support
                        </a>
                      </h6>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane active show"
                    id="expertise"
                    role="tabpanel"
                  >
                    <p className="text">
                      Born from the Mind Research Network in 2012, we utilize 
                      only the most rigorous, evidence-based neuroimaging 
                      methodologies available today.
                    </p>
                  </div>
                  <div className="tab-pane" id="innovation" role="tabpanel">
                    <p className="text">
                      Our proprietary Quantify™ pipeline delivers fully-automated 
                      qMRI analysis directly to radiologists, turning raw data into 
                      actionable clinical insights.
                    </p>
                  </div>
                  <div className="tab-pane" id="commitment" role="tabpanel">
                    <p className="text">
                      We go beyond the report, providing educational support and 
                      consultation to help you navigate brain science.
                    </p>
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