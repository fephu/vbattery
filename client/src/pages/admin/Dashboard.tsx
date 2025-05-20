import { buttonVariants } from "@/components/ui/button";
import PrivateLayout from "@/layouts/PrivateLayout";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";

const Dashboard = () => {
  return (
    <PrivateLayout>
      <div className="pb-20">
        <div className="flex flex-col items-start md:flex-row md:items-center px-4 md:px-20 gap-10">
          <Link
            to={"/"}
            className={buttonVariants({
              variant: "outline",
              className: "w-fit",
            })}
          >
            <ChevronLeft /> VBattery.com
          </Link>
          <span className="text-5xl tracking-tighter">
            Chào mừng đến hệ quản trị <br />
            <span className="text-green-900 text-6xl">VBattery Energry.</span>
          </span>
        </div>

        <div className="mt-8 px-4">
          <img
            src={
              "https://5vy6ewfq47.ufs.sh/f/H8JVPOYGfUDYADE2tWJn6Z82VNE9uk1mFc7zoGWyCHJ3LxTM"
            }
            alt=""
            className=""
          />
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Dashboard;
