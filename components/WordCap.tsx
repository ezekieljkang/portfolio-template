import React, { useState } from 'react';

interface WordCapProps {
  text: string;
  limit: number;
}

const WordCap: React.FC<WordCapProps> = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleToggle = () => setIsExpanded(!isExpanded);
  
  // Split text into words
  const words = text.split(' ');
  
  // If text is longer than limit, truncate it
  const displayedText = words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;

  return (
    <span>
      {isExpanded ? text : displayedText}
      {words.length > limit && (
        <button onClick={handleToggle} className="border border-black text-black rounded-lg font-robotoMono text-[12px] px-4 py-1 mt-[1rem]">
          {isExpanded ? 'SHOW LESS' : 'READ MORE'}
        </button>
      )}
    </span>
  );
};

export default WordCap;
