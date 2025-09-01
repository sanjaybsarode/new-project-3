
import React from 'react';

const PackageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10.5 11.25h3M12 15h.008" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5v-1.5a1.5 1.5 0 00-1.5-1.5h-13.5a1.5 1.5 0 00-1.5 1.5v1.5zm16.5 0h-16.5" />
    </svg>
);

export default PackageIcon;
