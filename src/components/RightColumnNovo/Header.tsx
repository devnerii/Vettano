// src/components/RightColumnNovo/Header.tsx

import React from 'react';
import { Bell, X } from 'lucide-react';

type HeaderProps = {
  onClose: () => void;
  onToggleNotifications: () => void;
  notificationsCount: number;
};

const Header: React.FC<HeaderProps> = React.memo(
  ({ onClose, onToggleNotifications, notificationsCount }) => (
    <header className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Chat Steam
      </h2>
      <div className="flex items-center space-x-4">
        <button
          onClick={onToggleNotifications}
          className="relative text-gradient-to-r from-purple-400 to-pink-500 hover:text-white transition-colors duration-200"
          aria-label="Abrir Notificações"
        >
          <Bell size={24} />
          {/* Indicador de Notificações */}
          {notificationsCount > 0 && (
            <span
              className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"
              aria-label={`${notificationsCount} novas notificações`}
            ></span>
          )}
        </button>
        <button
          onClick={onClose}
          className="text-gradient-to-r from-purple-400 to-pink-500 hover:text-white transition-colors duration-200"
          aria-label="Fechar Menu"
        >
          <X size={28} />
        </button>
      </div>
    </header>
  )
);

Header.displayName = 'Header';

export default Header;
