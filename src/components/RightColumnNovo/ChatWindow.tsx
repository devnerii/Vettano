// src/components/RightColumnNovo/ChatWindow.tsx

import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { X, Send } from 'lucide-react';
import Avatar from './Avatar';
import { Friend } from './types';

type ChatWindowProps = {
  selectedFriend: Friend;
  sendMessage: (msg: string) => void;
  closeChat: () => void;
};

const ChatWindow: React.FC<ChatWindowProps> = React.memo(
  ({ selectedFriend, sendMessage, closeChat }) => {
    const [message, setMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleSend = () => {
      if (message.trim() !== '') {
        sendMessage(message);
        setMessage('');
        // Adicionar lógica para adicionar a mensagem à lista de mensagens
      }
    };

    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [selectedFriend]);

    if (!selectedFriend) {
      return (
        <div className="flex-grow flex items-center justify-center text-gray-400">
          <p>Selecione um amigo para iniciar a conversa</p>
        </div>
      );
    }

    // Mensagens mockadas
    const messages = [
      { id: 1, sender: 'friend', content: 'Olá! Como você está?', timestamp: '10:00 AM' },
      { id: 2, sender: 'user', content: 'Estou bem, obrigado! E você?', timestamp: '10:02 AM' },
      { id: 3, sender: 'friend', content: 'Tudo ótimo! Quer jogar algo mais tarde?', timestamp: '10:05 AM' },
    ];

    return (
      <div className="flex flex-col h-full">
        <header className="flex items-center p-4 bg-[#1d1c49] shadow-md">
          <Avatar
            src={`https://i.pravatar.cc/150?u=${selectedFriend.id}`}
            alt={selectedFriend.name}
            online={selectedFriend.online}
            unreadMessages={selectedFriend.unreadMessages}
          />
          <div className="ml-3">
            <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {selectedFriend.name}
            </h3>
            <p className="text-gray-400 text-sm">{selectedFriend.status}</p>
          </div>
          <button
            onClick={closeChat}
            className="ml-auto text-gradient-to-r from-purple-400 to-pink-500 hover:text-white transition-colors duration-200"
            aria-label={`Fechar chat com ${selectedFriend.name}`}
          >
            <X size={24} />
          </button>
        </header>
        <div
          className="flex-grow p-4 overflow-y-auto custom-scrollbar bg-[#0f0e29]"
          role="log"
          aria-live="polite"
        >
          <ul className="space-y-4">
            {messages.map((msg) => (
              <li
                key={msg.id}
                className={`flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <motion.div
                  className={`max-w-xs p-3 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white'
                      : 'bg-[#282759] text-white'
                  } shadow-md`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{msg.content}</p>
                  <span className="text-xs text-gray-300">{msg.timestamp}</span>
                </motion.div>
              </li>
            ))}
          </ul>
          <div ref={messagesEndRef} />
        </div>
        <form
          className="p-4 bg-[#1d1c49] flex items-center mb-4 space-x-2 shadow-inner"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            handleSend();
          }}
          aria-label={`Enviar mensagem para ${selectedFriend.name}`}
        >
          <label htmlFor="chat-input" className="sr-only">
            Digite sua mensagem
          </label>
          <input
            type="text"
            id="chat-input"
            placeholder="Digite sua mensagem..."
            className="flex-grow py-2 px-4 bg-[#0f0e29] rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gradient-to-r from-purple-400 to-pink-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-required="true"
          />
          <button
            type="submit"
            className="p-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full hover:from-pink-500 hover:to-purple-400 transition-colors duration-200"
            aria-label="Enviar Mensagem"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    );
  }
);

ChatWindow.displayName = 'ChatWindow';

export default ChatWindow;
