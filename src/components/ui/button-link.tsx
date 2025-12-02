import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function ButtonLink({ className = "", href, children, ...props }: ButtonLinkProps) {
  if (href) {
    return (
      <a href={href} className={cn(className)} {...props}>
        {children}
      </a>
    );
  }
  return null;
}
