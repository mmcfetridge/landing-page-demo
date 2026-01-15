"use client";

import React from "react";
import Image from "next/image";
import { partners } from "@/data/partners";

export default function Partners() {
  return (
    <section className="section-partners py-80 bg-dark-clinical" id="partners">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-60">
              <div className="text-anime-wave">
                <span className="tag label text-btn-uppercase color-white mb-60">
                  
                </span>
              </div>
              <h3 className="title-section color-white text-anime-wave">
                Strategic Clinical Partners
              </h3>
              <p className="sub-title body-2 color-white opacity-70 text-anime-wave">
                Integrating with leading imaging centers and research institutions 
                to standardize objective brain health analysis.
              </p>
            </div>
          </div>
        </div>
        
        <div className="logos-slider-container">
          <div className="logos-marquee mb-50">
            {/* Double the array for seamless infinite looping */}
            {[...partners, ...partners].map((partner, index) => (
              <div className="logo-slide" key={`${partner.id}-${index}`}>
                <div className="logo-card">
                  <Image
                    src={partner.imgSrc}
                    alt={partner.name}
                    width={220}
                    height={90}
                    className="partner-logo-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-dark-clinical {
          background-color: #1a1a1a;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .logos-slider-container {
          overflow: hidden;
          padding: 40px 0;
          position: relative;
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 15%,
            rgba(0, 0, 0, 1) 85%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .logos-marquee {
          display: flex;
          width: max-content;
          gap: 80px;
          animation: marquee-scroll 40s linear infinite;
        }

        .logo-slide {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-card {
          padding: 10px;
          transition: transform 0.3s ease, filter 0.3s ease;
          filter: brightness(0.9) contrast(1.1);
        }

        .logo-card:hover {
          transform: scale(1.05);
          filter: brightness(1.2) contrast(1);
        }

        .partner-logo-img {
          object-fit: contain;
          max-height: 70px;
          width: auto;
        }

        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .logos-marquee { gap: 40px; }
          .partner-logo-img { max-height: 50px; }
        }
      `}</style>
    </section>
  );
}
