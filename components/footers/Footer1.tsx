"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Footer1({ parentClass = "footer" }: { parentClass?: string }) {
  // ✅ Set this to your actual one-page landing route
  const HOME_PATH = "/tbi-mri-clinical";

  useEffect(() => {
    const headings = document.querySelectorAll(".title-mobile");

    const toggleOpen = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const parent = target.closest(".footer-col-block") as HTMLElement | null;
      if (!parent) return;

      const content = parent.querySelector(".tf-collapse-content") as HTMLElement | null;
      if (!content) return;

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => heading.addEventListener("click", toggleOpen));
    return () => headings.forEach((heading) => heading.removeEventListener("click", toggleOpen));
  }, []);

  return (
    <footer className={parentClass} id="footer">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top">
              <div className="footer-left">
                <div className="logo-footer">
                  <Link href={HOME_PATH} className="logo">
                    <Image
                      alt="Mindset Integrated Logo"
                      src="/image/logo/logo.png"
                      width={400}
                      height={100}
                    />
                  </Link>
                </div>

                <div className="text caption-1">
                  MINDSET® Integrated applies science-based analysis
                  <br />
                  and expert guidance to aid in the objective
                  <br />
                  understanding of brain health.
                </div>

                <div className="contact-footer">
                  <div className="address contact-top contact-footer-content">
                    <p className="caption-2">Our Headquarters</p>
                    <a href="https://maps.app.goo.gl/..." target="_blank" rel="noopener noreferrer">
                      800 Lomas Blvd NW Suite 100, Albuquerque, NM 87102
                    </a>
                  </div>

                  <div className="contact-bottom">
                    <div className="contact-footer-content">
                      <p className="caption-2">Phone Support</p>
                      <a href="tel:505-249-7058">505-249-7058</a>
                    </div>

                    <div className="contact-footer-content">
                      <p className="caption-2">Email Inquiry</p>
                      <a href="mailto:info@mindsetintegrated.com">info@mindsetintegrated.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-center">
                {/* Solutions */}
                <div className="footer-content our-services footer-col-block">
                  <div className="title-mobile label text-btn-uppercase">
                    Solutions
                    <i className="icon-arrow-51" />
                  </div>

                  <div className="tf-collapse-content">
                    <ul>
                      <li className="support-item-footer caption-1">
                        <Link href={`${HOME_PATH}#services`}>QLuminate</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`${HOME_PATH}#services`}>Quantify™</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`${HOME_PATH}#services`}>DTI &amp; White Matter Integrity</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`${HOME_PATH}#services`}>Clinical Volumetrics</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="footer-content our-services footer-col-block">
                  <div className="title-mobile label text-btn-uppercase">
                    Quick Links
                    <i className="icon-arrow-51" />
                  </div>

                  <div className="tf-collapse-content">
                    <ul>
                      <li className="support-item-footer caption-1">
                        <Link href={`${HOME_PATH}#about`}>About Us</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`${HOME_PATH}#project`}>Case Studies</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`${HOME_PATH}#testimonials`}>Testimonials</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`${HOME_PATH}#faqs`}>FAQs</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href="/free-information-kit">Information Kit</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-right">
                <div className="footer-subscribe">
                  <div className="label text-btn-uppercase">STAY INFORMED</div>
                  <div className="text caption-2">
                    Subscribe to receive the latest updates in brain
                    <br />
                    imaging science and legal admissibility.
                  </div>
                </div>

                <div className="footer-social">
                  <div className="title-footer">Follow Us:</div>
                  <ul className="tf-social">
                    <li className="item">
                      <a
                        href="https://www.linkedin.com/company/mindset-integrated-co/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          className="icon"
                          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                        >
                          <svg
                            className="e-font-icon-svg e-fab-linkedin"
                            viewBox="0 0 448 512"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ width: "25px", height: "auto", fill: "white" }}
                          >
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                          </svg>
                        </div>
                      </a>
                    </li>

                    <li className="item">
                      <a
                        href="https://www.facebook.com/mindsetintegrated/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          className="icon"
                          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                        >
                          <svg
                            className="e-font-icon-svg e-fab-facebook"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ width: "25px", height: "auto", fill: "white" }}
                          >
                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.75l-11 71.69h-57.75V501C413.31 482.38 504 379.78 504 256z" />
                          </svg>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-inner">
                <div className="left">
                  <div className="text caption-1">
                    ©2026 MINDSET Integrated Co. All Rights Reserved.
                  </div>
                </div>

                <div className="right">
                  <ul>
                    <li>
                      <Link href="/terms" className="caption-1">
                        Terms Of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="caption-1">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
