import { ChevronUp, Home, Inbox, Settings, User2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router";
import { GoTools } from "react-icons/go";
import { BsBagHeart } from "react-icons/bs";
import { useAuth } from "@/hooks/use-auth";

const items = [
  {
    title: "Trang chủ",
    url: "/ban-dieu-khien",
    icon: Home,
  },
  {
    title: "Banner",
    url: "/ban-dieu-khien/banner",
    icon: Inbox,
  },
  {
    title: "Sản phẩm",
    url: "/ban-dieu-khien/san-pham",
    icon: BsBagHeart,
  },
  {
    title: "Thiết bị sử dụng",
    url: "/ban-dieu-khien/thiet-bi-su-dung",
    icon: GoTools,
  },
  {
    title: "Cài đặt",
    url: "/ban-dieu-khien/cai-dat",
    icon: Settings,
  },
];

const AppSidebar = () => {
  const { user } = useAuth();

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="text-4xl tracking-tighter text-green-900">
            VBattery Energry.
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    size={"lg"}
                    isActive={window.location.pathname === item.url}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> {user?.fullName}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Tài khoản</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <span>Đăng xuất</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
