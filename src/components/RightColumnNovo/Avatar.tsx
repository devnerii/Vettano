// src/components/RightColumnNovo/Avatar.tsx

import React, { MouseEvent } from 'react';
import Image from 'next/image';

type AvatarProps = {
  src: string;
  alt?: string;
  online: boolean;
  unreadMessages?: number;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Avatar: React.FC<AvatarProps> = React.memo(
  ({ src, alt = 'Avatar', online, unreadMessages, onClick }) => (
    <div className="relative">
      <button
        onClick={onClick}
        className="focus:outline-none"
        aria-label={
          unreadMessages
            ? `${alt} tem ${unreadMessages} mensagens não lidas`
            : alt
        }
      >
        <Image
          src={src}
          alt={alt}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full border-2 border-gradient-to-r from-purple-400 to-pink-500 object-cover shadow-md"
        />
        {/* Indicador de Status */}
        <span
          className={`absolute top-0 right-0 w-3 h-3 rounded-full border-2 border-[#0f0e29] ${
            online ? 'bg-green-500' : 'bg-gray-500'
          }`}
          aria-label={online ? 'Online' : 'Offline'}
        ></span>
        {/* Badge de Mensagens Não Lidas */}
        {unreadMessages && unreadMessages > 0 && (
          <span
            className="absolute bottom-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
            aria-label={`${unreadMessages} mensagens não lidas`}
          >
            {unreadMessages}
          </span>
        )}
      </button>
    </div>
  )
);

Avatar.displayName = 'Avatar';

export default Avatar;
