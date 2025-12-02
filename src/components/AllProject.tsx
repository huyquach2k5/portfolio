"use client";

import React, { useState } from 'react';
import { Project } from '@/components/Project';
import { PROJECTS_DATA } from '@/constants';

interface AllProjectProps {
  githubLink?: string;
}

export function AllProject({ githubLink = "" }: AllProjectProps) {
  const [show, setShow] = useState(false);
  const [heightProject, setHeightProject] = useState(0);

  const gapValue = 20;
  const height = gapValue * 2 + heightProject * 2;

  return (
    <div
      className="py-20"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"
    >
      <h2 className="text-center text-[var(--lightest-slate)] text-3xl font-semibold">
        Other Noteworthy Projects
      </h2>
      <a href={githubLink} className="block text-center text-[var(--base-color)] my-2">
        View on Github
      </a>
      <div
        className="grid mt-10 pt-4 gap-5 transition-all ease-linear duration-200 overflow-hidden xl:grid-cols-3 md:grid-cols-2"
        style={show ? { height: "unset" } : { height: `${height}px` }}
      >
        {PROJECTS_DATA.map((item, index) => (
          <Project
            key={index}
            deployLink={item.projectDeployLink}
            githubLink={item.projectGithubLink}
            tools={item.project_tools as unknown as string[]}
            description={item.project_description}
            project_name={item.project_name}
            setHeightProject={setHeightProject}
          />
        ))}
      </div>
      <button
        onClick={() => setShow(!show)}
        className="block mx-auto text-sm border-[1px] border-[var(--base-color)] border-solid text-[var(--base-color)] px-6 py-3 mt-8 rounded-sm transition-all ease-linear duration-150 hover:bg-[var(--green-tint)]"
      >
        Show {show ? "Less" : "More"}
      </button>
    </div>
  );
}
