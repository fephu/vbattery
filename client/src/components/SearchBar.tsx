import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="flex px-3 py-1 items-center shadow rounded-sm border">
      <Input className="border-none" placeholder="Tìm kiếm sản phẩm" />
      <Search />
    </div>
  );
};

export default SearchBar;
