"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import NavOnepage from "./NavOnepage";

export default function Header1({ onepage = false }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (    
      <header
        className={`header style-1 style-absolute header-fixed ${
          isFixed ? "is-fixed" : ""
        } `}
        id="header"
      >
      <div className="tf-container w-1870">
        <div className="row">
          <div className="col-12">
            <div className="header-content">
              <div className="header-left">
                <div className="logo">
                  <Link href="/tbi-mri-clinical">
                    <Image 
                      alt="MINDSET" 
                      src="/image/logo/logo.png" 
                      width={414} 
                      height={56} 
                      priority 
                    />
                  </Link>
                </div>
                <nav className="main-menu">
                  <ul
                    className={` menu-primary-menu ${
                      onepage ? "navigation" : ""
                    } `}
                  >
                    {onepage ? <NavOnepage /> : <Nav />}
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <div className="nav-btn">
                  <Link
                    href={`/free-information-kit`}
                    className="tf-btn bg-white style-1 hover-bg-primary"
                  >
                    <span>FREE Information Package</span>
                  </Link>
                </div>
                <div className="nav-icon">

                  <div className="canvas-btn">
                    <a href="#canvnasMegamenu" data-bs-toggle="offcanvas">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 6H20.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 12H16"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 18L17.9647 18"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="mobile-button">
                    <a href="#canvasMobile" data-bs-toggle="offcanvas">
                      <span />
                      <span />
                      <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}