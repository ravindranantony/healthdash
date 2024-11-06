import React from 'react';
import { Activity, Heart, Moon, Utensils } from 'lucide-react';
import { HealthScore } from './HealthScore';
import { MetricCard } from './MetricCard';
import type { HealthData } from '../types/health';

interface DashboardLayoutProps {
  healthData: HealthData;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ healthData }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Health Dashboard</h1>
        <p className="text-gray-600">Your daily wellness overview</p>
      </div>

      <div className="flex justify-center mb-12">
        <HealthScore score={healthData.score} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Sleep"
          value={healthData.sleep.hours}
          total={healthData.sleep.target}
          icon={<Moon className="w-6 h-6" />}
          subMetrics={[
            { label: 'Deep Sleep', value: healthData.sleep.deepSleep },
            { label: 'Sleep Quality', value: healthData.sleep.quality },
          ]}
        />

        <MetricCard
          title="Activity"
          value={healthData.activity.steps}
          total={healthData.activity.target}
          icon={<Activity className="w-6 h-6" />}
          subMetrics={[
            { label: 'Distance', value: healthData.activity.distance },
            { label: 'Calories', value: healthData.activity.calories },
          ]}
        />

        <MetricCard
          title="Health Vitals"
          value={`${healthData.vitals.systolic} / ${healthData.vitals.diastolic}`}
          icon={<Heart className="w-6 h-6" />}
          subMetrics={[
            { label: 'Heart Rate', value: healthData.vitals.heartRate },
            { label: 'Blood Glucose', value: healthData.vitals.glucose },
          ]}
        />

        <MetricCard
          title="Nutrition"
          value={healthData.nutrition.calories}
          total={healthData.nutrition.target}
          icon={<Utensils className="w-6 h-6" />}
          subMetrics={[
            { label: 'Protein', value: healthData.nutrition.protein },
            { label: 'Carbs', value: healthData.nutrition.carbs },
            { label: 'Fats', value: healthData.nutrition.fats },
          ]}
        />
      </div>
    </div>
  );
};