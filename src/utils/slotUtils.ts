import { Slot } from '../types/slot';

const parseTime = (time: string): { hours: number; minutes: number } => {
  const [timePart, period] = time.split(' ');
  const [hoursStr, minutesStr] = timePart.split(':');
  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  if (period === 'PM' && hours !== 12) {
    hours += 12;
  }
  if (period === 'AM' && hours === 12) {
    hours = 0;
  }

  return { hours, minutes };
};

export const getSlotDateTime = (slot: Slot): Date => {
  const now = new Date();
  const { hours, minutes } = parseTime(slot.time);
  const date = new Date(now);

  if (slot.date === 'Tomorrow') {
    date.setDate(date.getDate() + 1);
  }

  date.setHours(hours, minutes, 0, 0);
  return date;
};

export const isSlotExpired = (slot: Slot): boolean => {
  return getSlotDateTime(slot).getTime() < Date.now();
};

export const getSlotKey = (doctorId: string, slotId: string): string => {
  return `${doctorId}:${slotId}`;
};

export const filterAvailableSlots = (
  slots: Slot[],
  bookedSlotKeys: Set<string>,
  doctorId: string,
): Slot[] => {
  return slots.map(slot => {
    const key = getSlotKey(doctorId, slot.id);
    const expired = isSlotExpired(slot);
    const booked = bookedSlotKeys.has(key) || slot.isBooked;

    return {
      ...slot,
      isBooked: booked,
      isExpired: expired,
    };
  });
};

export const isSlotSelectable = (slot: Slot & { isExpired?: boolean }): boolean => {
  return !slot.isBooked && !slot.isExpired;
};
