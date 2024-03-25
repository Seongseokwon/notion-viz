import Header from "@/components/Header";
import { ReactNode } from "react";

interface ChartLayoutProps {
  children: ReactNode;
}

const ChartLayout = ({ children }: ChartLayoutProps) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      {children}
    </div>
  );
};

export default ChartLayout;
