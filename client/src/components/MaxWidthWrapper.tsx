import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-3xl px-2 md:px-10", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
