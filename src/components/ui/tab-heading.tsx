import React from 'react';

interface TabHeadingProps {
  heading?: string;
  subHeading?: string;
}

export function TabHeading({ heading = "", subHeading = "" }: TabHeadingProps) {
  return (
    <div>
      <h2 className="text-2xl font-medium text-[var(--lightest-slate)]">{heading}</h2>
      <p className="text-sm text-[var(--slate)] my-3">{subHeading}</p>
    </div>
  );
}
