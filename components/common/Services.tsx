import Link from "next/link";
import React from "react";
import { servicesData } from "@/data/services";

export default function Services() {
  return (
    <section
      className="section-services h-1 tf-spacing-31 bg-surface section-one-page"
      id="services"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section style-2">
              <div className="left">
                <div className="text-anime-wave">
                  <div className="tag label text-btn-uppercase bg-white">
                    Clinical Solutions
                  </div>
                </div>
                <h3 className="title-section text-anime-wave">
                  Precision Diagnostics for <br /> Traumatic Brain Injury
                </h3>
              </div>
              <div className="text-anime-wave-2">
                <Link
                  href="/free-information-kit"
                  className="tf-btn style-1 bg-on-suface-container"
                >
                  <span> FREE Information Package </span>
                </Link>
              </div>
            </div>

            <div className="section-services-content">
              <div className="flat-animate-tab">
                <div className="wg-tab">
                  <ul className="tab-product min-w-757" role="tablist">
                    {servicesData.map(({ id, title, isActive }) => (
                      <li className="nav-tab-item" role="presentation" key={id}>
                        <h5>
                          <a
                            href={`#${id}`}
                            data-bs-toggle="tab"
                            role="tab"
                            className={isActive ? "active" : ""}
                          >
                            {title}
                          </a>
                        </h5>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tab-content">
                  {servicesData.map(
                    ({
                      id,
                      videoSrc, // Changed from imgSrc
                      title,
                      description,
                      benefits,
                      linkText,
                      isActive,
                    }) => (
                      <div
                        key={id}
                        className={`tab-pane${isActive ? " active show" : ""}`}
                        id={id}
                        role="tabpanel"
                      >
                        <div className="section-services-item">
                          {/* VIDEO SECTION */}
                          <div className="image tf-animate-1" style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px' }}>
                            <video
                              key={videoSrc} // Forces reload when tab changes
                              autoPlay
                              muted
                              loop
                              playsInline
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            >
                              <source src={videoSrc} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>

                          <div className="services-content">
                            <div className="heading">
                              <h3>
                                <Link
                                  href="/free-information-kit"
                                  className="name-services wow fadeInUp"
                                >
                                  {title}
                                </Link>
                              </h3>
                              <div className="sub-name body-2 wow fadeInUp">
                                {description}
                              </div>
                            </div>
                            <div className="benefit-lists">
                              {benefits.map((benefit, i) => (
                                <div className="benefit-items" key={i}>
                                  <div className="icon wow fadeInUp">
                                    <i className="icon-checkbox" />
                                  </div>
                                  <div
                                    className="title wow fadeInUp"
                                    data-wow-delay=".1s"
                                  >
                                    {benefit}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <Link
                              href="/free-information-kit"
                              className="tf-btn style-1 bg-on-suface-container wow fadeInUp"
                            >
                              <span>{linkText}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}