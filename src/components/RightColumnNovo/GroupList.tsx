// src/components/RightColumnNovo/GroupList.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { Group } from './types';

type GroupListProps = {
  groups: Group[];
};

const GroupList: React.FC<GroupListProps> = React.memo(({ groups }) => (
  <section aria-labelledby="groups-heading">
    <h3
      id="groups-heading"
      className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
    >
      Grupos
    </h3>
    <ul className="space-y-3">
      {groups.map((group) => (
        <li key={group.id}>
          <motion.div
            className="flex items-center p-3 bg-[#1d1c49] rounded-lg shadow-sm hover:bg-[#282759] transition-colors duration-200 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            role="button"
            tabIndex={0}
            aria-label={`Selecionar grupo ${group.name}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                // Implementar seleção de grupo
              }
            }}
          >
            <div className="mr-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white shadow-inner">
                <Users size={20} aria-hidden="true" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-white font-semibold">{group.name}</h4>
              <p className="text-gray-400 text-sm">Membros: {group.members}</p>
              <p className="text-gray-400 text-xs truncate">{group.lastMessage}</p>
            </div>
          </motion.div>
        </li>
      ))}
    </ul>
  </section>
));

GroupList.displayName = 'GroupList';

export default GroupList;
