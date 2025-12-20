import React from "react";

const KpiCard = ({
  title,
  value,
  icon: Icon,
  change,
  changeType = "neutral", // "up" | "down" | "neutral"
  subtitle,
}) => {
  const changeStyles = {
    up: "text-green-600 bg-green-100",
    down: "text-red-600 bg-red-100",
    neutral: "text-gray-600 bg-gray-100",
  };

  return (
    <div className="rounded-2xl bg-white shadow-sm border p-5 hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              {value}
            </h2>
        </div>

        {Icon && (
          <div className="p-3 rounded-xl bg-gray-100 text-gray-700">
            <Icon size={24} />
          </div>
        )}
      </div>

    {(change || subtitle) && (
      <div className="flex items-center justify-between mt-4">
        {change && (
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${changeStyles[changeType]}`}>
            {change}
          </span>
        )}

        {subtitle && (
          <span className="text-xs text-gray-400">
            {subtitle}
          </span>
        )}
      </div>
    )}
  </div>
);}
export default KpiCard;
