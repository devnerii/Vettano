// src/components/RightColumnNovo/FriendList.tsx

import React from 'react';
import { motion } from 'framer-motion';
import Avatar from './Avatar';
import { Friend } from './types';

type FriendListProps = {
  friends: Friend[];
  hoveredFriend: Friend | null;
  setHoveredFriend: (friend: Friend | null) => void;
  selectFriend: (friend: Friend) => void;
  openMiniProfile: (friend: Friend) => void;
};

const FriendList: React.FC<FriendListProps> = React.memo(
  ({
    friends,
    hoveredFriend,
    setHoveredFriend,
    selectFriend,
    openMiniProfile,
  }) => (
    <section aria-labelledby="friends-heading">
      <h3
        id="friends-heading"
        className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        Amigos
      </h3>
      <ul className="space-y-3">
        {friends.map((friend) => (
          <li key={friend.id}>
            <motion.div
              className="relative flex items-center p-3 bg-[#1d1c49] rounded-lg shadow-sm hover:bg-[#282759] transition-colors duration-200 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => setHoveredFriend(friend)}
              onMouseLeave={() => setHoveredFriend(null)}
              onClick={() => selectFriend(friend)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  selectFriend(friend);
                }
              }}
              aria-label={`Selecionar ${friend.name}`}
            >
              <div className="mr-3">
                <Avatar
                  src={`https://i.pravatar.cc/150?u=${friend.id}`}
                  alt={friend.name}
                  online={friend.online}
                  unreadMessages={friend.unreadMessages}
                  onClick={(e) => {
                    e.stopPropagation();
                    openMiniProfile(friend);
                  }}
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">{friend.name}</span>
                </div>
                <p className="text-gray-400 text-sm truncate">
                  {friend.lastMessage || 'Sem mensagens recentes'}
                </p>
              </div>
              <div className="flex justify-end items-center">
                {friend.online ? (
                  <span className="text-green-500 text-xs">Online</span>
                ) : (
                  <span className="text-gray-400 text-xs">Offline</span>
                )}
              </div>
            </motion.div>
          </li>
        ))}
      </ul>
    </section>
  )
);

FriendList.displayName = 'FriendList';

export default FriendList;
