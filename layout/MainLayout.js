import * as React from "react";
import VNavBar from "../components/VNavBar";
import VFooter from "../components/VFooter";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function MainLayout({ children }) {
  return (
    <div>
      <VNavBar />
      <main>{children}</main>
      <VFooter />
      
    </div>
  );
}
