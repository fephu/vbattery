import { fetchAllEquipments } from "@/api/equipment";
import type { Equipment } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const EquipmentBar = () => {
  const { data } = useQuery<Equipment[], Error>({
    queryKey: ["equipments"],
    queryFn: fetchAllEquipments,
  });

  const updateEquipInSearch = (slug: string) => {
    const params = new URLSearchParams(location.search);
    params.set("equip", slug);
    return `${location.pathname}?${params.toString()}`;
  };

  return (
    <div className="shadow flex flex-col mt-8">
      <div className="bg-green-950 px-4 py-3 text-white">
        <span className="text-base tracking-tight">Thiết bị sử dụng</span>
      </div>
      {data &&
        data.map((eq) => (
          <Link
            key={eq.slug}
            to={updateEquipInSearch(eq.slug)}
            reloadDocument
            className="text-base tracking-tight px-4 py-2 hover:bg-accent hover:text-accent-foreground border-b"
          >
            {eq.ten_thiet_bi}
          </Link>
        ))}
    </div>
  );
};

export default EquipmentBar;
