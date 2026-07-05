export interface Slot {
  id: string;
  date: string;
  time: string;
  isBooked: boolean;
  isExpired?: boolean;
}