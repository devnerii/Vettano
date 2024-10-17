import React, { useState, useRef, useEffect } from 'react';

type FilterOption = 'Diário' | 'Mensal' | 'Outras Opções' | 'Opção 1' | 'Opção 2' | 'Opção 3';

const SegmentedControl: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>('Diário');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleFilterChange = (filter: FilterOption) => {
    if (filter === 'Outras Opções') {
      setSelectedFilter(filter);
      setIsDropdownOpen((prev) => !prev);
    } else {
      setSelectedFilter(filter);
      setIsDropdownOpen(false);
    }
  };

  const handleSubOptionChange = (option: FilterOption) => {
    setSelectedFilter('Outras Opções'); // Manter 'Outras Opções' como ativo
    setIsDropdownOpen(false);
    // Aqui você pode gerenciar a opção selecionada do submenu se necessário
    // Por exemplo, armazenar em outro estado ou executar uma ação específica
  };

  // Fecha o dropdown se clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center mb-6 relative" ref={dropdownRef}>
      {/* Definição das animações e estilos personalizados */}
      <style>
        {`
          @keyframes gradientSlide {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }

          @keyframes pulseGlow {
            0% {
              box-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
            }
            100% {
              box-shadow: 0 0 20px rgba(138, 43, 226, 1);
            }
          }

          .gradient-slide {
            animation: gradientSlide 1.5s ease forwards, pulseGlow 1.5s infinite alternate;
            background: linear-gradient(to right, #8a2be2, #9932CC); /* Apenas tons de roxo */
            background-size: 200% 200%;
            color: #fff;
          }

          .segmented-button {
            position: relative;
            overflow: hidden;
            transition: background 0.5s ease, color 0.5s ease;
          }

          /* Efeito de hover apenas para botões inativos */
          .segmented-button:not(.active):hover {
            animation: gradientSlide 1.5s ease forwards, pulseGlow 1.5s infinite alternate;
            background: linear-gradient(to right, #8a2be2, #9932CC); /* Apenas tons de roxo */
            background-size: 200% 200%;
            color: #fff;
          }
        `}
      </style>

      <div className="flex rounded-full overflow-hidden border-2 border-[#8a2be2]">
        {['Diário', 'Mensal', 'Outras Opções'].map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter as FilterOption)}
            className={`segmented-button px-4 py-2 text-sm sm:text-base md:text-sm lg:text-base xl:text-base 2xl:text-lg transition-colors duration-300 focus:outline-none ${
              selectedFilter === filter
                ? 'bg-[#8a2be2] text-white active'
                : 'bg-transparent text-[#8a2be2] opacity-70'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Dropdown para "Outras Opções" */}
      {isDropdownOpen && (
        <div className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 border border-[#8a2be2] rounded-md shadow-lg z-10">
          <ul>
            {['Opção 1', 'Opção 2', 'Opção 3'].map((option) => (
              <li key={option}>
                <button
                  onClick={() => handleSubOptionChange(option as FilterOption)}
                  className={`w-full text-left px-4 py-2 text-sm text-[#8a2be2] hover:bg-[#8a2be2] hover:text-white transition-colors duration-200`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SegmentedControl;
