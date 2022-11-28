export enum TransactionStatus {
  Success,
  Failed,
}

export interface ToastItem {
  status: TransactionStatus;
  message: string;
  hash: string;
}
