// src/components/RightColumnNovo/MiniProfileModal.tsx

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Avatar from './Avatar';
import { Friend } from './types';

type MiniProfileModalProps = {
  friend: Friend;
  isOpen: boolean;
  onClose: () => void;
};

const MiniProfileModal: React.FC<MiniProfileModalProps> = React.memo(
  ({ friend, isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: globalThis.MouseEvent) => {
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node)
        ) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = 'hidden'; // Evita rolagem quando o modal está aberto
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
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            aria-modal="true"
            role="dialog"
            aria-labelledby="mini-profile-title"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1d1c49] rounded-lg shadow-lg w-96 relative overflow-hidden"
            >
              {/* Banner de Fundo */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-purple-400 to-pink-500"></div>
              {/* Botão de Fechar */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors duration-200"
                aria-label="Fechar Mini Perfil"
              >
                <X size={24} />
              </button>
              {/* Conteúdo do Mini Perfil */}
              <div className="mt-16 p-6">
                <div className="flex items-center space-x-4">
                  <Avatar
                    src={`https://i.pravatar.cc/150?u=${friend.id}`}
                    alt={friend.name}
                    online={friend.online}
                    unreadMessages={friend.unreadMessages}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                  <div>
                    <h3 id="mini-profile-title" className="text-lg font-bold text-white">
                      {friend.name}
                    </h3>
                    <p className="text-sm text-gray-300">{friend.status}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-white font-semibold">Conquistas: {friend.achievements}</p>
                  <p className="text-white font-semibold">Nível: {friend.level}</p>
                  <p className="text-white font-semibold">Jogando: {friend.currentGame}</p>
                  <p className="text-white font-semibold">Última atividade: {friend.lastActivity}</p>
                </div>
                <div className="mt-4 bg-[#282759] p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Detalhes do Perfil</h4>
                  <p className="text-gray-300 text-sm">Total de Ganhos: {friend.totalWins} INJ</p>
                  <p className="text-gray-300 text-sm">Carteira do Jogador: {friend.playerWallet}</p>
                  <p className="text-gray-300 text-sm">Estatísticas de Jogo: {friend.gameStats}</p>
                  <p className="text-gray-300 text-sm">Data de Registro: {friend.registrationDate}</p>
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    className="px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg text-white hover:from-pink-500 hover:to-purple-400 transition-colors duration-200"
                    aria-label="Detalhes do Perfil"
                  >
                    Detalhes do Perfil
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    );
  }
);

MiniProfileModal.displayName = 'MiniProfileModal';

export default MiniProfileModal;
