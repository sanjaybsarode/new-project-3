import React from 'react';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="shipify-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#34D399' }} /> 
        <stop offset="100%" style={{ stopColor: '#059669' }} />
      </linearGradient>
    </defs>
    
    {/* Base shape - container */}
    <path 
      d="M5 15 L5 40 L45 40 L45 15 L25 5 Z" 
      fill="url(#shipify-logo-gradient)"
    />
    <path 
      d="M5 15 L25 25 L45 15 M25 5 L25 25"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.5"
    />

    {/* Swoosh representing speed/delivery */}
    <path 
      d="M10 28 Q 25 22, 40 28"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default Logo;
