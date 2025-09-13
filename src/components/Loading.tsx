import React, { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoaded: () => void;
}

const Loading: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShowWelcome(true);
            setTimeout(onLoaded, 1500);
          }, 500);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoaded]);

  const loadingTexts = [
    "Compiling components...",
    "Initializing modules...",
    "Fetching data from API...",
    "Assembling the grid...",
    "Bootstrapping application...",
    "Resolving dependencies...",
    "Optimizing assets...",
  ];

  const [currentText, setCurrentText] = useState(loadingTexts[0]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (progress < 100) {
      const textInterval = setInterval(() => {
        setCurrentText(
          loadingTexts[Math.floor(Math.random() * loadingTexts.length)]
        );
      }, 2000);
      return () => clearInterval(textInterval);
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center z-50 transition-opacity duration-1000">
      <div className="w-full max-w-md p-4 text-center">
        {showWelcome ? (
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 font-mono">
              Welcome!
            </h1>
            <p className="text-lg text-gray-300 mt-2">
              Let&apos;s build something amazing.
            </p>
          </div>
        ) : (
          <>
            <div className="relative h-24 w-24 mx-auto mb-6">
              <svg
                className="absolute inset-0 animate-spin-slow"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="4"
                />
                <path
                  d="M50 5 A 45 45 0 0 1 95 50"
                  stroke="#2563eb"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-blue-600 text-3xl font-mono font-bold">
                {"<>"}
              </div>
            </div>

            <div className="text-5xl font-mono font-bold text-white mb-2">
              {progress}%
            </div>

            <p className="text-gray-400 text-lg font-mono flex items-center justify-center">
              {currentText}
              <span className="animate-blink">_</span>
            </p>

            <div className="w-full bg-gray-700 rounded-full h-2.5 mt-8 overflow-hidden">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.1s linear",
                }}
              />
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Loading;
