"use client";

import { ArrowRight } from "lucide-react";
import { useEarlyAccess } from "./EarlyAccessContext";

interface EarlyAccessButtonProps {
  className?: string;
  children?: React.ReactNode;
  /** Show trailing arrow icon (default: true) */
  showArrow?: boolean;
  arrowSize?: number;
}

export function EarlyAccessButton({
  className,
  children = "Start Free Trial",
  showArrow = true,
  arrowSize = 16,
}: EarlyAccessButtonProps) {
  const { openModal } = useEarlyAccess();

  return (
    <button onClick={openModal} className={className}>
      {children}
      {showArrow && <ArrowRight size={arrowSize} />}
    </button>
  );
}
