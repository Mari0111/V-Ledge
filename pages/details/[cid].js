import { Grid} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import PlayCircleOutline from "@mui/icons-material/PlayCircleOutline";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";



export default function Details() {
  const router = useRouter();
  const { cid } = router.query;

  return (
    <>
      <div>
        <Grid container justifyContent={"flex-end"}   >
          <List 
            sx={{
              display: 'flex',
              flexDirection: 'column',
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
        <Image src="/flutter_vid.png" width="1100" height="550"  />
      </div>
      <div>
        <Grid paddingLeft={6} paddingRight={16}>
          {/* {cid }  */}
          {/* <a>Back to home</a> */}

          <h2>About this course</h2>
          <p>Build Android and iOS apps with a flutter framework</p>

          <Divider />

          <p>Features</p>
          <Grid paddingLeft={30} marginTop={-4.5}>
            <p>Available on iOS and Android</p>
          </Grid>
          <Divider />

          <p>Description</p>
          <Grid paddingLeft={30} marginTop={-4.5}>
            <p>
              Hello everyone, Welcome to the beginners course of flutter, This
              course will teach
              <br /> you how to create Flutter application in a very practical
              and simple manner, as every
              <br /> lecture comes with full coding screencast and corresponding
              code in notebook.
              <br />
            </p>
            <p>
              {" "}
              This course will be updates frequently as flutter and dart are in
              their <br /> early stages of development.
            </p>
            <p> So what are you waiting for?</p>
            <h5>What you'll learn</h5>
            <p>•Better understanding of flutter and it's basic widgets</p>
            <p>•Develop basic flutter application for android and iOS</p>
            <h5>Are there any course requirements or prerequisites?</h5>
            <p>•Installed Android Studio/intellij/VSCode with flutter</p>
            <p>•Basic knowledge of dart language</p>
            <p>•Basic understanding of OOPS Concept</p>

          </Grid>
          <Divider />

          <p>Instructor</p>
          <Grid paddingLeft={30} marginTop={-4.5}>
          <div>
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                src="https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6943.jpg?size=626&ext=jpg"
                sx={{ width: 60, height: 60 }}
              />
              <div >
                <Grid marginTop={-2}>
              <h3>Mayuresh Wankhede</h3>
              <p >Web / Android Developer & Instructor</p>
              </Grid>
              </div>
            </Stack>
          </div>
          
          
          <p>
            Hi! I'm Mayuresh Wankhede. I'm a Web/ Android developer with a
            strong focus on<br /> pragmatism and simplicity.I have completed my
            bachelor degree in Computer <br />Science Engineering and I am skilled in many development
            languages including Java,<br /> C++ , PHP and to name a few.
          </p>
          <p>I have been working on a diverse range of different software projects and I enjoy<br />  keeping up with time, constantly learning new languages, concepts, and techs.</p>

          <Divider />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
