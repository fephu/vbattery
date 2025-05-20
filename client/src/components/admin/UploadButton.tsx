import { useRef, useState, type ChangeEvent } from "react";
import { Button } from "../ui/button";

interface UploadButtonProps {
  handleChangeFile: (file: File) => void;
}

const UploadButton = ({ handleChangeFile }: UploadButtonProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>("");

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    handleChangeFile(file);
  };

  return (
    <>
      {previewUrl ? (
        <Button
          type="button"
          onClick={handleClick}
          size={"sm"}
          variant={"outline"}
        >
          Chọn lại
        </Button>
      ) : (
        <Button type="button" onClick={handleClick} size={"sm"}>
          Chọn hình ảnh
        </Button>
      )}
      <input
        ref={inputRef}
        id="file"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      {previewUrl && (
        <div className="mt-4">
          <img
            src={previewUrl}
            alt="Preview"
            className="max-w-[300px] max-h-[300px] object-contain rounded-sm"
          />
        </div>
      )}
    </>
  );
};

export default UploadButton;
