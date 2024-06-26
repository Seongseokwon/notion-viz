import Header from "@/components/Header";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      {children}
    </div>
  );
};

export default DashboardLayout;
