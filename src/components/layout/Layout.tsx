
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  showHeader?: boolean;
}

export default function Layout({ 
  children, 
  showFooter = true,
  showHeader = true 
}: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {showHeader && <Header />}
      <main className="flex-grow pb-16 cuthere-container">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
