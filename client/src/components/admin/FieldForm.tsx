import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface FieldFormProps {
  id: string;
  label: string;
  handleChange: (key: any, value: string) => void;
}

const FieldForm = ({ id, label, handleChange }: FieldFormProps) => {
  return (
    <div>
      <Label
        htmlFor={id}
        className="text-right text-sm md:text-base tracking-tight"
      >
        {label}
      </Label>
      <Input
        id={id}
        className="col-span-3 rounded-sm"
        onChange={(e) => handleChange(id, e.target.value)}
      />
    </div>
  );
};

export default FieldForm;
