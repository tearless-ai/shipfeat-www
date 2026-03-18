"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface EarlyAccessContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const EarlyAccessContext = createContext<EarlyAccessContextValue | null>(null);

export function EarlyAccessProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <EarlyAccessContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </EarlyAccessContext.Provider>
  );
}

export function useEarlyAccess(): EarlyAccessContextValue {
  const ctx = useContext(EarlyAccessContext);
  if (!ctx) {
    throw new Error("useEarlyAccess must be used inside EarlyAccessProvider");
  }
  return ctx;
}
