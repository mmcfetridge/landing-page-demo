"use client";
import React from "react";
import Link from "next/link";

const clinicalServices = [
  {
    title: "QLuminate™ Volumetrics",
    description: "Automated brain volume quantification compared against normative databases. Essential for detecting early-stage atrophy.",
    price: "$250 per report",
    icon: "icon-analysis", // Ensure this icon exists in your icomoon or font-awesome set
  },
  {
    title: "DTI White Matter Metrics",
    description: "Quantitative Diffusion Tensor Imaging (DTI) to identify traumatic axonal injury not visible on standard MRI reads.",
    price: "Included in standard clinical suite",
    icon: "icon-brain-check",
  },
  {
    title: "48-Hour Turnaround",
    description: "Rapid processing of DICOM data with results delivered directly to your PACS or secure portal within 2 business days.",
    price: "Guaranteed Delivery",
    icon: "icon-clock",
  },
  {
    title: "Scanner Harmonization",
    description: "Our AI accounts for variations between 1.5T and 3.0T scanners, ensuring longitudinal consistency for every patient.",
    price: "Standard Protocol",
    icon: "icon-settings",
  }
];

export default function ServicesClinical() {
  return (
    <section className="tf-section services-section bg-light" id="clinical-services">
      <div className="tf-container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="title">Clinical TBR MRI Reporting Solutions</h2>
            <p className="sub-title">Objective, automated data to supplement your visual diagnostic reads.</p>
          </div>
          {clinicalServices.map((service, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="service-box style-2 text-center p-4 bg-white shadow-sm">
                <div className="icon-wrapper mb-3">
                  <i className={service.icon} style={{ fontSize: '40px', color: '#0056b3' }} />
                </div>
                <h4>{service.title}</h4>
                <p className="text-muted">{service.description}</p>
                <div className="price-tag mt-3" style={{ fontWeight: 'bold', color: '#28a745' }}>
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <Link href="#contact" className="tf-btn style-1 bg-primary text-white">
              <span>Setup Your PACS Integration</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}