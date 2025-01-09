export type ITransactionApi = {
    transactions: {
      id: string;
      type: string;
      date: string;
      account: string;
      amount: string;
    }[];
  };