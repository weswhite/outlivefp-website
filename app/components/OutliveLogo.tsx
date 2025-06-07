import React from "react";

interface OutliveLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const OutliveLogo: React.FC<OutliveLogoProps> = ({
  className = "",
  showText = true,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={sizeClasses[size]}>
        <svg viewBox="0 0 144 119" className="w-full h-full" fill="none">
          <path
            d="M105 8.99997C106.232 9.62839 106.232 9.62839 107.488 10.2695C124.409 19.634 136.051 35.2561 142.254 53.375C144.204 60.2373 144 66.8453 144 74C96.48 74 48.96 74 0 74C0 59.9829 0 59.9829 2.0625 53.5625C2.28728 52.8429 2.51206 52.1234 2.74365 51.382C8.98135 32.3332 22.072 17.5324 39.8125 8.24997C42.1893 7.11144 44.5821 6.05297 47 4.99997C48.4908 4.34448 48.4908 4.34448 50.0117 3.67575C67.9574 -3.0099 88.4143 0.449866 105 8.99997Z"
            fill="#C3891F"
          />
          <path
            d="M0 82C47.19 82 94.38 82 143 82C143 83.98 143 85.96 143 88C96.14 88 49.28 88 1 88C0.67 86.02 0.34 84.04 0 82Z"
            fill="#122F4D"
          />
          <path
            d="M5 98C49.22 98 93.44 98 139 98C138.34 99.98 137.68 101.96 137 104C94.1 104 51.2 104 7 104C6.34 102.02 5.68 100.04 5 98Z"
            fill="#183450"
          />
          <path
            d="M19 115C53.32 115 87.64 115 123 115C123 115.99 123 116.98 123 118C109.735 118.069 96.4709 118.123 83.2062 118.155C77.0474 118.171 70.8887 118.192 64.73 118.226C58.7907 118.259 52.8516 118.277 46.9123 118.285C44.642 118.29 42.3717 118.301 40.1014 118.317C36.9309 118.339 33.7609 118.342 30.5903 118.341C29.6437 118.351 28.6972 118.362 27.7219 118.373C26.4304 118.367 26.4304 118.367 25.1128 118.361C23.9873 118.365 23.9873 118.365 22.8391 118.369C21 118 21 118 19 115Z"
            fill="#062D4D"
          />
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-bold text-primary-700 leading-tight tracking-wide ${textSizes[size]}`}
          >
            OUTLIVE
          </span>
          <span
            className={`text-neutral-600 text-xs font-medium tracking-wider ${
              size === "sm" ? "text-xs" : "text-sm"
            }`}
          >
            FINANCIAL PLANNING
          </span>
        </div>
      )}
    </div>
  );
};

export default OutliveLogo;
