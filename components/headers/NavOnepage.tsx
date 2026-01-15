"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { homeItems, navItemsDefaults } from "@/data/menu";
import { MenuLink } from "@/types/menuLink";

type NavItem = { href: string; label: string };

export default function NavOnepage({
  navItems = navItemsDefaults,
  activeClass = "current-menu",
}: {
  navItems?: NavItem[];
  activeClass?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // ✅ IMPORTANT: set to your *actual* landing page route
  // Examples: "/", "/home-LTR", "/tbi-mri-clinical"
  const HOME_PATH = "/tbi-mri-clinical";

  const isOnHome = pathname === HOME_PATH;

  // Normalize menu hrefs so both "#about" and "/#about" work
  const normalizedItems = useMemo(() => {
    return (navItems || []).map((item) => {
      const href = item.href || "";
      const hashIndex = href.indexOf("#");
      const hash =
        hashIndex >= 0 ? `#${href.substring(hashIndex + 1)}` : null;

      // If it has a hash, we will either use "#hash" (on home)
      // or "/home#hash" (off home) so links work everywhere.
      const effectiveHref =
        hash && !isOnHome ? `${HOME_PATH}${hash}` : hash || href;

      return {
        ...item,
        _hash: hash, // "#about" or null
        _effectiveHref: effectiveHref,
      };
    });
  }, [navItems, HOME_PATH, isOnHome]);

  const firstHash = normalizedItems.find((x) => x._hash)?. _hash;
  const [activeSection, setActiveSection] = useState(
    firstHash ? firstHash.replace("#", "") : ""
  );

  // Keep activeSection sane if navItems change
  useEffect(() => {
    const nextFirstHash = normalizedItems.find((x) => x._hash)?._hash;
    if (nextFirstHash) setActiveSection(nextFirstHash.replace("#", ""));
  }, [normalizedItems]);

  useEffect(() => {
    // ✅ Only observe sections on the landing page
    if (!isOnHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px" }
    );

    const t = setTimeout(() => {
      normalizedItems.forEach((item) => {
        if (!item._hash) return;
        const el = document.querySelector(item._hash);
        if (el) observer.observe(el);
      });
    });

    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, [normalizedItems, isOnHome]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    hash: string | null
  ) => {
    // Only intercept hash links
    if (!hash) return;

    // If not on home, route to home + hash
    if (!isOnHome) {
      e.preventDefault();
      router.push(`${HOME_PATH}${hash}`);
      return;
    }

    // On home => smooth scroll
    e.preventDefault();
    const element = document.querySelector(hash);

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      const offsetPosition = elementPosition - 103.99;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      window.history.pushState(null, "", hash);

      // Helps active state update instantly on click
      setActiveSection(hash.replace("#", ""));
    }
  };

  const isMenuActive = (link: MenuLink) => {
    const currentPath = pathname?.split("/")[1] || "";
    const hrefPath = link.href?.split("/")[1] || "";
    const onePagePath = link.onePage?.split("/")[1] || "";
    return hrefPath === currentPath || onePagePath === currentPath;
  };

  return (
    <>
      <li className="menu-item menu-item-has-children">
        <div className="sub-menu-home">
          <ul>
            {homeItems.map((item, index) => (
              <li
                key={index}
                className={`item${isMenuActive(item) ? " current-item-home" : ""}`}
              >
                <div>
                  <div className="image">
                    <Link className="img-home" href={item.href}>
                      <Image
                        src={item.img}
                        className="lazyload"
                        alt={item.title}
                        width={415}
                        height={342}
                      />
                    </Link>
                    <div className="list-btn">
                      <Link className="page-btn" href={item.onePage}>
                        One Page
                      </Link>
                      <Link className="page-btn" href={item.multiPage}>
                        Multi page
                      </Link>
                    </div>
                  </div>
                  <h6 className="name-home">{item.title}</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </li>

      {normalizedItems.map((item, index) => (
        <li
          key={index}
          className={`menu-item inner-link ${
            item._hash && isOnHome && activeSection === item._hash.replace("#", "")
              ? activeClass
              : ""
          }`}
        >
          <a
            href={item._effectiveHref}
            onClick={(e) => handleClick(e, item._hash)}
            className="item-link"
          >
            {item.label}
          </a>
        </li>
      ))}
    </>
  );
}
