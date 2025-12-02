"use client";

import React from 'react';
import { ButtonLink } from '@/components/ui/button-link';

export function Intro() {
  return (
    <div className="pt-24 text-[var(--lightest-slate)]">
      <div className="text-[var(--base-color)] mb-8">Hi, my name is</div>
      <h2 className="text-[clamp(40px,8vw,80px)] font-semibold leading-[1.1]">Thang Nguyen Van</h2>
      <h2 className="text-[clamp(40px,8vw,80px)] font-semibold leading-[1.1] text-[var(--slate)]">
        I&apos;m a full-stack developer.
      </h2>
      <div className="mt-5 max-w-4xl text-[var(--slate)] text-xl">
        I graduated major Information Technology from Hanoi National University of Education. I have over a year of
        experience working in web programming along with Reactjs, Vuejs and Laravel.
      </div>
      <ButtonLink
        href="/cv/CV_Nguyen_Van_Thang_Fullstack_Developer.pdf"
        className="text-[var(--base-color)] border-[var(--base-color)] border-solid border-[1px] px-5 py-3 rounded-sm mt-5 transition-all ease-linear duration-200 inline-block hover:bg-[var(--green-tint)]"
        target="_self"
      >
        Check out my CV
      </ButtonLink>
    </div>
  );
}
