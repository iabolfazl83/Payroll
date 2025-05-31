import React from "react";

interface DoubleLineProgressProps {
  value: number;
  size?: number;
  gap?: number;
  gradientStart?: string;
  gradientEnd?: string;
}

const DoubleLineProgress: React.FC<DoubleLineProgressProps> = ({
  value,
  size = 100,
  gap = 4,
  gradientStart = "#22AD5C",
  gradientEnd = "#DFF3E7",
}) => {
  const strokeWidth = 8;
  const center = size / 2;
  const outerRadius = center - strokeWidth / 2;
  const innerRadius = outerRadius - strokeWidth - gap;

  const getStrokeData = (radius: number) => {
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - value / 100);

    return { circumference, offset };
  };

  const outer = getStrokeData(outerRadius);
  const inner = getStrokeData(innerRadius);

  const gradientId = `gradient-${Math.random()}`;

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "inline-block",
      }}
    >
      <svg height={size} width={size}>
        <defs>
          <linearGradient id={gradientId} x1="80%" x2="0%" y1="100%" y2="0%">
            <stop offset="0%" stopColor={gradientEnd} />
            <stop offset="100%" stopColor={gradientStart} />
          </linearGradient>
        </defs>

        {/* پس‌زمینه خاکستری */}
        <circle
          cx={center}
          cy={center}
          fill="none"
          r={outerRadius}
          stroke="#E6EAEA"
          strokeWidth={strokeWidth}
        />

        {/* خط بیرونی */}
        <circle
          cx={center}
          cy={center}
          fill="none"
          r={outerRadius}
          stroke={`url(#${gradientId})`}
          strokeDasharray={outer.circumference}
          strokeDashoffset={outer.offset}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          transform={`rotate(-90 ${center} ${center})`}
        />

        {/* خط درونی */}
        <circle
          cx={center}
          cy={center}
          fill="none"
          r={innerRadius}
          stroke={`url(#${gradientId})`}
          strokeDasharray={inner.circumference}
          strokeDashoffset={inner.offset}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>

      {/* متن درصد */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: "900",
          fontSize: "27px",
          background: `linear-gradient(0deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "Nunito",
        }}
      >
        {value}%
      </div>
    </div>
  );
};

export default DoubleLineProgress;
