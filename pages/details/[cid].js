import { Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import PlayCircleOutline from "@mui/icons-material/PlayCircleOutline";
import Divider from '@mui/material/Divider';


export default function Details() {
  const router = useRouter();
  const { cid } = router.query;
  
  return (
    <>
      <div>
        <Grid container justifyContent={"flex-end"} alignItems={"flex-start"}>
          <List
            sx={{
              width: "100%",
              maxWidth: 410,
              bgcolor: "background.paper",
              position: "absolute",
              overflow: "auto",
              maxHeight: 550,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            {[1, 2, 3, 4, 5].map((sectionId) => (
              <li key={`section-${sectionId}`}>
                <ul>
                  <ListSubheader>{`Section ${sectionId}: Flutter Course`}</ListSubheader>

                  {[1, 2, 3].map((item) => (
                    <ListItem key={`item-${sectionId}-${item}`}>
                      <ListItemText primary={`Item ${item}`} />
                      <PlayCircleOutline />
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </Grid>
        <Image src="/flutter_vid.png" width="1100" height="550" />
      </div>
      <div>
    <Grid paddingLeft={4} paddingRight={8}>
      
        {cid } 
        {/* <a>Back to home</a> */}

        <h2>About this course</h2>
        <p>Build Android and iOS apps with a flutter framework</p>
      
      
        <Divider />
        <h3>Features</h3>
        <p>Available on iOS and Android</p>
        <Divider />

        <h3>Description</h3>
        <p>
          Hello everyone, Welcome to the beginners course of flutter, This
          course will teach you how to create Flutter<br /> application in a very
          practical and simple manner, as every lecture comes with full coding
          screencast and <br />corresponding code in notebook.<br />
          This course will be updates frequently as flutter and dart are in their <br /> early stages of development.
          So what are you waiting for?
        </p>
        <h5>What you'll learn</h5>
        <p>1.Better understanding of flutter and it's basic widgets</p>
        <p>2.Develop basic flutter application for android and iOS</p>
        <Divider />
        
      
        <h4>Instructor</h4>
        <p>
          Hi! I'm Mayuresh Wankhede. I'm a Web/ Android developer with a strong
          focus on pragmatism and simplicity.I have completed my bachelor degree<br />
          in Computer Science Engineering and I am skilled in many development
          languages including Java, C++ , PHP and to name a few.
        </p>
        <Divider />
        </Grid>
      </div>
      
    </>
  );
}
