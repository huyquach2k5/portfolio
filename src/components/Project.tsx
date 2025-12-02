"use client";

import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface ProjectProps {
  githubLink?: string;
  deployLink?: string;
  tools?: string[];
  description?: string;
  project_name?: string;
  setHeightProject?: (height: number) => void;
}

export function Project({
  githubLink = "",
  deployLink = "",
  tools = [],
  description = "",
  project_name = "",
  setHeightProject,
}: ProjectProps) {
  const refProject = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = refProject.current;
    if (element && setHeightProject) {
      const updateHeight = () => {
        setHeightProject(element.offsetHeight);
      };
      updateHeight();
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, [setHeightProject]);

  return (
    <a
      href={deployLink}
      className="py-7 px-8 bg-[var(--light-navy)] block rounded-sm transition-all ease-linear duration-150 hover:translate-y-[-6px]"
      ref={refProject}
    >
      <div className="flex text-[var(--lightest-slate)] justify-between items-center text-lg">
        <span className="text-4xl text-[var(--base-color)]">
          <FontAwesomeIcon icon={faFolder} />
        </span>
        <div className="flex items-center">
          <a
            href={githubLink}
            className="block mr-4 transition-all ease-linear duration-150 hover:text-[var(--base-color)]"
            title="Github link"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={deployLink}
            className="block transition-all ease-linear duration-150 hover:text-[var(--base-color)]"
            title="Deploy link"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </div>
      </div>
      <h2 className="mb-3 mt-5 text-[var(--lightest-slate)] font-semibold text-[22px] transition-all ease-linear duration-150 hover:text-[var(--base-color)]">
        {project_name}
      </h2>
      <p className="text-[var(--light-slate)] text-base">{description}</p>
      <div className="flex mt-4 text-[#8892b0]">
        {tools.map((item, index) => (
          <div key={index} className="mr-4 text-sm">
            <span>{item}</span>
          </div>
        ))}
      </div>
    </a>
  );
}
