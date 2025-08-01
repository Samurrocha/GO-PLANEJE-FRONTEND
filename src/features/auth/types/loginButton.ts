//import {icon} from "@/types/icon"

type Provider = "google" | "github" | "credentials";

export interface LoginButtonProps {
  provider?: Provider;
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  styleClassName?: string;
  type?: "button" | "submit";

}