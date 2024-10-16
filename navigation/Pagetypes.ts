import { NavigationProp } from "@react-navigation/native";

export type PageTypes =
  | "Home"
  | "UsageHistory"
  | "BalanceInput"
  | "Profile"
  | "RecurringPayment";
export type localPageTypes = NavigationProp<Record<PageTypes, undefined>>;
