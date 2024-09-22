// src/components/RightColumnNovo/types.ts

export type Friend = {
  id: number;
  name: string;
  online: boolean;
  status: string;
  currentGame: string;
  lastActivity: string;
  level: number;
  achievements: number;
  lastMessage?: string;
  unreadMessages?: number;
  totalWins: number;
  playerWallet: string;
  gameStats: string;
  registrationDate: string;
};

export type Group = {
  id: number;
  name: string;
  members: number;
  lastMessage: string;
};

export type Request = {
  id: number;
  name: string;
  online: boolean;
  status: string;
  currentGame: string;
  lastActivity: string;
  level: number;
  achievements: number;
};
