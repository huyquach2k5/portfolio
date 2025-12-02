"use client";

import React, { useState } from 'react';
import { Title } from '@/components/ui/title';
import { TabHeading } from '@/components/ui/tab-heading';
import { TabContent } from '@/components/ui/tab-content';
import { WORK_EXPERIENCES } from '@/constants';

export function Worked() {
  const [state, setState] = useState(1);

  const getTabStyle = (tabId: number) => {
    const isActive = state === tabId;
    return {
      borderStyle: "solid" as const,
      borderLeftWidth: "2px",
      borderColor: isActive ? "#64ffda" : "rgba(100,255,218,0.1)",
      color: isActive ? "#64ffda" : "#8892b0",
      background: isActive ? "#112240" : "transparent",
    };
  };

  return (
    <div
      className="text-[var(--slate)] py-28"
      id="worked"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"
    >
      <Title className="py-14 mt-24">Where I&apos;ve Worked</Title>
      <div className="tablist sm:flex lg:grid lg:grid-cols-[1fr_4fr] lg:gap-14 select-none">
        <ul className="relative sm:pr-4">
          {WORK_EXPERIENCES.map((exp) => (
            <li
              key={exp.id}
              className="h-11 leading-[42px] px-5 cursor-pointer transition-all duration-150 ease-linear border-l-2 border-solid border-[var(--green-tint)] hover:bg-[var(--light-navy)] hover:text-[var(--base-color)]"
              style={getTabStyle(exp.id)}
              onClick={() => setState(exp.id)}
            >
              {exp.company}
            </li>
          ))}
        </ul>
        <div>
          {WORK_EXPERIENCES.map((exp) => (
            state === exp.id && (
              <div key={exp.id}>
                <TabHeading heading={exp.heading} subHeading={exp.subHeading} />
                <TabContent listContent={exp.listContent} />
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
