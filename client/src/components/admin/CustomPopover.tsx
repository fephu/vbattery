import { Eye } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import type { ReactNode } from "react";

interface CustomPopoverProps {
  className?: string;
  children: ReactNode;
}

const CustomPopover = ({ children, className }: CustomPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"ghost"}>
          <Eye />
          Xem
        </Button>
      </PopoverTrigger>
      <PopoverContent className="rounded-sm w-fit">{children}</PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
