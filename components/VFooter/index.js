import React from "react";
import { Grid } from "@mui/material";
import { padding } from "@mui/system";



export default function VFooter() {
  return (
    <Grid paddingTop={10}>
    <div style={{ backgroundColor: "#fba333", padding: 8}}>
      {/* <h1 style={{ color: "white", textAlign: "center" }}>Footer</h1> */}
      <p  style={{ color: "white", textAlign: "center" }}>© V-Ledge видео онлайн хичээл, сургалт 2022</p>
      <Grid paddingLeft={4}>
     <p  style={{ color: "white",  }}>ХОЛБОО БАРИХ</p>
     <p  style={{ color: "white",  }}>Утас: 976-80******</p>
     <p  style={{ color: "white"  }}>И-мэйл: vledge@business.mn</p>
     </Grid>
    </div>
    </Grid>
  );
}