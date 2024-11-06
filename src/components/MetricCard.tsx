import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  total?: string | number;
  icon?: React.ReactNode;
  subMetrics?: {
    label: string;
    value: string | number;
    color?: string;
  }[];
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  total,
  icon,
  subMetrics,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {icon && <div className="text-gray-500">{icon}</div>}
      </div>
      
      <div className="mb-4">
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold">{value}</span>
          {total && <span className="text-gray-500">/ {total}</span>}
        </div>
      </div>

      {subMetrics && (
        <div className="grid grid-cols-2 gap-4">
          {subMetrics.map((metric, index) => (
            <div key={index} className="space-y-1">
              <div className="text-sm text-gray-500">{metric.label}</div>
              <div className={`font-semibold ${metric.color || 'text-gray-800'}`}>
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};