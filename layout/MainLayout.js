import * as React from "react";
import VNavBar from "../components/VNavBar";
import VFooter from "../components/VFooter";

export default function MainLayout({ children }) {
  return (
    <div>
      <VNavBar />
      <main>{children}</main>
      <VFooter />
    </div>
  );
}
