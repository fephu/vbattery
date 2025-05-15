import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState<number>(1);

  const handleMinus = () => {
    setNumber((number) => number - 1);
  };

  const handlePlus = () => {
    setNumber((number) => number + 1);
  };

  return (
    <div className="flex items-center gap-4 border rounded-sm">
      <Button
        variant={"ghost"}
        onClick={handleMinus}
        disabled={number <= 1}
        className="cursor-pointer disabled:cursor-not-allowed"
      >
        <Minus />
      </Button>
      <span>{number}</span>
      <Button variant={"ghost"} onClick={handlePlus} className="cursor-pointer">
        <Plus />
      </Button>
    </div>
  );
};

export default Counter;
