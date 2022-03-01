import React from "react";
import { Grid } from "@mui/material";



export default function VFooter() {
  return (
    <div style={{ backgroundColor: "grey" }}>
      {/* <h1 style={{ color: "white", textAlign: "center" }}>Footer</h1> */}
      <p  style={{ color: "white", textAlign: "center" }}>© V-Ledge видео онлайн хичээл, сургалт 2022</p>
      <Grid paddingLeft={4}>
     <p  style={{ color: "white",  }}>ХОЛБОО БАРИХ</p>
     <p  style={{ color: "white",  }}>Утас: 976-80808080</p>
     <p  style={{ color: "white"  }}>И-мэйл: vledge@business.com</p>
     </Grid>
    </div>
  );
}