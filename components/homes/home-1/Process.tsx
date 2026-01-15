import Link from "next/link";
import React from "react";
// Optional: import { Scan, CloudUpload, BrainCircuit, Activity } from "lucide-react";

export default function Process() {
  return (
    <section
      className="section-process h-1 tf-spacing-2 hover-active-step section-one-page"
      id="process"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section style-2 mb-40">
              <div className="left">
                <div className="text-anime-wave">
                  <a href="#" className="tag label text-btn-uppercase">
                    Clinical Workflow
                  </a>
                </div>
                <h3 className="title-section text-anime-wave">
                  Seamless Diagnostic Integration
                </h3>
              </div>
              <div className="text-anime-wave-2">
                <Link
                  href={`/free-information-kit`}
                  className="tf-btn style-1 bg-on-suface-container"
                >
                  <span> <b>FREE Information Package</b> </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row rg-30">
          {/* Step 1: MRI/DTI Scan */}
          <div className="col-lg-3 col-sm-6">
            <div className="process-item step-hover">
              <div className="process-top wow fadeInUp">
                <div className="icon">
                  {/* Using a Hospital/Scan Style Icon */}
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9V5a2 2 0 0 1 2-2h4"/><path d="M2 15v4a2 2 0 0 0 2 2h4"/><path d="M16 3h4a2 2 0 0 1 2 2v4"/><path d="M16 21h4a2 2 0 0 0 2-2v4"/><path d="M7 12h10"/><path d="M12 7v10"/></svg>
                  {/* Alternative: <i className="fas fa-microscope"></i> */}
                </div>
                <span className="label text-btn-uppercase wow fadeInUp">
                  Step 1
                </span>
              </div>
              <div className="process-content">
                <h5 className="wow fadeInUp">
                  <a href="#" className="name-process">
                    Advanced Acquisition
                  </a>
                </h5>
                <div className="desc wow fadeInUp">
                  Perform standard 1.5T or 3T MRI with our optimized DTI and Volumetric sequences.
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: DICOM Upload */}
          <div className="col-lg-3 col-sm-6">
            <div className="process-item step-hover">
              <div className="process-top wow fadeInUp" data-wow-delay=".1s">
                <div className="icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
                  {/* Alternative: <i className="fas fa-cloud-upload-alt"></i> */}
                </div>
                <span className="label text-btn-uppercase wow fadeInUp" data-wow-delay=".1s">
                  Step 2
                </span>
              </div>
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".1s">
                  <a href="#" className="name-process">
                    Automated Transfer
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".1s">
                  DICOM data is securely routed to our HIPAA-compliant Quantify™ cloud pipeline.
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Analysis */}
          <div className="col-lg-3 col-sm-6">
            <div className="process-item step-hover">
              <div className="process-top wow fadeInUp" data-wow-delay=".2s">
                <div className="icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.241 3 3 0 1 0 5.997-.125 4 4 0 0 0 2.526-5.77 4 4 0 0 0-.52-8.241Z"/><path d="M9 13h.01"/><path d="M15 13h.01"/><path d="M12 17h.01"/></svg>
                  {/* Alternative: <i className="fas fa-brain"></i> */}
                </div>
                <span className="label text-btn-uppercase wow fadeInUp" data-wow-delay=".2s">
                  Step 3
                </span>
              </div>
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".2s">
                  <a href="#" className="name-process">
                    AI-Driven Analysis
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".2s">
                  Automated segmentation and normative comparisons are processed within minutes.
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: PACS Overlay */}
          <div className="col-lg-3 col-sm-6">
            <div className="process-item step-hover">
              <div className="process-top wow fadeInUp" data-wow-delay=".3s">
                <div className="icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                  {/* Alternative: <i className="fas fa-file-medical-alt"></i> */}
                </div>
                <span className="label text-btn-uppercase wow fadeInUp" data-wow-delay=".3s">
                  Step 4
                </span>
              </div>
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".3s">
                  <a href="#" className="name-process">
                    PACS Integration
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".3s">
                  Objective color-coded overlays and PDF reports are pushed directly back into your PACS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}