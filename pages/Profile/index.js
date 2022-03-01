import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";



export default function ProfilePage() {
  return (
    <div>
      <h1 style={{ color: "black", textAlign: "center" }}>Public profile</h1>
      <p style={{ textAlign: "center" }}>Add information about yourself</p>
      
      
      <Grid paddingLeft={10}>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 70, height: 70 }}
          />
        </Stack>
      </Grid>
      <Stack direction="row" spacing={2} >
        <Button>Change profile picture</Button>
      </Stack>
      <Grid container flexDirection={"column"}  >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
       
          <TextField id="outlined-basic" label="Овог" variant="outlined" />
          <TextField id="outlined-basic" label="Нэр" variant="outlined" />
          
          <TextField id="outlined-basic" label="И-мэйл" variant="outlined" />

          <TextField
            id="outlined-basic"
            label="Утасны дугаар"
            variant="outlined"
          />
          
        
      </Box>
      </Grid>
    </div>
  );
}
