import { ITransactionApi } from '@/types/Transaction';

export const transactionsApi: ITransactionApi = {
  transactions: [
    {
      id: '1',
      type: 'Cobro exitoso',
      date: '2024-01-09',
      account: 'Luis González',
      amount: '$50,000',
    },
    {
      id: '2',
      type: 'Cobro exitoso',
      date: '2024-01-09',
      account: 'Ana María Pérez',
      amount: '$4,000',
    },
    {
      id: '3',
      type: 'En proceso',
      date: '2024-01-09',
      account: 'Ana María Pérez',
      amount: '$30,000',
    },
  ],
};
