"use client";

import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJoomla } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = headerRef.current;
    if (!element) return;

    let prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        element.style.top = "0";
      } else {
        element.style.top = "-96px";
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="h-24 select-none bg-[var(--base-bg)] w-full backdrop-blur-md text-white fixed transition-all duration-400 ease shadow-[0_0_1px_var(--lightest-slate)] z-10 px-2 lg:px-6 md:px-12"
      ref={headerRef}
    >
      <div className="max-w-full mx-auto h-24 flex items-center justify-between lg:w-[89rem]">
        <Link href="/" className="text-[var(--base-color)] text-4xl">
          <FontAwesomeIcon icon={faJoomla} />
        </Link>
        <div className="text-[var(--lightest-slate)] text-sm sm:text-base">
          <div className="flex text-sm items-center gap-x-3">
            <a
              href="#about"
              className="px-2 font-normal transition-all duration-200 hover:text-[var(--base-color)] text-sm"
            >
              About
            </a>
            <a
              href="#worked"
              className="px-2 font-normal transition-all duration-200 hover:text-[var(--base-color)] text-sm"
            >
              Experience
            </a>
            <a
              href="#my-project"
              className="px-2 font-normal transition-all duration-200 hover:text-[var(--base-color)] text-sm"
            >
              Work
            </a>
            <a
              href="#get-in-touch"
              className="px-2 font-normal transition-all duration-200 hover:text-[var(--base-color)] text-sm"
            >
              Contact
            </a>
            <a
              href="/cv/CV_Nguyen_Van_Thang_Fullstack_Developer.pdf"
              className="font-normal rounded-sm px-3 py-2 border-solid border-[var(--base-color)] border-2 transition-all duration-200 text-[var(--base-color)] hover:bg-[var(--green-tint)] text-sm"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
