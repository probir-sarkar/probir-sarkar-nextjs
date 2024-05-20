// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/system";
import React from "react";
import { Toaster } from "sonner";

export function NextUIProviders({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
      <Toaster richColors />
    </NextUIProvider>
  );
}
