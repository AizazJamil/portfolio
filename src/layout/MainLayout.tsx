import type { ReactNode } from "react";
import { Navbar, Footer } from "@/components/index";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="main__layout">
      <div className="main__wrapper">
        <Navbar />
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
