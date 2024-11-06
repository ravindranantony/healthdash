import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { UserProfile } from './UserProfile';
import type { GoogleCredentialResponse, UserProfile as UserProfileType } from '../types/health';

interface GoogleAuthProps {
  onSuccess: (credentialResponse: GoogleCredentialResponse) => void;
  onError: () => void;
  isAuthenticated: boolean;
  userProfile: UserProfileType | null;
  onLogout: () => void;
  isSyncing: boolean;
}

export const GoogleAuth: React.FC<GoogleAuthProps> = ({ 
  onSuccess, 
  onError, 
  isAuthenticated,
  userProfile,
  onLogout,
  isSyncing
}) => {
  return (
    <div className="absolute top-4 right-4 z-10">
      {isAuthenticated && userProfile ? (
        <UserProfile 
          profile={userProfile}
          onLogout={onLogout}
          isSyncing={isSyncing}
        />
      ) : (
        <GoogleLogin
          onSuccess={credentialResponse => {
            onSuccess(credentialResponse as GoogleCredentialResponse);
          }}
          onError={onError}
          useOneTap
          type="standard"
          theme="filled_blue"
          size="large"
          shape="rectangular"
        />
      )}
    </div>
  );
};