import React from 'react';

const HoverDiagonalGrid = () => {
  return (
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0 mix-blend-multiply"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'12\' viewBox=\'0 0 12 12\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M-1 13 L13 -1\' stroke=\'rgba(0, 0, 0, 0.09)\' stroke-width=\'1.5\'/%3E%3C/svg%3E")',
      }}
    ></div>
  );
};

export default HoverDiagonalGrid;
