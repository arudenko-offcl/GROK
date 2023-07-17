import React from 'react';
import { SVGType } from '@typings/SVG';
import { useGetCSSVars } from '@lib/useGetCSSVars';

export const AvatarSVG: React.FC<SVGType> = ({ width, color }) => {
  const currentColor = useGetCSSVars('color', color || '');
  return (
    <>
      <svg width={width} height={width} viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_2013_690" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="65">
          <circle cx="32" cy="32.5" r="31.5" fill="#C4C4C4" stroke="#8B97AE" />
        </mask>
        <g mask="url(#mask0_2013_690)">
          <circle cx="32" cy="32.5" r="30" stroke="#8B97AE" strokeWidth="4" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.9206 28.9187C38.9206 30.7055 38.1763 32.6102 36.9058 34.0561C35.6446 35.4915 34.1159 36.2119 32.6694 36.2119C31.2228 36.2119 29.6942 35.4915 28.4329 34.0561C27.1625 32.6102 26.4181 30.7055 26.4181 28.9187C26.4181 25.4663 29.2168 22.6675 32.6694 22.6675C36.1219 22.6675 38.9206 25.4663 38.9206 28.9187ZM43.0881 28.9187C43.0881 34.6729 38.4234 40.3794 32.6694 40.3794C26.9153 40.3794 22.2506 34.6729 22.2506 28.9187C22.2506 23.1646 26.9153 18.5 32.6694 18.5C38.4234 18.5 43.0881 23.1646 43.0881 28.9187ZM20.1675 56.0074C20.1675 51.4042 23.8992 47.6724 28.5025 47.6724H36.8375C41.4407 47.6724 45.1725 51.4042 45.1725 56.0074V60.1749H49.34V56.0074C49.34 49.1025 43.7424 43.5049 36.8375 43.5049H28.5025C21.5976 43.5049 16 49.1025 16 56.0074V60.1749H20.1675V56.0074Z"
            fill="#8B97AE"
          />
        </g>
      </svg>
    </>
  );
};
