export interface ContractIdentifier {
  address: string;
  name: string;
}

export interface PollOption {
  id: number;
  label: string;
  votes: number;
}

export interface Badge {
  id: number;
  name: string;
  recipient: string;
  mintedAt: number;
}

export interface CounterState {
  name: string;
  value: number;
  lastUpdatedBy: string | null;
}

export interface TxOptions {
  fee?: number;
  nonce?: number;
  postConditions?: unknown[];
}
