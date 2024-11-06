import React from 'react';
import type { HealthData } from '../../types/health';

interface SleepSectionProps {
  sleepData: HealthData['sleepData'];
}

export const SleepSection: React.FC<SleepSectionProps> = ({ sleepData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Sleep</h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm">
            <span>Hours Slept</span>
            <span>{sleepData.hoursSlept} / {sleepData.target}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full mt-1">
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: `${(sleepData.hoursSlept / sleepData.target) * 100}%` }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded">
            <div className="text-sm text-blue-800">Deep Sleep</div>
            <div className="font-semibold">{sleepData.deepSleep} hrs</div>
          </div>
          <div className="bg-blue-50 p-3 rounded">
            <div className="text-sm text-blue-800">Sleep Quality</div>
            <div className="font-semibold">{sleepData.sleepQuality}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};