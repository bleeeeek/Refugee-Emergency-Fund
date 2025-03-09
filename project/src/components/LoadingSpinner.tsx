import React, { useEffect, useState } from 'react';

export function LoadingSpinner() {
  const [isVisible, setIsVisible] = useState(true);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    const dotTimer = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(dotTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-white p-4 rounded-lg border-2 border-[#2d3748] transform rotate-[-2deg]">
      <div className="font-['Indie_Flower'] text-xl text-[#2d3748] flex items-center gap-2">
        Loading{dots}
      </div>
    </div>
  );
}