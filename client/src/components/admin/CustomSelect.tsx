import type { ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface CustomSelectProps<TData> {
  data: TData[];
  id: string;
  getValue: (item: TData) => string;
  getLabel?: (item: TData) => ReactNode;
  onChange: (key: any, value: string) => void;
}

const CustomSelect = <TData,>({
  data,
  id,
  getValue,
  getLabel = getValue,
  onChange,
}: CustomSelectProps<TData>) => {
  const handleChangle = (value: string) => {
    onChange(id, value);
  };

  return (
    <Select onValueChange={handleChangle}>
      <SelectTrigger className="w-full rounded-sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((item) => {
            const value = getValue(item);
            return (
              <SelectItem key={value} value={value}>
                {getLabel(item)}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
