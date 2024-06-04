import React from 'react';

const ComingSoonOverlay = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-85 flex items-center justify-center">
        <span className="text-white text-3xl sm:text-2xl md:text-6xl text-center font-bold">Coming Soon</span>
      </div>
    </div>
  );
};

export default ComingSoonOverlay;
