import * as React from "react";
import VNavBar from "../components/VNavBar";
import VFooter from "../components/VFooter"




export default function MainLayout({ children }) {
  return (
    <div>
      <body >
        <style>{'body { background-color: #fff3e0; }'}</style>
      <VNavBar />
      <main>{children}</main>
      <VFooter />
      </body>
    </div>
  );
}
