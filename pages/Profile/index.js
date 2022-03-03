import { Avatar, Grid, Stack } from "@mui/material";
import Image from "next/image";
import * as React from "react";



export default function EditProfile() {
    return (
      <div>
        <Grid>
      <div style={{ backgroundColor: "black", padding: 25}}>
      <h1 style={{ paddingLeft: 200 ,color: "white" }}>Maria</h1>
    </div>
    </Grid>
      
        <Grid paddingLeft={40}>
          
          <Stack direction="row" spacing={2} paddingTop={2}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 120, height: 120 }}
            />
          </Stack>
        </Grid>

        
        <p style={{ paddingLeft: 700 }}>Learning</p>
      
       
        
        
        </div>
    )
}