// src/components/RightColumnNovo/SearchBar.tsx

import React from 'react';
import { Search } from 'lucide-react';

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = React.memo(
  ({ searchQuery, setSearchQuery }) => (
    <div className="relative mb-4">
      <label htmlFor="search" className="sr-only">
        Pesquisar Amigos
      </label>
      <input
        type="text"
        id="search"
        placeholder="Pesquisar..."
        className="w-full py-2 px-4 bg-[#1d1c49] rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gradient-to-r from-purple-400 to-pink-500 shadow-inner"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Pesquisar Amigos"
      />
      <Search
        className="absolute right-3 top-2.5 text-gray-400"
        size={20}
        aria-hidden="true"
      />
    </div>
  )
);

SearchBar.displayName = 'SearchBar';

export default SearchBar;
