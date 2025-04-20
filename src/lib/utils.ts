import { tours } from '@/data/tours';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTour(id: string) {
  return tours.find((tour) => tour.id === id);
}
