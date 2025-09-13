// components/Loading.tsx
import React, { useEffect } from "react";

interface LoaderProps {
  onLoaded: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoaded }) => {
  useEffect(() => {
    // Optional: Simulate a minimum loading time
    const timer = setTimeout(() => {
      onLoaded();
    }, 1500); // 1.5 seconds minimum

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
        <p className="mt-4 text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
