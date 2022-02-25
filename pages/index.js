import * as React from "react";

import NoteCard from "../components/NoteCard";
import { Box, Grid } from "@mui/material";

export default function home() {
  const data = [
    { id: 1, title: "FLUTTER, DART" },
    { id: 2, title: "HTML, CSS, JS" },
    { id: 3, title: "REACT JS" },
    { id: 4, title: "IT BASICS" },
    { id: 5, title: "PYTHON" },
    { id: 6, title: "NEXT JS" },
    { id: 7, title: "CODING BEGINNER" },
    { id: 8, title: "CODING ADVANCED" },
    { id: 9, title: "AWS" },
    { id: 10, title: "DATABASE" },
  ];
  return (
    <div>
      <h1>Online classes</h1>

      <div>
        <Grid container px={35} spacing={4}>
          {data.map((elem, index) => (
            <Grid
              item
              xs={4}
              display={"flex"}
              justifyContent={"center"}
              key={data.indexOf(elem)}
            >
              <NoteCard item={elem} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
