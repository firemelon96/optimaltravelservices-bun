import { expeditions } from '@/data/expeditions';
import { tours } from '@/data/tours';
import { transfers } from '@/data/transfers';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTour(id: string) {
  return tours.find((tour) => tour.id === id);
}

export function getTransfer(id: string) {
  return transfers.find((transfer) => transfer.id === id);
}

export function getExpedition(id: string) {
  return expeditions.find((expe) => expe.id === id);
}

export function formatCurrency(price: number) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
