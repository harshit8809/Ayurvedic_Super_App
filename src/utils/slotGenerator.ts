import { times } from "../constant/dummyData/dummyData";
import { Slot } from "../types/slot";

export const generateSlots = (): Slot[] => {
  return times.map((time, index) => ({
    id: String(index + 1),
    date:
      index < 5
        ? "Today"
        : "Tomorrow",
    time,
    isBooked: false,
  }));
};