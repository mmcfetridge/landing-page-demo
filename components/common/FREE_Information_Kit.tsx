"use client";
import React from "react";
import HubSpotForm from "./HubSpotForm";

export default function KIT() {
  return (
    <section id="kit" className="kit-section">
      <div className="kit-container">
        <div className="kit-grid">
          {/* LEFT COLUMN */}
          <div className="kit-left">
            <div className="kit-tag">Clinical Resource</div>

            <h1 className="kit-title kit-offwhite">
              Request Your FREE <br /> Information Package
            </h1>

            <p className="kit-subtitle">
              Receive our comprehensive information package, including sample DTI/FA Analysis reports:
              QLuminate and Quantify, ROI calculator, physician referral templates and much more.
            </p>

            <div className="kit-benefits">
              <div className="kit-benefit">
                <span className="kit-check">✓</span>
                <span>Sample Reports</span>
              </div>
              <div className="kit-benefit">
                <span className="kit-check">✓</span>
                <span>CPT Coding &amp; Reimbursement Guide</span>
              </div>
              <div className="kit-benefit">
                <span className="kit-check">✓</span>
                <span>Physician Marketing Materials</span>
              </div>
              <div className="kit-benefit">
                <span className="kit-check">✓</span>
                <span>Implementation Strategy</span>
              </div>
            </div>

            <div className="kit-callout">
              <div className="kit-callout-icon">📞</div>
              <div className="kit-callout-text">
                <div className="kit-callout-label">Speak with an Expert</div>
                <div className="kit-callout-phone">505-249-7058</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="kit-right">
            <div className="kit-card">
              <div className="kit-card-head">
                <div className="kit-card-title">Send My Marketing Package</div>
                <div className="kit-card-subtitle">
                  Fill this out and we’ll email confirmation right away. Prefer to talk? Call{" "}
                  <span className="kit-card-phone">505-249-7058</span>.
                </div>
              </div>
              <div className="kit-hs-wrap">
                <HubSpotForm
                  className="hs-theme-light"
                  portalId="244865646"
                  formId="6997d485-6249-46f2-9c7c-c431d283bdcf"
                  region="na2"
                />
              </div>
              {/* HubSpot embed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}