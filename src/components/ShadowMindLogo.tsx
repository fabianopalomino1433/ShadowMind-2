import type React from 'react';

const ShadowMindLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`font-bold text-2xl ${className}`}>
      <span className="text-gray-800 dark:text-gray-100">Shadow</span>
      <span className="text-gray-600 dark:text-gray-400">Mind</span>
    </div>
  );
};

export default ShadowMindLogo;
