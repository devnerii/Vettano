// src/components/RightColumnNovo/RightColumnNovo.tsx

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaChevronRight, FaUserFriends, FaUsers, FaSearch, FaPaperPlane, FaEllipsisV, FaUserPlus } from 'react-icons/fa';
import { MessageCircle, X, Settings } from 'lucide-react';
import montserrat from '../../fonts/Montserrat';
import Header from './Header';
import NotificationsDropdown from './NotificationsDropdown';
import Tabs from './Tabs';
import SearchBar from './SearchBar';
import FriendList from './FriendList';
import GroupList from './GroupList';
import RequestList from './RequestList';
import ChatWindow from './ChatWindow';
import MiniProfileModal from './MiniProfileModal';
import { Friend, Group, Request } from './types';

const RightColumnNovo: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'friends' | 'groups' | 'requests'>('friends');
  const [hoveredFriend, setHoveredFriend] = useState<Friend | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [notifications, setNotifications] = useState<string[]>([
    'Alice te enviou uma mensagem.',
    'Bob adicionou você a um grupo.',
    'Charlie comentou na sua postagem.',
  ]);
  const [isChatActive, setIsChatActive] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [miniProfileFriend, setMiniProfileFriend] = useState<Friend | null>(null);

  // Dados mockados
  const friends: Friend[] = [
    {
      id: 1,
      name: 'Alice',
      online: true,
      status: 'Jogando',
      currentGame: 'CS:GO',
      lastActivity: 'Há 5 minutos',
      level: 15,
      achievements: 120,
      lastMessage: 'Vamos jogar!',
      unreadMessages: 2,
      totalWins: 330119,
      playerWallet: '0x348082b89c...fa40dc6b1adb',
      gameStats: 'Win Rate: 75%',
      registrationDate: '04/09/2024, 2:13:14 PM',
    },
    {
      id: 2,
      name: 'Bob',
      online: true,
      status: 'Online',
      currentGame: 'Dota 2',
      lastActivity: 'Há 1 hora',
      level: 20,
      achievements: 250,
      lastMessage: 'Chegando em 10 min.',
      unreadMessages: 1,
      totalWins: 244,
      playerWallet: '0x1234567890...abcdef123456',
      gameStats: 'Win Rate: 60%',
      registrationDate: '01/01/2024, 10:00:00 AM',
    },
    {
      id: 3,
      name: 'Charlie',
      online: false,
      status: 'Offline',
      currentGame: 'N/A',
      lastActivity: 'Há 2 dias',
      level: 10,
      achievements: 80,
      lastMessage: '',
      unreadMessages: 0,
      totalWins: 150,
      playerWallet: '0xabcdef1234...7890abcdef12',
      gameStats: 'Win Rate: 55%',
      registrationDate: '15/08/2023, 3:45:30 PM',
    },
    {
      id: 4,
      name: 'Diana',
      online: true,
      status: 'Em pausa',
      currentGame: 'Fortnite',
      lastActivity: 'Há 10 minutos',
      level: 18,
      achievements: 190,
      lastMessage: 'Bom jogo!',
      unreadMessages: 3,
      totalWins: 500,
      playerWallet: '0xdeadbeef...1234abcd5678',
      gameStats: 'Win Rate: 65%',
      registrationDate: '22/07/2023, 1:20:10 PM',
    },
    {
      id: 5,
      name: 'Ethan',
      online: false,
      status: 'Offline',
      currentGame: 'N/A',
      lastActivity: 'Há 1 semana',
      level: 12,
      achievements: 95,
      lastMessage: '',
      unreadMessages: 0,
      totalWins: 200,
      playerWallet: '0xbeefdead...5678abcd1234',
      gameStats: 'Win Rate: 58%',
      registrationDate: '30/06/2023, 5:30:00 PM',
    },
    // ... mais amigos
  ];

  const groups: Group[] = [
    { id: 1, name: 'Gamers Brasil', members: 150, lastMessage: 'Vamos jogar amanhã!' },
    { id: 2, name: 'Desenvolvedores', members: 80, lastMessage: 'Nova atualização lançada.' },
    { id: 3, name: 'Amigos da Escola', members: 50, lastMessage: 'Encontro no sábado.' },
    // ... mais grupos
  ];

  const friendRequests: Request[] = [
    { id: 6, name: 'Fiona', online: false, status: 'Offline', currentGame: 'N/A', lastActivity: 'Há 3 dias', level: 8, achievements: 60 },
    { id: 7, name: 'George', online: true, status: 'Online', currentGame: 'Valorant', lastActivity: 'Há 30 minutos', level: 14, achievements: 110 },
    // ... mais solicitações
  ];

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (msg: string) => {
    // Implementar lógica de envio de mensagem
    console.log(`Enviando mensagem para ${selectedFriend?.name}: ${msg}`);
    // Adicionar lógica para adicionar a mensagem à lista de mensagens
  };

  const selectFriend = (friend: Friend) => {
    setSelectedFriend(friend);
    setIsChatActive(true);
  };

  const closeChat = () => {
    setIsChatActive(false);
    setSelectedFriend(null);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen((prev) => !prev);
  };

  const closeNotifications = () => {
    setIsNotificationsOpen(false);
  };

  const openMiniProfile = (friend: Friend) => {
    setMiniProfileFriend(friend);
  };

  const closeMiniProfile = () => {
    setMiniProfileFriend(null);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <AnimatePresence>
        {!isExpanded ? (
          <motion.div
            key="chat-icon"
            className="fixed right-0 bottom-20 p-3 z-30 cursor-pointer bg-[#282759] rounded-l-xl"
            onClick={toggleExpand}
            style={{
              width: '3rem',
              height: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0px 17px 30px 0px rgba(13, 13, 46, 0.9)',
            }}
            aria-label="Open Live Chat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaCommentDots color="#FFA723" size="1.5rem" />
          </motion.div>
        ) : (
          <motion.nav
            className={`z-10 fixed right-0 top-20 h-[calc(100vh-4rem)] bg-gradient-to-br from-[#191844] via-[#15143d] to-[#0f0e29] text-white ${
              isExpanded ? 'w-80' : 'w-20'
            } transition-all duration-300 ease-in-out shadow-lg flex flex-col rounded-bl-lg`}
            initial={false}
            animate={{ width: isExpanded ? '20rem' : '5rem' }}
            aria-label="Menu Lateral Direito"
          >
            <AnimatePresence>
              {!isChatActive && isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full px-4 py-4"
                >
                  <Header
                    onClose={() => setIsExpanded(false)}
                    onToggleNotifications={toggleNotifications}
                    notificationsCount={notifications.length}
                  />
                  <NotificationsDropdown
                    notifications={notifications}
                    isOpen={isNotificationsOpen}
                    onClose={closeNotifications}
                  />
                  <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                  <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                  <div className="flex-grow overflow-y-auto custom-scrollbar">
                    {activeTab === 'friends' && (
                      <FriendList
                        friends={filteredFriends}
                        hoveredFriend={hoveredFriend}
                        setHoveredFriend={setHoveredFriend}
                        selectFriend={selectFriend}
                        openMiniProfile={openMiniProfile}
                      />
                    )}
                    {activeTab === 'groups' && <GroupList groups={groups} />}
                    {activeTab === 'requests' && <RequestList requests={friendRequests} />}
                  </div>
                </motion.div>
              )}

              {isChatActive && isExpanded && selectedFriend && (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <ChatWindow
                    selectedFriend={selectedFriend}
                    sendMessage={handleSendMessage}
                    closeChat={closeChat}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isExpanded && !isChatActive && (
                <motion.button
                  key="collapse-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsExpanded(false)}
                  className="w-full h-16 flex items-center justify-center text-gradient-to-r from-purple-400 to-pink-500 hover:bg-[#282759] transition-colors duration-200"
                  aria-label="Fechar Menu Lateral Direito"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FaChevronRight size={28} />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mini Profile Modal */}
      {miniProfileFriend && (
        <MiniProfileModal
          friend={miniProfileFriend}
          isOpen={!!miniProfileFriend}
          onClose={closeMiniProfile}
        />
      )}
    </>
  );
};

RightColumnNovo.displayName = 'RightColumnNovo';

export default RightColumnNovo;
