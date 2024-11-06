import React from 'react';
import { LogOut, Settings, User } from 'lucide-react';

interface UserMenuProps {
  profile: {
    name: string;
    picture: string;
  };
  onLogout: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ profile, onLogout }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <img
          src={profile.picture}
          alt={profile.name}
          className="w-8 h-8 rounded-full"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
          <div className="px-4 py-2 text-sm text-gray-700 border-b">
            {profile.name}
          </div>
          <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
            <User className="w-4 h-4 mr-2" />
            Profile
          </button>
          <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </button>
          <button
            onClick={onLogout}
            className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};