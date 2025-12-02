"use client";

import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface ProjectDemoProps {
  imgSrc?: string;
  alt?: string;
  subTitle?: string;
  title?: string;
  listContent?: string[];
  tools?: string[];
  contentPosition?: "left" | "right";
  className?: string;
  githubLink?: string;
  githubLink2?: string;
  deployLink?: string;
}

export function ProjectDemo({
  imgSrc = "",
  alt = "project",
  subTitle = "Featured Project",
  title = "My project",
  listContent = [],
  tools = [],
  contentPosition = "left",
  className = "",
  githubLink = "",
  githubLink2 = "",
  deployLink = "",
}: ProjectDemoProps) {
  const [heightImg, setHeightImg] = useState(100);
  const [widthImg, setWidthImg] = useState(100);
  const refContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = refContent.current;
    if (element) {
      setHeightImg(element.offsetHeight);
      setWidthImg(element.offsetWidth);
    }
  }, []);

  const contentCss = contentPosition === "left"
    ? "row-start-1 row-end-[-1] md:col-start-1 text-left col-start-1 col-end-[-1] md:col-end-7"
    : "row-start-1 row-end-[-1] col-end-[-1] text-right col-start-1 col-end-[-1] md:col-start-6";

  const imgCss = contentPosition === "left"
    ? "row-start-1 row-end-[-1] col-start-[1] col-end-[-1] md:col-start-6"
    : "row-start-1 row-end-[-1] col-start-1 col-end-[-1] md:col-end-7";

  const subContentCss = contentPosition === "left" ? "justify-start" : "justify-end";

  return (
    <div
      className={`${className} grid grid-cols-12 gap-3 py-12 relative select-none`}
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"
    >
      <div className={`${imgCss} group`}>
        <a href={deployLink} className="block h-full w-full relative">
          <Image
            src={imgSrc}
            alt={alt}
            width={600}
            height={400}
            className="w-full h-full object-cover object-center"
          />
          <span className="absolute right-0 bottom-0 top-0 left-0 bg-[rgba(13,31,52,0.8)] transition-all ease-linear duration-150 group-hover:bg-transparent"></span>
        </a>
      </div>
      <div
        className={`${contentCss} p-3 relative z-[2] bg-[rgba(13,31,52,0.8)] md:bg-transparent`}
        ref={refContent}
      >
        <p className="text-sm text-[var(--base-color)] font-normal">{subTitle}</p>
        <a
          href={deployLink}
          className="text-3xl mt-2 mb-5 text-[var(--lightest-slate)] font-semibold transition-all ease-linear duration-150 hover:text-[var(--base-color)]"
        >
          {title}
        </a>
        <div className="my-3 md:my-5 md:p-5 bg-transparent md:bg-[var(--light-navy)] text-[var(--lightest-slate)] text-base leading-6">
          {listContent.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className={`${subContentCss} flex text-[var(--light-slate)] mb-3`}>
          {tools.map((item, index) => (
            <p className="mr-6" key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className={`${subContentCss} flex text-[var(--light-slate)] text-xl`}>
          <a
            href={githubLink}
            className="block mr-6 transition-all ease-linear duration-150 hover:text-[var(--base-color)]"
            title="front-end"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {githubLink2 && (
            <a
              href={githubLink2}
              className="block mr-6 transition-all ease-linear duration-150 hover:text-[var(--base-color)]"
              title="back-end"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          <a
            href={deployLink}
            className="block transition-all ease-linear duration-150 hover:text-[var(--base-color)]"
            title="deploy"
          >
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </div>
      </div>
    </div>
  );
}
