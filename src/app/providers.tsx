"use client";
import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      {children}
      <Toaster richColors />
    </HeroUIProvider>
  );
}
