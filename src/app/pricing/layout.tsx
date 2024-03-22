import { ReactNode } from "react";
import RootHeader from "../(home)/components/RootHeader";

interface layoutProps {
  children: ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div>
      <RootHeader />
      {children}
    </div>
  );
};

export default layout;
