import { fetchAllEquipments } from "@/api/equipment";
import type { Equipment } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Link } from "react-router";
import { buttonVariants } from "../ui/button";

const EquipmentBar = () => {
  const { data, error, isLoading, isError } = useQuery<Equipment[], Error>({
    queryKey: ["equipments"],
    queryFn: fetchAllEquipments,
  });

  if (isLoading) {
    return <Loader2 className="animate-spins" />;
  }

  return (
    <div className="shadow flex flex-col">
      <div className="bg-green-900 px-4 py-2 text-white">
        <span className="text-base tracking-tight">Thiết bị sử dụng</span>
      </div>
      {data &&
        data.map((eq) => (
          <Link
            key={eq.slug}
            to={`/thiet-bi-su-dung/${eq.slug}`}
            className="text-base tracking-tight px-4 py-2 hover:bg-accent hover:text-accent-foreground border-b"
          >
            {eq.ten_thiet_bi}
          </Link>
        ))}
    </div>
  );
};

export default EquipmentBar;
