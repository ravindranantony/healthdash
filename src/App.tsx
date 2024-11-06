import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { HealthScore } from './components/HealthScore';
import { UserMenu } from './components/UserMenu';
import { GoogleAuthButton } from './components/auth/GoogleAuthButton';
import { SleepSection } from './components/sections/SleepSection';
import { ActivitySection } from './components/sections/ActivitySection';
import { VitalsSection } from './components/sections/VitalsSection';
import { NutritionSection } from './components/sections/NutritionSection';
import { useGoogleAuth } from './hooks/useGoogleAuth';
import type { HealthData } from './types/health';

const MOCK_HEALTH_DATA: HealthData = {
  sleepData: {
    hoursSlept: 7.5,
    deepSleep: 2.5,
    sleepQuality: 85,
    target: 9
  },
  activityData: {
    steps: 0,
    distance: 0,
    calories: 0,
    stepsTarget: 10000
  },
  vitalsData: {
    bloodPressure: {
      systolic: 120,
      diastolic: 140
    },
    heartRate: 72,
    bloodGlucose: 95
  },
  nutritionData: {
    calories: 1850,
    protein: 85,
    carbs: 220,
    fats: 65,
    calorieTarget: 2000
  }
};

const CLIENT_ID = '638545553718-nm12rnb04ltvofr3g0pv4ucm09lre3bf.apps.googleusercontent.com';

function App() {
  const {
    userProfile,
    isLoading,
    error,
    handleLoginSuccess,
    handleLoginError,
    handleLogout
  } = useGoogleAuth();

  const calculateHealthScore = () => {
    return 85; // Mock calculation
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Health Dashboard</h1>
            <div>
              {isLoading ? (
                <div className="animate-pulse bg-gray-200 h-10 w-32 rounded"></div>
              ) : userProfile ? (
                <UserMenu profile={userProfile} onLogout={handleLogout} />
              ) : (
                <GoogleAuthButton
                  onSuccess={handleLoginSuccess}
                  onError={handleLoginError}
                />
              )}
            </div>
          </div>
          {error && (
            <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
              <div className="bg-red-50 text-red-700 p-2 rounded text-sm">
                {error}
              </div>
            </div>
          )}
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <HealthScore score={calculateHealthScore()} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SleepSection sleepData={MOCK_HEALTH_DATA.sleepData} />
            <ActivitySection activityData={MOCK_HEALTH_DATA.activityData} />
            <VitalsSection vitalsData={MOCK_HEALTH_DATA.vitalsData} />
            <NutritionSection nutritionData={MOCK_HEALTH_DATA.nutritionData} />
          </div>
        </main>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;