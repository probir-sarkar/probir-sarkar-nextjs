import React, { useMemo } from "react";
import { cn } from "@/libs/utils";

type ButtonProps = {
  variant?: "primary" | "secondary" | "success" | "danger";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  onClick,
  children,
  ...props
}) => {
  const classes = useMemo(() => getButtonClasses(variant), [variant]);
  return (
    <button className={cn(classes, className)} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;

const getButtonClasses = (variant: string) => {
  let classes = "px-4 py-2 rounded-md font-medium  transition duration-300";

  switch (variant) {
    case "primary":
      classes +=
        "bg-primary text-black hover:bg-transparent border-2 border-primary hover:text-white ";
      break;
    case "secondary":
      classes +=
        " bg-transparent text-white border-2 hover:bg-primary hover:text-black";
      break;
    case "success":
      classes += " bg-green-500 text-white hover:bg-green-600";
      break;
    case "danger":
      classes += " bg-red-500 text-white hover:bg-red-600";
      break;
    default:
      break;
  }

  return classes;
};
