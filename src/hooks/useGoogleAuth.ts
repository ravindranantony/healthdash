import { useState, useCallback } from 'react';
import { googleLogout } from '@react-oauth/google';
import type { UserProfile } from '../types/health';

export const useGoogleAuth = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoginSuccess = useCallback(async (response: any) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // In a real app, you would decode the credential and fetch user data
      const mockProfile = {
        email: 'user@example.com',
        name: 'John Doe',
        picture: 'https://via.placeholder.com/150'
      };
      
      setUserProfile(mockProfile);
    } catch (err) {
      setError('Failed to login with Google');
      console.error('Login failed:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogout = useCallback(() => {
    googleLogout();
    setUserProfile(null);
    setError(null);
  }, []);

  const handleLoginError = useCallback(() => {
    setError('Google login failed');
    setUserProfile(null);
  }, []);

  return {
    userProfile,
    isLoading,
    error,
    handleLoginSuccess,
    handleLoginError,
    handleLogout
  };
};