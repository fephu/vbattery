import AppSidebar from "@/components/admin/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { PropsWithChildren } from "react";

const PrivateLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger className="size-10" />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default PrivateLayout;
