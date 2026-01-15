"use client";

import Image from "next/image";
import React from "react";

export default function MobileMenu() {
  return (
    <div
      className="offcanvas offcanvas-start mobile-nav-wrap"
      id="canvasMobile"
      style={{
        background: "#3a3f46",
        color: "#fff",
      }}
    >
      <div className="inner-mobile-nav" style={{ padding: "18px 16px" }}>
        {/* Header Row */}
        <div
          className="top-header-mobi"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "12px",
            marginBottom: "18px",
          }}
        >
          {/* Logo */}
          <div className="logo-mobile" style={{ marginTop: "2px" }}>
            <a href="/tbi-mri-clinical" style={{ display: "inline-block" }}>
              <Image
                alt="MINDSET"
                src="/image/logo/logo.png"
                width={220}
                height={60}
                priority
                style={{ height: "auto", width: "220px" }}
              />
            </a>
          </div>

          {/* Close Button */}
          <button
            className="mobile-nav-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              marginTop: "6px",
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 122.878 122.88"
              style={{ fill: "#fff" }}
            >
              <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313z" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <nav className="mobile-main-nav">
          {/* Brand block */}
          <div style={{ marginBottom: "18px" }}>
            <h6
              className="title-contact-mobile"
              style={{ margin: "0 0 10px", color: "#fff", fontWeight: 700 }}
            >
              MINDSET Integrated
            </h6>

            <p
              style={{
                margin: 0,
                color: "#fff",
                lineHeight: 1.55,
                opacity: 0.95,
              }}
            >
              MINDSET® Integrated applies science-based analysis and expert guidance to aid in the
              objective understanding of brain health.
            </p>
          </div>

          {/* Contact block */}
          <div>
            <h6
              className="title-contact-mobile"
              style={{ margin: "0 0 12px", color: "#fff", fontWeight: 700 }}
            >
              Contact Us
            </h6>

            <div className="content-contact-moblile" style={{ marginBottom: "10px" }}>
              <a
                href="https://maps.google.com/?q=800+Lomas+Blvd+NW+Suite+100+Albuquerque+NM+87102"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fff", textDecoration: "none", display: "block" }}
              >
                <i className="icon-MapPin" style={{ marginRight: "8px" }} />
                Address: 800 Lomas Blvd NW, Suite 100, Albuquerque, NM 87102
              </a>
            </div>

            <div className="content-contact-moblile" style={{ marginBottom: "10px" }}>
              <a
                href="mailto:info@mindsetintegrated.com"
                style={{ color: "#fff", textDecoration: "none", display: "block" }}
              >
                <i className="icon-Envelope" style={{ marginRight: "8px" }} />
                Email: info@mindsetintegrated.com
              </a>
            </div>

            <div className="content-contact-moblile">
              <a
                href="tel:+15055009711"
                style={{ color: "#fff", textDecoration: "none", display: "block" }}
              >
                <i className="icon-PhoneCall" style={{ marginRight: "8px" }} />
                Call: +1 (505) 500-9711
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
