"use client";

import { Header } from "@/components/layout/Header";
import { Intro } from "@/components/Intro";
import { AboutMe } from "@/components/AboutMe";
import { Worked } from "@/components/Worked";
import { MyProject } from "@/components/MyProject";
import { AllProject } from "@/components/AllProject";
import { GetInTouch } from "@/components/GetInTouch";
import { CopyRight } from "@/components/layout/CopyRight";
import { Socials } from "@/components/layout/Socials";
import { Contact } from "@/components/layout/Contact";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <div className="max-w-full mx-auto pt-24 px-28 lg:w-[68.75rem] xl:px-0">
        <Intro />
        <AboutMe />
        <Worked />
        <MyProject />
        <AllProject githubLink="https://github.com/thangnv-pegasus?tab=repositories" />
        <GetInTouch>
          Although I&apos;m not currently looking for any new opportunities, my inbox is always open. Whether you
          have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </GetInTouch>
        <CopyRight />
      </div>
      <Socials />
      <Contact />
    </div>
  );
}
