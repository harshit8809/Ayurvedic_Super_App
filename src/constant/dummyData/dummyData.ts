import { FileText, Heart, ShoppingBag, Stethoscope, Timeline, Timer, Watch } from "lucide-react-native";
import { SCREENS } from "../screens";

export const quickActions = [
  {
    id: "consultation",
    title: "Consultation",
    subtitle: "Book Doctors",
    Icon: Stethoscope,
    screen: SCREENS.CONSULTATION,
    navigator: "tab",

  },
  {
    id: "shop",
    title: "Shop",
    subtitle: "Buy Products",
    Icon: ShoppingBag,
    screen: SCREENS.SHOP,
    navigator: "tab",

  },
  {
    id: "records",
    title: "Records",
    subtitle: "Health History",
    Icon: FileText,
    screen: SCREENS.RECORDS,
    navigator: "tab",

  },
  {
    id: "booking",
    title: "Bookings",
    subtitle: "Upcoming Consultation",
    Icon: Timer,
    screen: SCREENS.MY_BOOKINGS,
    navigator: "stack",
  },
  {
    id: "wishlist",
    title: "Wishlist",
    subtitle: "Your Picks",
    Icon: Heart,
    screen: SCREENS.WISHLIST_SCREEN,
    navigator: "stack",
  },
];

export const specializations = [
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Orthopedic",
  "Dentist",
  "General Physician",
  "ENT",
  "Ayurvedic",
];

export const DOCTOR_CATEGORIES = [
  "All",
  "Ayurvedic",
  "ENT",
  "General Physician",
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Orthopedic",
  "Dentist",
]

export const times = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
];

export const PRODUCT_CATEGORIES = [
  "All",
  "Medicine",
  "Supplements",
  "Ayurveda",
  "Skin Care",
  "Hair Care",
  "Personal Care",
];