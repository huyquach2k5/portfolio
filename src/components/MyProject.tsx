"use client";

import React from 'react';
import { Title } from '@/components/ui/title';
import { ProjectDemo } from '@/components/ProjectDemo';
import { FEATURED_PROJECTS } from '@/constants';

export function MyProject() {
  return (
    <div
      className="py-28"
      id="my-project"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"
    >
      <Title className="mt-24">Some Things I&apos;ve Built</Title>
      {FEATURED_PROJECTS.map((project, index) => (
        <ProjectDemo
          key={index}
          imgSrc={project.imgSrc}
          subTitle={project.subTitle}
          title={project.title}
          contentPosition={project.contentPosition}
          listContent={project.listContent as unknown as string[]}
          tools={project.tools as unknown as string[]}
          githubLink={project.githubLink}
          githubLink2={project.githubLink2}
          deployLink={project.deployLink}
        />
      ))}
    </div>
  );
}
