import React from 'react';

interface TooltipProps {
  text: string;
  visible: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ text, visible, position = 'top' }) => {
  const positionClasses: { [key: string]: string } = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  };

  return (
    <div className={`absolute bg-black text-white text-xs rounded py-1 px-2 ${positionClasses[position]} ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      {text}
    </div>
  );
};

export default Tooltip;
