import Link from "next/link";
import Image from "next/image";
import React from "react";
import { blogThumbnails } from "@/data/blogs";

export default function SideOffcanvas() {
  return (
    <div
      className="offcanvas offcanvas-end offcanvasMegamenu"
      id="canvnasMegamenu"
    >
      <div className="heading">
        <button
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="meag-menu-item">
        <h4 className="title-content fw-7">MINDSET Integrated</h4>
        <p>
            MINDSET® Integrated applies science-based analysis and expert guidance to aid in the objective understanding 
            of brain health.
        </p>
      </div>
      <div className="contact-mega-menu meag-menu-item">
        <h4 className="title-content fw-7">Contact Us</h4>
        <ul className="contact-list-mega-menu">
          <li>
            <p>
              Address:
              <a href="#" target="_blank">
                800 Lomas Blvd NW Suite 100<br/>
                Albuquerque, NM 87102
              </a>
            </p>
          </li>
          <li>
            <p>
              Email:
              <a href="mailto:info@mindsetintegrated.com"> info@mindsetintegrated.com </a>
            </p>
          </li>
          <li>
            <p>
              Call: <a href="tel:+15055009711"> +1 (505) 500.9711</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
