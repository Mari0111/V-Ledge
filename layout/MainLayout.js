import * as React from "react";
import Footer from "../Footer";
import VNavBar from "../components/VNavBar";

export default function MainLayout({ children }) {
  return (
    <div>
      <VNavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
