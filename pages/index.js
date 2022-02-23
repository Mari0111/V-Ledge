import * as React from "react";
import Footer from "../Footer";
import TestAb from "../components/TestAb";
import NoteCard from "../components/Notecard";
import { Box, Grid } from "@mui/material"


//test

export default function PrimarySearchAppBar() {
  
  const data = [
    { title: "FLUTTER, DART" },
    { title: "HTML, CSS, JS" },
    { title: "REACT JS" },
    { title: "IT BASICS" },
    { title: "PYTHON" },
    { title: "NEXT JS" },
    { title: "CODING BEGINNER" },
    { title: "CODING ADVANCED" },
    { title: "AWS" },
    { title: "DATABASE" },
  ];
  return (
    <div>
      <TestAb />
      <h1>Online classes</h1>

      <div>
        
        <Grid container spacing={4} >
          

        {data.map((elem, index) => (
          <Grid item xs={4}  display={'flex'} justifyContent={'center'} justifyContent={"space-around"} key={data.indexOf(elem)  }> 
          <NoteCard item={elem}  />
          </Grid>
        ))}
        
        </Grid >
      </div>

      <Footer />
    </div>
  );
}
