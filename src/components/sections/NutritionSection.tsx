import React from 'react';
import type { HealthData } from '../../types/health';

interface NutritionSectionProps {
  nutritionData: HealthData['nutritionData'];
}

export const NutritionSection: React.FC<NutritionSectionProps> = ({ nutritionData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Nutrition</h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm">
            <span>Calories Consumed</span>
            <span>{nutritionData.calories} / {nutritionData.calorieTarget}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full mt-1">
            <div
              className="h-2 bg-yellow-500 rounded-full"
              style={{ width: `${(nutritionData.calories / nutritionData.calorieTarget) * 100}%` }}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-yellow-50 p-3 rounded">
            <div className="text-sm text-yellow-800">Protein</div>
            <div className="font-semibold">{nutritionData.protein}g</div>
          </div>
          <div className="bg-yellow-50 p-3 rounded">
            <div className="text-sm text-yellow-800">Carbs</div>
            <div className="font-semibold">{nutritionData.carbs}g</div>
          </div>
          <div className="bg-yellow-50 p-3 rounded">
            <div className="text-sm text-yellow-800">Fats</div>
            <div className="font-semibold">{nutritionData.fats}g</div>
          </div>
        </div>
      </div>
    </div>
  );
};