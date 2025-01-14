import React from 'react';

interface SkeletonTextProps {
  lines?: number;
  lineHeight?: number | string;
  spacing?: number;
  randomWidths?: boolean;
  width?: string | number;
}

const SkeletonText: React.FC<SkeletonTextProps> = ({
  lines = 3,
  lineHeight = '1em',
  spacing = 8,
  randomWidths = false,
  width = '100%',
}) => {
  const skeletonLines = Array.from({ length: lines });

  return (
    <div>
      {skeletonLines.map((_, index) => (
        <div
          key={index}
          style={{
            height: lineHeight,
            width: randomWidths ? `${Math.random() * 80 + 20}%` : width,
            backgroundColor: '#e0e0e0',
            marginBottom: spacing,
            borderRadius: '4px',
          }}
        />
      ))}
    </div>
  );
};

export default SkeletonText;
