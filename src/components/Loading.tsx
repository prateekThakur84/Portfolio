// components/Loading.tsx
import React, { useEffect } from "react";

interface LoaderProps {
  onLoaded: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => onLoaded(), 1500);
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="relative flex h-24 w-24 items-center justify-center">
        
        {/* Ring 1 - Spinning Fast */}
        <div className="absolute h-full w-full rounded-full border-[3px] border-transparent border-t-blue-500 border-r-blue-500 animate-[spin_1s_linear_infinite]"></div>
        
        {/* Ring 2 - Spinning Slow & Reverse */}
        <div className="absolute h-16 w-16 rounded-full border-[3px] border-transparent border-b-gray-400 border-l-gray-400 animate-[spin_2s_linear_infinite_reverse]"></div>
        
        {/* Center Core - Pulsing */}
        <div className="h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse"></div>
        
      </div>
      
      {/* Loading Text */}
      <div className="absolute mt-32 font-mono text-sm tracking-[0.3em] text-gray-400">
        LOADING
      </div>
    </div>
  );
};

export default Loader;