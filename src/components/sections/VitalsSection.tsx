import React from 'react';
import type { HealthData } from '../../types/health';

interface VitalsSectionProps {
  vitalsData: HealthData['vitalsData'];
}

export const VitalsSection: React.FC<VitalsSectionProps> = ({ vitalsData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Health Vitals</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-50 p-3 rounded">
            <div className="text-sm text-red-800">Blood Pressure</div>
            <div className="font-semibold">
              {vitalsData.bloodPressure.systolic} / {vitalsData.bloodPressure.diastolic}
            </div>
          </div>
          <div className="bg-red-50 p-3 rounded">
            <div className="text-sm text-red-800">Heart Rate</div>
            <div className="font-semibold">{vitalsData.heartRate} bpm</div>
          </div>
        </div>
        <div className="bg-red-50 p-3 rounded">
          <div className="text-sm text-red-800">Blood Glucose</div>
          <div className="font-semibold">{vitalsData.bloodGlucose} mg/dL</div>
        </div>
      </div>
    </div>
  );
};