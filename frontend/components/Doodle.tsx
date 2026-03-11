import React from 'react';

export type DoodleType = 'sun' | 'curly-arrow';

interface DoodleProps extends React.SVGProps<SVGSVGElement> {
  svgType?: DoodleType;
}

const Doodle: React.FC<DoodleProps> = ({ svgType = 'sun', className, ...props }) => {
  if (svgType === 'curly-arrow') {
    return (
      <svg
        width="70"
        height="60"
        viewBox="0 0 120 100"
        fill="none"
        className={className}
        {...props}
      >
        <path
          d="
            M10 60
            C 20 80, 40 80, 45 60
            C 50 40, 30 35, 25 50
            C 20 65, 55 70, 70 55
            C 85 40, 75 30, 65 40
            C 55 50, 80 50, 95 40
          "
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* arrow head */}
        <path
          d="M90 32 L100 40 L90 48"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }

  // Default: sun
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      {...props}
    >
      <line x1="50" y1="10" x2="50" y2="35" />
      <line x1="50" y1="65" x2="50" y2="90" />
      <line x1="10" y1="50" x2="35" y2="50" />
      <line x1="65" y1="50" x2="90" y2="50" />
      <line x1="22" y1="22" x2="40" y2="40" />
      <line x1="60" y1="60" x2="78" y2="78" />
      <line x1="22" y1="78" x2="40" y2="60" />
      <line x1="60" y1="40" x2="78" y2="22" />
      <line x1="30" y1="15" x2="43" y2="38" />
      <line x1="57" y1="62" x2="70" y2="85" />
      <line x1="15" y1="30" x2="38" y2="43" />
      <line x1="62" y1="57" x2="85" y2="70" />
      <line x1="15" y1="70" x2="38" y2="57" />
      <line x1="62" y1="43" x2="85" y2="30" />
      <line x1="30" y1="85" x2="43" y2="62" />
      <line x1="57" y1="38" x2="70" y2="15" />
    </svg>
  );
};

export default Doodle;
