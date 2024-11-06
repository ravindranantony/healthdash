import React from 'react';
import { LogOut, Settings, User } from 'lucide-react';

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    picture: string;
  };
  onLogout: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-full hover:bg-gray-100 p-2"
      >
        <img
          src={user.picture}
          alt={user.name}
          className="w-8 h-8 rounded-full"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          <div className="px-4 py-2 border-b">
            <p className="text-sm font-semibold">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
          
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
            <User className="w-4 h-4 mr-2" />
            Profile
          </button>
          
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </button>
          
          <button
            onClick={onLogout}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center text-red-600"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};