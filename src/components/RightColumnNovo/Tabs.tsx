// src/components/RightColumnNovo/Tabs.tsx

import React from 'react';

type TabType = 'friends' | 'groups' | 'requests';

type TabsProps = {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
};

const Tabs: React.FC<TabsProps> = React.memo(({ activeTab, setActiveTab }) => (
  <nav className="flex space-x-2 mb-4" aria-label="Menu de Navegação">
    <button
      onClick={() => setActiveTab('friends')}
      className={`flex-1 py-2 rounded-lg text-center font-semibold ${
        activeTab === 'friends'
          ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white'
          : 'bg-[#1d1c49] text-white'
      } transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500`}
      aria-current={activeTab === 'friends' ? 'page' : undefined}
    >
      Amigos
    </button>
    <button
      onClick={() => setActiveTab('groups')}
      className={`flex-1 py-2 rounded-lg text-center font-semibold ${
        activeTab === 'groups'
          ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white'
          : 'bg-[#1d1c49] text-white'
      } transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500`}
      aria-current={activeTab === 'groups' ? 'page' : undefined}
    >
      Grupos
    </button>
    <button
      onClick={() => setActiveTab('requests')}
      className={`flex-1 py-2 rounded-lg text-center font-semibold ${
        activeTab === 'requests'
          ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white'
          : 'bg-[#1d1c49] text-white'
      } transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500`}
      aria-current={activeTab === 'requests' ? 'page' : undefined}
    >
      Solicitações
    </button>
  </nav>
));

Tabs.displayName = 'Tabs';

export default Tabs;
