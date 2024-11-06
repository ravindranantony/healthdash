import React from 'react';
import type { HealthData } from '../../types/health';

interface ActivitySectionProps {
  activityData: HealthData['activityData'];
}

export const ActivitySection: React.FC<ActivitySectionProps> = ({ activityData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Activity</h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm">
            <span>Steps</span>
            <span>{activityData.steps} / {activityData.stepsTarget}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full mt-1">
            <div
              className="h-2 bg-green-500 rounded-full"
              style={{ width: `${(activityData.steps / activityData.stepsTarget) * 100}%` }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 p-3 rounded">
            <div className="text-sm text-green-800">Distance</div>
            <div className="font-semibold">{activityData.distance} km</div>
          </div>
          <div className="bg-green-50 p-3 rounded">
            <div className="text-sm text-green-800">Calories</div>
            <div className="font-semibold">{activityData.calories} kcal</div>
          </div>
        </div>
      </div>
    </div>
  );
};