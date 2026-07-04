import { FileText, ShoppingBag, Stethoscope } from "lucide-react-native";
import { SCREENS } from "../screens";

export const quickActions = [
  {
    id: "consultation",
    title: "Consultation",
    subtitle: "Book Doctors",
    Icon: Stethoscope,
    screen: SCREENS.CONSULTATION,
  },
  {
    id: "shop",
    title: "Shop",
    subtitle: "Buy Products",
    Icon: ShoppingBag,
    screen: SCREENS.SHOP,
  },
  {
    id: "records",
    title: "Records",
    subtitle: "Health History",
    Icon: FileText,
    screen: SCREENS.RECORDS,
  },
];