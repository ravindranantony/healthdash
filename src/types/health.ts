export interface HealthData {
  sleepData: {
    hoursSlept: number;
    deepSleep: number;
    sleepQuality: number;
    target: number;
  };
  activityData: {
    steps: number;
    distance: number;
    calories: number;
    stepsTarget: number;
  };
  vitalsData: {
    bloodPressure: {
      systolic: number;
      diastolic: number;
    };
    heartRate: number;
    bloodGlucose: number;
  };
  nutritionData: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    calorieTarget: number;
  };
}

export interface UserProfile {
  email: string;
  name: string;
  picture: string;
}