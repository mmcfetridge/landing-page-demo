import React from "react";

export default function Benefits() {
  return (
    <section
      className="section-benefit h-1 tf-spacing-3 section-one-page"
      id="benefit"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="box-icon-list">
              {/* Box 1: Objective Data */}
              <div className="box-icon">
                <div className="icon wow fadeInUp" data-wow-delay=".1s">
                  <i className="icon-investment" />
                </div>
                <div className="box-content">
                  <h5 className="wow fadeInUp">
                    <a href="#" className="title-box">
                      Objective Evidence
                    </a>
                  </h5>
                  <div className="sub-title wow fadeInUp">
                    Move beyond subjective interpretations with FDA-cleared, 
                    quantitative data that provides a clear "Source of Truth" for brain scans.
                  </div>
                </div>
              </div>

              {/* Box 2: Revenue Growth */}
              <div className="box-icon">
                <div className="icon wow fadeInUp">
                  <i className="icon-tailored" /> 
                </div>
                <div className="box-content">
                  <h5 className="wow fadeInUp" data-wow-delay=".1s">
                    <a href="#" className="title-box">
                      Enhanced Revenue
                    </a>
                  </h5>
                  <div className="sub-title wow fadeInUp" data-wow-delay=".1s">
                    Capture significant technical and professional fees by 
                    integrating advanced qMRI analysis into your existing imaging workflow.
                  </div>
                </div>
              </div>

              {/* Box 3: Clinical Certainty */}
              <div className="box-icon">
                <div className="icon wow fadeInUp" data-wow-delay=".2s">
                  <i className="icon-financial" />
                </div>
                <div className="box-content">
                  <h5 className="wow fadeInUp" data-wow-delay=".2s">
                      Clinical Certainty
                  </h5>
                  <div className="sub-title wow fadeInUp" data-wow-delay=".2s">
                    Empower physicians with precise longitudinal tracking and 
                    normative comparisons to improve patient management and outcomes.
                  </div>
                </div>
              </div>

              {/* Box 4: Seamless Integration */}
              <div className="box-icon">
                <div className="icon wow fadeInUp" data-wow-delay=".3s">
                  <i className="icon-tax" />
                </div>
                <div className="box-content">
                  <h5 className="wow fadeInUp" data-wow-delay=".3s">
                    <a href="#" className="title-box">
                      Seamless Workflow
                    </a>
                  </h5>
                  <div className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    Our fully-automated Quantify™ pipeline integrates directly 
                    with your PACS, requiring zero additional hardware or manual labor.
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