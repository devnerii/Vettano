// src/components/RightColumnNovo/RequestList.tsx

import React from 'react';
import { motion } from 'framer-motion';
import Avatar from './Avatar';
import { Request } from './types';

type RequestListProps = {
  requests: Request[];
};

const RequestList: React.FC<RequestListProps> = React.memo(({ requests }) => (
  <section aria-labelledby="requests-heading">
    <h3
      id="requests-heading"
      className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
    >
      Solicitações
    </h3>
    <ul className="space-y-3">
      {requests.map((request) => (
        <li key={request.id}>
          <motion.div
            className="flex items-center p-3 bg-[#1d1c49] rounded-lg shadow-sm hover:bg-[#282759] transition-colors duration-200 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            role="button"
            tabIndex={0}
            aria-label={`Solicitação de ${request.name}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                // Implementar ações de aceitar/recusar
              }
            }}
          >
            <div className="mr-3">
              <Avatar
                src={`https://i.pravatar.cc/150?u=${request.id}`}
                alt={request.name}
                online={request.online}
              />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-semibold">{request.name}</h4>
              <div className="flex space-x-2 mt-1">
                <button
                  className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg text-white text-sm hover:from-blue-500 hover:to-green-400 transition-colors duration-200"
                  aria-label={`Aceitar solicitação de ${request.name}`}
                >
                  Aceitar
                </button>
                <button
                  className="px-3 py-1 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg text-white text-sm hover:from-pink-500 hover:to-red-400 transition-colors duration-200"
                  aria-label={`Recusar solicitação de ${request.name}`}
                >
                  Recusar
                </button>
              </div>
            </div>
          </motion.div>
        </li>
      ))}
    </ul>
  </section>
));

RequestList.displayName = 'RequestList';

export default RequestList;
