import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

interface TabContentProps {
  listContent?: readonly string[];
}

export function TabContent({ listContent = [] }: TabContentProps) {
  return (
    <div>
      {listContent.map((item, index) => {
        return (
          <div className="flex sm:pr-0 lg:pr-32 my-3" key={index}>
            <span className="mr-4 text-[var(--base-color)] translate-y-1">
              <FontAwesomeIcon icon={faCaretRight} />
            </span>
            <div>{item}</div>
          </div>
        );
      })}
    </div>
  );
}
