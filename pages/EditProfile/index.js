import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Divider, Grid, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import PersonIcon from '@mui/icons-material/Person';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const options = ["Эрэгтэй", "Эмэгтэй", "Бусад"];

export default function EditProfile() {
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <h1 style={{ color: "black", textAlign: "center" }}>
        Хувийн мэдээлэл засварлах
      </h1>
      <p style={{ textAlign: "center" }}>Add information about yourself</p>
      <Divider />

      <Grid container px={40}>
        <Stack direction="row" spacing={2} paddingTop={2}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 120, height: 120 }}
          />
        </Stack>
      </Grid>
      <Grid paddingLeft={44}>
        <div>
          <h3>Maria</h3>
        </div>
      </Grid>
      <Grid paddingLeft={40}>
        <div>
        <Box sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
             <ListItemButton>
             <Link href={"/Profile/"}><ListItemIcon>
                <PersonIcon />
              </ListItemIcon> </Link>
             <ListItemText primary="Public profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalLibraryIcon/>
              </ListItemIcon>
              <ListItemText primary="My learning" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      </Box>
          {/* <Link href={"/Profile/"}>
            <p>View public profile</p>
            
          </Link> */}
          {/* <p>Profile</p>
          <p>My learning</p> */}
        </div>
      </Grid>
      <Grid container justifyContent={"center"} marginTop={-32}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 2,
              width: "50ch",
              display: "flex",
            },
          }}
        >
          <TextField id="outlined-basic" label="Овог" variant="outlined" />
          <TextField id="outlined-basic" label="Нэр" variant="outlined" />

          <TextField id="outlined-basic" label="И-мэйл" variant="outlined" />

          <TextField
            id="outlined-basic"
            label="Утасны дугаар"
            variant="outlined"
          />
          
          <Grid>
            <Box>
            <div>
                <Autocomplete 
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="controllable-states-demo"
                  options={options}
                  sx={{ width: 432 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Хүйс" />
                  )}
                />
              </div>
            </Box>
          </Grid>
          
        </Box>
      </Grid>
      <Stack paddingBottom={20} spacing={2} direction="row" justifyContent={"center"}>
        <Button variant="contained">Save</Button>
      </Stack>
    </div>
  );
}
