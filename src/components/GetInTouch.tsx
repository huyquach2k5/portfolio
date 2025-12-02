"use client";

import React from 'react';
import { ButtonLink } from '@/components/ui/button-link';

interface GetInTouchProps {
  children: React.ReactNode;
}

export function GetInTouch({ children }: GetInTouchProps) {
  return (
    <div
      className="text-center py-24 select-none"
      id="get-in-touch"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"
    >
      <p className="text-[var(--base-color)] mb-5 text-base font-normal">What&apos;s next</p>
      <div className="text-[var(--lightest-slate)] text-5xl font-bold">Get In Touch</div>
      <div className="text-[var(--slate)] w-[760px] mx-auto py-7 text-lg max-w-full">{children}</div>
      <ButtonLink
        href="mailto:thangng.works@gmail.com"
        className="text-base hover:bg-[var(--green-tint)] transition-all ease-linear duration-150 border-[var(--base-color)] border-solid border-[1px] rounded-sm text-[var(--base-color)] px-6 py-4 my-6 inline-block"
      >
        Say Hello
      </ButtonLink>
    </div>
  );
}
