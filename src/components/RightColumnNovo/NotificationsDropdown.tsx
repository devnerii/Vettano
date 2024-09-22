// src/components/RightColumnNovo/NotificationsDropdown.tsx

import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell } from 'lucide-react';

type NotificationsDropdownProps = {
  notifications: string[];
  isOpen: boolean;
  onClose: () => void;
};

const NotificationsDropdown: React.FC<NotificationsDropdownProps> = React.memo(
  ({ notifications, isOpen, onClose }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: globalThis.MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = 'hidden'; // Evita rolagem quando o dropdown está aberto
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = 'unset';
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = 'unset';
      };
    }, [isOpen, onClose]);

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 right-0 w-80 bg-[#1d1c49] rounded-lg shadow-lg p-4 z-30"
            aria-label="Notificações"
          >
            <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Notificações
            </h3>
            {notifications.length === 0 ? (
              <p className="text-gray-400 text-sm">Nenhuma notificação</p>
            ) : (
              notifications.map((note, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 mb-2"
                >
                  <Bell
                    size={18}
                    className="text-gradient-to-r from-purple-400 to-pink-500"
                    aria-hidden="true"
                  />
                  <p className="text-white text-sm">{note}</p>
                </div>
              ))
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    );
  }
);

NotificationsDropdown.displayName = 'NotificationsDropdown';

export default NotificationsDropdown;
