import React from 'react';
import { cn } from '@/lib/utils';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export function Title({ children, className = "" }: TitleProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <span className="text-[var(--lightest-slate)] text-3xl font-semibold mr-4">{children}</span>
      <p className="flex-1 md:flex-none w-80 h-[1px] bg-[#233554]"></p>
    </div>
  );
}
